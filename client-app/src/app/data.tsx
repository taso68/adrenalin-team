export interface companyDataInterface {
    name: string;
    slogan: string;
    openHours: string;
    email: string;
    social: {
        link: string;
        imagePath: string;
        name: string;
        isShowing: boolean;
    }[]
}

export const companyData: companyDataInterface = {
    name: 'Matić Kop',
    slogan: '',
    openHours: '00-24h',
    email: 'matickop1995@gmail.com',
    social: [
        {
            link: 'https://www.instagram.com/matic_kopp/',
            imagePath: '/icons/social/ig.svg',
            name: 'Instagram',
            isShowing: true
        },
    ]
}

export interface phoneNumberInterface {
    phone: string;
    name: string;
    isHighlighted: boolean;
}

export const phoneNumbers: phoneNumberInterface[] = [
    {
        phone: '069676844',
        name: 'Nikola',
        isHighlighted: true,
    },
]
