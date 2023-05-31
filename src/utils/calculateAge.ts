export const calculateAge = (day: string, month: string, year: string) => {
    const today = new Date();
    const birthYear = new Date(+year, +month, +day);
    const currentYear = today.getFullYear();
    const birthMonth = new Date(+year, +month, +day).getMonth();
    const currentMonth = today.getMonth();

    let age = currentYear - birthYear.getFullYear();
    const months = (age * 12) + (today.getMonth() - birthYear.getMonth());
    const timeDiff = today.getTime() - birthYear.getTime();
    let days = Math.floor(timeDiff / (1000 * 3600 * 24));

    if(currentMonth < birthMonth) {
        age--
    } else if(currentMonth === birthMonth) {
        const currentDay = today.getDate();
        const birthDay = new Date(+year, +month, +day).getDate();
        if(currentDay < birthDay) {
            age--
        }
    }

    return {
        age,
        days,
        months
    }
}