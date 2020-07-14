import React from 'react'
import WebMidi, { Input, Output } from 'webmidi'
import mitt from 'mitt'
import { createMidiIOStore, MidiIOStore } from 'src/state/midiIO'

const midiEmitter = mitt()

export async function enableWebMidi(): Promise<typeof WebMidi> {
  console.info('Enabling WebMidi')
  return new Promise((resolve, reject) => {
    const requireSysExPermission = true

    WebMidi.enable(error => {
      if (error) {
        return reject(error)
      }
      resolve()
      midiEmitter.emit('enabled')
    }, requireSysExPermission)
  })
}

export interface MidiContextState {
  stores: {
    io: MidiIOStore
  }
}

const defaultState: MidiContextState = {
  stores: {
    io: createMidiIOStore()
  }
}

export const MidiContext = React.createContext<MidiContextState>(defaultState)

export const MidiProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<MidiContextState>(defaultState)

  React.useEffect(() => {
    enableWebMidi().then(() => {
      state.stores.io.dispatch('load', null)
    })
  }, [])

  return <MidiContext.Provider value={state}>{children}</MidiContext.Provider>
}

export function useMidi() {
  return React.useContext(MidiContext)
}

// --

export function useMidiInputs() {
  const [inputs, setInputs] = React.useState<Input[]>([])
  const runEffect = () => {
    const listener = () => {
      setInputs(WebMidi.inputs)
    }
    if (!WebMidi.enabled) {
      midiEmitter.on('enabled', runEffect)
      return () => {
        midiEmitter.off('enabled', runEffect)
      }
    }
    WebMidi.addListener('connected', listener)
    WebMidi.addListener('disconnected', listener)
    return () => {
      WebMidi.removeListener('connected', listener)
      WebMidi.removeListener('disconnected', listener)
    }
  }
  React.useEffect(runEffect, [])
  return inputs
}

export function useMidiOutputs() {
  const [outputs, setOutputs] = React.useState<Output[]>([])
  React.useEffect(() => {
    const listener = () => {
      setOutputs(WebMidi.outputs)
    }
    if (!WebMidi.enabled) {
      midiEmitter.on('enabled', listener)
      return () => {
        midiEmitter.off('enabled', listener)
      }
    }
    WebMidi.addListener('connected', listener)
    WebMidi.addListener('disconnected', listener)
    return () => {
      WebMidi.removeListener('connected', listener)
      WebMidi.removeListener('disconnected', listener)
    }
  }, [WebMidi.enabled])
  return outputs
}
