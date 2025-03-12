import { Figtree, Barlow_Semi_Condensed } from 'next/font/google'

export const figtree = Figtree({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--tecture-font",
    display: 'swap',
})
export const barlowSemiCondensed = Barlow_Semi_Condensed({
    weight: ['400', '600', '700', '900'],
    subsets: ['latin'],
    variable: "--tecture-font-2",
    display: 'swap',
})


