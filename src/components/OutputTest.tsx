import React from 'react'
import { Checkbox } from '@chakra-ui/core'
import { useMidi } from 'src/services/midi'
import { createDisplayMessage, ROLAND_ID } from 'src/services/sysex'

export interface MidiOutputTestProps {}

export const MidiOutputTest: React.FC<MidiOutputTestProps> = ({ ...props }) => {
  const { output } = useMidi()
  const [running, setRunning] = React.useState(false)
  React.useEffect(() => {
    if (!running || !output) {
      return
    }
    const t = window.setInterval(() => {
      output.sendSysex(ROLAND_ID, createDisplayMessage('Hello, World!'))
    }, 1000)
    output.sendClock()
    return () => {
      clearInterval(t)
    }
  }, [running, output])
  return (
    <Checkbox
      isChecked={running}
      onChange={e => setRunning(e.target.checked)}
      {...props}
    >
      Test MIDI Output
    </Checkbox>
  )
}
