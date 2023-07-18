import { data } from '../data.js';

/**
 * Retrieves future date and time information.
 *
 * @returns {Object} - An object containing future date and time details.
 */

const getFutureDate = () => {
    const futureTime = new Date(2023, 11, 17, 17, 30, 0);

    const year = futureTime.getFullYear();
    const month = futureTime.getMonth(); // 0 - 11
    const date = futureTime.getDate(); // 18
    const day = futureTime.getDay(); // 0 - 6

    const hours = futureTime.getHours();
    const minutes = futureTime.getMinutes();

    return {
        day: data.days[day], // Sunday, Monday, ...
        date: date, // 17
        month: data.months[month], // January, February,..
        year: year,
        hours: hours,
        minutes: minutes,
        futureMilliseconds: futureTime.getTime(),
    };
};

export default getFutureDate;
