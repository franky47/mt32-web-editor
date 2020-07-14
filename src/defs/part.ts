import { Sound } from './sounds'

export interface PartState {
  level: number // 0-100
  pan: number // 0-14 (R-L)
  hasReverb: boolean
  midiChannel: number // 1-16, 0 = Off
  bendRange: number // 0-24
  sound: Sound
}
