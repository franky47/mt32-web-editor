import React from 'react'
import Select, { SelectProps } from '@chakra-ui/core/dist/Select'
import { useMidiOutputs, useMidi } from 'src/services/midi'
import WebMidi from 'webmidi'

export interface MidiOutputSelectorProps extends SelectProps {}

export const MidiOutputSelector: React.FC<MidiOutputSelectorProps> = ({
  ...props
}) => {
  const outputs = useMidiOutputs()
  const { output, setOutput } = useMidi()
  return (
    <Select
      value={output?.id ?? ''}
      onChange={e => {
        const newOutput = WebMidi.getOutputById(e.target.value)
        if (newOutput) {
          setOutput(newOutput)
        }
      }}
      {...props}
    >
      {outputs.map(output => (
        <option key={output.id} value={output.id}>
          {output.name}
        </option>
      ))}
    </Select>
  )
}
