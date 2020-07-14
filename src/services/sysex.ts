export enum Commands {
  requestData = 0x11,
  dataSet = 0x12
}

export const ROLAND_ID = 0x41
export const DEVICE_ID = 0x10
export const MODEL_ID = 0x16

export function calculateChecksum(payload: number[]) {
  const sum = payload.reduce((sum, byte) => sum + byte)
  return (~sum & 0x7f) + 42
}

export function createDataSetMessage(address: number[], data: number[]) {
  const payload = [...address, ...data]
  const checksum = calculateChecksum(payload)
  return [DEVICE_ID, MODEL_ID, Commands.dataSet, ...payload, checksum]
}

export function createDisplayMessage(message: string) {
  const address = [0x20, 0x00, 0x00]
  const data = message
    .padEnd(20, ' ')
    .split('')
    .map(c => c.charCodeAt(0))
  return createDataSetMessage(address, data)
}

// System Params --

export enum ReverbModes {
  room = 0x00,
  hall = 0x01,
  plate = 0x02,
  tapDelay = 0x03
}

export function createReverbModeMessage(mode: ReverbModes) {
  const address = [0x10, 0x00, 0x01]
  return createDataSetMessage(address, [mode])
}

export function createReverbTimeMessage(time: number) {
  const address = [0x10, 0x00, 0x02]
  const value = clipInteger(time, 0, 7)
  return createDataSetMessage(address, [value])
}

export function createReverbLevelMessage(level: number) {
  const address = [0x10, 0x00, 0x03]
  const value = clipInteger(level, 0, 7)
  return createDataSetMessage(address, [value])
}

// --

/**
 * @param part 1-8, 9 = Rhythm
 * @param channel 1-16, 0 = Off
 */
export function createPartMidiChannelMessage(part: number, channel: number) {
  const partOffset = clipInteger(part, 1, 9) - 1
  const address = [0x10, 0x00, 0x0d + partOffset]
  const value = channel === 0 ? 16 : clipInteger(channel - 1, 0, 15)
  return createDataSetMessage(address, [value])
}

// --

const clipInteger = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Math.round(value)))
