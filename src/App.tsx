import './App.css'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '../wagmi.config'
import Profile from './components/Profile'
import Connect from './components/Connect'
import { ContextProvider } from './context'
import Ballance from './components/Ballance'
import Wrapper from './components/Wrapper'


const queryClient = new QueryClient()

export default function App() {
  return (
    <ContextProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Wrapper>
            <Connect />
            <Profile />
            <Ballance />
          </Wrapper>
        </QueryClientProvider>
      </WagmiProvider>
    </ContextProvider>
  )
}