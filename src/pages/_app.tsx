import { createChakraNextApp } from '@47ng/chakra-next'
import { SentryErrorBoundary } from 'src/services/sentry'
import { MidiProvider } from 'src/services/midi'

export default createChakraNextApp({
  enableColorMode: 'dark',
  Providers: ({ children }) => (
    <SentryErrorBoundary>
      <MidiProvider>{children}</MidiProvider>
    </SentryErrorBoundary>
  )
})
