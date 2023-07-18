import { dom } from '../data.js';
import getFutureDate from '../utils/getFutureDate.js';

/**
 * Updates the giveaway information on the DOM with the future date details.
 */

const giveawayInfo = () => {
    const futureData = getFutureDate();
    dom.giveaway.innerText = `
giveaway ends on ${futureData.day}, ${futureData.date} ${futureData.month} ${futureData.year} ${futureData.hours}:${futureData.minutes}`;
};

export default giveawayInfo;
