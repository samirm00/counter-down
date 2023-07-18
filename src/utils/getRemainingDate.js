import getFutureDate from './getFutureDate.js';
import formatDateUnit from './formatDateUnit.js';

/**
 * Calculates the remaining time until a future date.
 *
 * @returns {Object} - An object containing the remaining time until the future date.
 */

const getRemainingDate = () => {
    const futureMilliseconds = getFutureDate().futureMilliseconds; // future milliseconds
    const nowMilliseconds = new Date().getTime(); // future milliseconds

    const remainingMilliseconds = futureMilliseconds - nowMilliseconds;

    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const hourInMilliseconds = 60 * 60 * 1000;
    const minuteInMilliseconds = 60 * 1000;
    const secondInMilliseconds = 1000;

    let days = formatDateUnit(
        Math.floor(remainingMilliseconds / dayInMilliseconds) // days
    );
    let hours = formatDateUnit(
        Math.floor(
            (remainingMilliseconds % dayInMilliseconds) / hourInMilliseconds // hours
        )
    );

    let minutes = formatDateUnit(
        Math.floor(
            (remainingMilliseconds % hourInMilliseconds) / minuteInMilliseconds // minutes
        )
    );

    let seconds = formatDateUnit(
        Math.floor(
            (remainingMilliseconds % minuteInMilliseconds) / // seconds
                secondInMilliseconds
        )
    );

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        remainingMilliseconds: remainingMilliseconds,
    };
};

export default getRemainingDate;
