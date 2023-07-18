import { data, dom } from '../data.js';
import getRemainingDate from '../utils/getRemainingDate.js';

/**
 * Updates the timer units based on the remaining time.
 *
 * @returns {void}
 */
const updateTimerUnits = () => {
    const remainingData = getRemainingDate();

    // if reaming time in milliseconds is less than 0 then stop the counter
    if (remainingData.remainingMilliseconds < 0) {  
        clearInterval(data.intervalId);//
        dom.deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
        return;
    }
    // update seconds
    const seconds = document.querySelector('.seconds');
    seconds.innerText = remainingData.seconds;

    // update minutes
    if (remainingData.minutes !== data.oldMinutes) {
        const minutes = document.querySelector('.minutes');
        minutes.innerText = remainingData.minutes;
    }
    // update hours
    if (remainingData.hours !== data.oldHours) {
        const hours = document.querySelector('.hours');
        hours.innerText = remainingData.hours;
    }
    // update days
    if (remainingData.days !== data.oldDays) {
        const days = document.querySelector('.days');
        days.innerText = remainingData.days;
    }

    data.oldMinutes = remainingData.minutes;
    data.oldHours = remainingData.hours;
    data.oldDays = remainingData.days;
};

export default updateTimerUnits;
