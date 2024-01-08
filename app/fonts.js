import { Orbitron } from 'next/font/google'
import { Roboto } from 'next/font/google'

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['500'],
})
