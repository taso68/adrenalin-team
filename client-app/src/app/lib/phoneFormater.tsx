export const beautyNumber = (number: string): string => {
    return number.substring(0, 3) + '/' + number.substring(3, 5) + '-' + number.substring(5, 7) + '-' + number.substring(7);
}

export const hrefPhoneFormat = (number: string): string => {
    return 'tel:' + number;
}

export const hrefViberFormat = (number: string): string => {
    return 'viber://contact?number=%' + number;
}

export const hrefWhatsUpFormat = (number: string): string => {
    return 'https://api.whatsapp.com/send?phone=' + number;
}