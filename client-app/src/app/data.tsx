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
    name: 'Adrenalin Team',
    slogan: '',
    openHours: '',
    email: 'info@oblio.network',
    social: []
}

export interface phoneNumberInterface {
    phone: string;
    name: string;
    isHighlighted: boolean;
}

export const phoneNumbers: phoneNumberInterface[] = [
    {
        phone: '',
        name: '',
        isHighlighted: false,
    },
]
