import React from 'react'
import { SvgBox, SvgBoxProps, defaultTheme } from '@47ng/chakra-next'
import WebMidi from 'webmidi'
import styled from '@emotion/styled'
import { Flex, FlexProps, useTheme } from '@chakra-ui/core'

// --

const KeyGroup = styled.g`
  text {
    font-family: 'Arial';
    font-size: 0.4px;
    font-weight: bold;
    user-select: none;
    pointer-events: none;
  }
`

const WhiteKeyGroup = styled(KeyGroup)`
  rect:hover {
    fill: ${defaultTheme.colors.gray[200]};
  }
`

const BlackKeyGroup = styled(KeyGroup)`
  rect:hover {
    fill: ${defaultTheme.colors.gray[800]};
  }
  text:first-of-type {
    font-size: 0.25px;
  }
`

// --

interface KeyProps {
  id: string
  x: number
  selected: boolean
  assigned: boolean
  onClick: (key: string) => void
}

const WhiteKey: React.FC<KeyProps> = ({
  id,
  x,
  selected,
  assigned,
  onClick
}) => {
  const theme = useTheme()
  return (
    <WhiteKeyGroup onClick={() => onClick(id)}>
      <rect
        fill={selected ? theme.colors.blue[100] : 'white'}
        stroke={selected ? theme.colors.blue[500] : 'black'}
        strokeWidth={selected ? 0.08 : 0.01}
        x={x}
        width="1"
        height="3"
        rx={0.1}
        id={id}
      />
      <text
        x={x + 0.5}
        y={2.45}
        textAnchor="middle"
        fill={theme.colors.gray[selected ? 800 : 400]}
      >
        {id}
      </text>
      <text
        x={x + 0.5}
        y={2.83}
        textAnchor="middle"
        fill={theme.colors.gray[selected ? 800 : 400]}
      >
        {WebMidi.guessNoteNumber(id)}
      </text>
      {assigned && <circle cx={x + 0.5} cy={0.3} r={0.1} fill="red" />}
    </WhiteKeyGroup>
  )
}

const BlackKey: React.FC<KeyProps> = ({
  id,
  x,
  selected,
  assigned,
  onClick
}) => {
  const theme = useTheme()
  return (
    <BlackKeyGroup onClick={() => onClick(id)}>
      <rect
        fill="black"
        x={x + 0.7}
        width="0.6"
        height="1.8"
        id={id}
        stroke={theme.colors.blue[500]}
        rx={0.1}
        strokeWidth={selected ? 0.08 : 0}
      />
      <text
        x={x + 1}
        y={1.18}
        textAnchor="middle"
        fill={theme.colors.gray[selected ? 200 : 700]}
      >
        {id}
      </text>
      <text
        x={x + 1}
        y={1.6}
        textAnchor="middle"
        fill={theme.colors.gray[selected ? 200 : 700]}
      >
        {WebMidi.guessNoteNumber(id)}
      </text>
      {assigned && <circle cx={x + 1} cy={0.3} r={0.1} fill="red" />}
    </BlackKeyGroup>
  )
}

// --

export interface PianoRollOctaveProps extends Omit<SvgBoxProps, 'onClick'> {
  octave: number
  selectedKey?: string
  assignedKeys: string[]
  onClick: (key: string) => void
}

export const PianoRollOctave: React.FC<PianoRollOctaveProps> = ({
  octave,
  selectedKey,
  assignedKeys,
  onClick,
  ...props
}) => {
  const whiteKeys = React.useMemo<string[]>(
    () => [
      `C${octave}`,
      `D${octave}`,
      `E${octave}`,
      `F${octave}`,
      `G${octave}`,
      `A${octave}`,
      `B${octave}`
    ],
    [octave]
  )
  const blackKeys = React.useMemo<string[]>(
    () => [
      `C#${octave}`,
      `D#${octave}`,
      `F#${octave}`,
      `G#${octave}`,
      `A#${octave}`
    ],
    [octave]
  )

  return (
    <SvgBox
      viewBox="0 0.1 7 3"
      overflow="visible"
      position="relative"
      zIndex={!!selectedKey && whiteKeys.includes(selectedKey) ? 42 : 0}
      {...props}
    >
      {whiteKeys
        .filter(key => selectedKey !== key)
        .map(key => (
          <WhiteKey
            selected={false}
            assigned={assignedKeys.includes(key)}
            onClick={onClick}
            x={whiteKeys.indexOf(key)}
            id={key}
            key={key}
          />
        ))}
      {!!selectedKey && whiteKeys.includes(selectedKey) && (
        <WhiteKey
          selected
          assigned={assignedKeys.includes(selectedKey)}
          onClick={onClick}
          x={whiteKeys.indexOf(selectedKey)}
          id={selectedKey}
        />
      )}
      {blackKeys.map(key => (
        <BlackKey
          selected={selectedKey === key}
          assigned={assignedKeys.includes(key)}
          onClick={onClick}
          x={whiteKeys.indexOf(key.replace('#', ''))}
          id={key}
        />
      ))}
    </SvgBox>
  )
}

// --

export interface PianoRollProps extends FlexProps {
  assignedKeys: string[]
}

export const PianoRoll: React.FC<PianoRollProps> = ({
  assignedKeys,
  ...props
}) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined)

  return (
    <Flex overflowX="scroll" rounded="sm" {...props}>
      {Array(6)
        .fill(undefined)
        .map((_, i) => (
          <PianoRollOctave
            minW="200px"
            octave={1 + i}
            onClick={note => setSelected(selected === note ? undefined : note)}
            assignedKeys={assignedKeys}
            selectedKey={selected}
          />
        ))}
    </Flex>
  )
}
