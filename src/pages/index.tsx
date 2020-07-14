import React from 'react'
import { NextPage } from 'next'
import { StackContainer, StackCard } from '@47ng/chakra-next'
import { Text, Grid, Heading, Flex, Button, Stack } from '@chakra-ui/core'
import { MidiOutputSelector } from 'src/components/MidiIO'
import { MidiOutputTest } from 'src/components/OutputTest'
import { Part } from 'src/components/Part'
import { ReverbMode, ReverbParam } from 'src/components/controls/Reverb'
import { PianoRoll } from 'src/components/PianoRoll'
import { MidiChannelSelector } from 'src/components/controls/MidiChannelSelector'

// --

const IndexPage: NextPage = () => {
  return (
    <StackContainer wide mt={12}>
      <Heading as="h1" textAlign="center" fontSize="2xl">
        Roland MT-32 Online Editor
      </Heading>
      <StackCard>
        <Heading as="h2" fontSize="lg" flexShrink={0}>
          MIDI I/O
        </Heading>
        <MidiOutputSelector />
        <MidiOutputTest />
      </StackCard>
      <StackCard>
        <Flex as="header" justifyContent="space-between" alignItems="center">
          <Heading as="h2" fontSize="lg" flexShrink={0}>
            Parts
          </Heading>

          <Text fontSize="xs">12 partials used, 21 voices available</Text>
        </Flex>

        <Grid
          templateColumns="1em 5em 9em 1fr 5em 3em 4em"
          gridGap={2}
          alignItems="center"
        >
          <div />
          <Text textAlign="center">Channel</Text>
          <Text textAlign="center">Sound</Text>
          <Text textAlign="center">Level</Text>
          <Text textAlign="center">Pan</Text>
          <Text textAlign="center">Reverb</Text>
          <Text textAlign="center">Bend</Text>
          <Part number={1} />
          <Part number={2} />
          <Part number={3} />
          <Part number={4} />
          <Part number={5} />
          <Part number={6} />
          <Part number={7} />
          <Part number={8} />
        </Grid>
      </StackCard>
      <StackCard>
        <Flex as="header" justifyContent="space-between" alignItems="center">
          <Stack isInline alignItems="center">
            <Heading as="h2" fontSize="lg" flexShrink={0}>
              Rhythm Section
            </Heading>
            <MidiChannelSelector size="sm" maxW="5em" value={10} />
          </Stack>
          <Button
            size="xs"
            variantColor="red"
            variant="ghost"
            leftIcon="delete"
          >
            Clear
          </Button>
        </Flex>
        <PianoRoll assignedKeys={['C#4', 'D3']} />
        <Stack mt={2}>
          <Heading as="h3" fontSize="md">
            C#4{' '}
            <Text as="small" fontWeight="semibold">
              (MIDI Note 61)
            </Text>
          </Heading>
          <Text>Timbre</Text>
          <Text>Level</Text>
          <Text>Pan</Text>
          <Text>Reverb</Text>
        </Stack>
      </StackCard>
      <StackCard>
        <Grid templateColumns="120px 160px" alignItems="center" gridRowGap={2}>
          <Text>Reverb Mode</Text>
          <ReverbMode size="sm" />
          <Text>Reverb Time</Text>
          <ReverbParam />
          <Text>Reverb Level</Text>
          <ReverbParam />
        </Grid>
      </StackCard>
    </StackContainer>
  )
}

export default IndexPage
