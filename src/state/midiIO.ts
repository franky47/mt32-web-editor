import vegemite from 'vegemite'
import WebMidi, { Input, Output } from 'webmidi'

export interface MidiIOState {
  input: Input | null
  output: Output | null
}

export interface MidiIOEventMap {
  load: null
  selectInput: Input
  selectOutput: Output
}

export type MidiIOStore = ReturnType<typeof createMidiIOStore>

export function createMidiIOStore() {
  const store = vegemite<MidiIOEventMap, MidiIOState>({
    input: null,
    output: null
  })
  store.on('load', state => {
    const { input, output } = loadCurrentMidiIO()
    state.input = input
    state.output = output
  })
  store.on('selectInput', (state, input) => {
    saveCurrentMidiInput(input)
    state.input = input
  })
  store.on('selectOutput', (state, output) => {
    saveCurrentMidiOutput(output)
    state.output = output
  })
  return store
}

// --

const INPUT_STORAGE_KEY = `mt32:midi:input:id`
const OUTPUT_STORAGE_KEY = `mt32:midi:output:id`

export function saveCurrentMidiInput(input: Input) {
  window.localStorage.setItem(INPUT_STORAGE_KEY, input.id)
}

export function saveCurrentMidiOutput(output: Output) {
  window.localStorage.setItem(OUTPUT_STORAGE_KEY, output.id)
}

export function loadCurrentMidiIO() {
  const inputID = window.localStorage.getItem(INPUT_STORAGE_KEY)
  const outputID = window.localStorage.getItem(OUTPUT_STORAGE_KEY)
  return {
    input: WebMidi.inputs.find(input => input.id === inputID) ?? null,
    output: WebMidi.outputs.find(output => output.id === outputID) ?? null
  }
}
