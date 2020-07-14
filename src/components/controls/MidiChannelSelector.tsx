import React from 'react'
import { Select, SelectProps } from '@chakra-ui/core'

export interface MidiChannelSelectorProps extends SelectProps {}

export const MidiChannelSelector: React.FC<MidiChannelSelectorProps> = ({
  ...props
}) => {
  return (
    <Select {...props}>
      {Array(17)
        .fill(undefined)
        .map((_, i) => (
          <option key={i} value={i}>
            {i === 0 ? 'Off' : i}
          </option>
        ))}
    </Select>
  )
}
