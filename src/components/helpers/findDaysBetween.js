export const findDaysBetween = ({ start, end }) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const timeDifference = endDate - startDate;

    const dayDifference = timeDifference / 86400000;

    console.log(`Start: ${start}
        end: ${end}
        Kunlar soni: ${Math.ceil(dayDifference)} kun`);
    return dayDifference
}