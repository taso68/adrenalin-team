export const scrollToElement = (id: string): void => {
    const el = document.getElementById(id);
    if (!el)
        throw new Error('Element wit id ' + id + ' not exist')
    el.scrollIntoView();
}