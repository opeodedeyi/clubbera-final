import localFont from 'next/font/local'

export const gtWalsheim = localFont({
    src: [
        {
            path: './GTWalsheimPro-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './GTWalsheimPro-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './GTWalsheimPro-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-gt-walsheim',
})

export const nantes = localFont({
    src: [
        {
            path: './Nantes-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Nantes-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-nantes',
})