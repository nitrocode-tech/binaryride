import {Poppins} from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})
