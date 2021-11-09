export function getCurrentYear(){
    const today = new Date();
    const currentYear = today.getUTCFullYear();
    return currentYear;
}