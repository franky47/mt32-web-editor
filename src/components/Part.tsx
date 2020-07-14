import React from 'react'
import {
  Switch,
  Text,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  Flex
} from '@chakra-ui/core'
import { sounds } from 'src/defs'
import { MidiChannelSelector } from './controls/MidiChannelSelector'

// --

export interface PartProps {
  number: number
}

export const Part: React.FC<PartProps> = ({ number }) => {
  return (
    <>
      <Text minW="1em">{number}</Text>
      <MidiChannelSelector size="sm" maxW="5em" minW="5em" />
      <Select size="sm" maxW="9em" minW="9em">
        {sounds.map(sound => (
          <option key={sound.program}>{sound.name}</option>
        ))}
      </Select>
      <Flex px={2}>
        <Slider defaultValue={100}>
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </Flex>
      <Flex px={2}>
        <Slider defaultValue={50} maxW="5em">
          <SliderTrack />
          {/* <SliderFilledTrack /> */}
          <SliderThumb />
        </Slider>
      </Flex>
      <Switch color="blue" size="sm" px={4} p={0} mx="auto" />
      <NumberInput minW="4em" maxW="4em" size="sm" min={0} max={24} step={1} />
    </>
  )
}
