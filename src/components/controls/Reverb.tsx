import React from 'react'
import {
  Select,
  SelectProps,
  SliderProps,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/core'
import { ReverbModes } from 'src/services/sysex'

export interface ReverbModeProps extends SelectProps {}

export const ReverbMode: React.FC<ReverbModeProps> = ({ ...props }) => {
  return (
    <Select {...props}>
      <option value={ReverbModes.room}>Room</option>
      <option value={ReverbModes.hall}>Hall</option>
      <option value={ReverbModes.plate}>Plate</option>
      <option value={ReverbModes.tapDelay}>Tap Delay</option>
    </Select>
  )
}

// --

export interface ReverbParamProps extends SliderProps {}

export const ReverbParam: React.FC<ReverbParamProps> = ({ ...props }) => {
  return (
    <Slider min={0} max={7} step={1} {...props}>
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </Slider>
  )
}
