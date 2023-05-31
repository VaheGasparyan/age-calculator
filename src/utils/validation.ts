export const validation = (day: string, month: string, year: string) => {
    const currentYear = new Date().getFullYear();

    if(+day > 31 || +month > 12 || +year > currentYear) {
        return false;
    }

    return true;
}