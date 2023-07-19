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

    let remainingMilliseconds = futureMilliseconds - nowMilliseconds;

    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;

    let days = formatDateUnit(
        Math.floor(remainingMilliseconds / millisecondsPerDay)
    );

    remainingMilliseconds = remainingMilliseconds % millisecondsPerDay;

    let hours = formatDateUnit(
        Math.floor(remainingMilliseconds / millisecondsPerHour)
    );

    remainingMilliseconds = remainingMilliseconds % millisecondsPerHour;

    let minutes = formatDateUnit(
        Math.floor(remainingMilliseconds / millisecondsPerMinute)
    );

    remainingMilliseconds = remainingMilliseconds % millisecondsPerMinute;

    let seconds = formatDateUnit(
        Math.floor(remainingMilliseconds / millisecondsPerSecond)
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
