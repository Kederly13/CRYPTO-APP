export const getConvertedDateCoinPage = (dateString: string) => {
    const inputDate = new Date(dateString);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const formattedDate = `${days[inputDate.getUTCDay()]}, ${inputDate.getUTCDate()} ${months[inputDate.getUTCMonth()]} ${inputDate.getUTCFullYear()} ${inputDate.getUTCHours()}:${String(inputDate.getUTCMinutes()).padStart(2, '0')}:${String(inputDate.getUTCSeconds()).padStart(2, '0')} GMT`;

    return formattedDate;
}