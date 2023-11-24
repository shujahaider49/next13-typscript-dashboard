import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Sidebar>
    <Header />
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <Component {...pageProps} />
  </Sidebar>
  </>
)}
