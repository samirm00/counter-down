import { data, dom } from '../data.js';
import giveawayInfo from '../components/giveawayInfo.js';
import timerUnit from '../components/timerUnit.js';
import updateTimerUnits from '../components/updateTimerUnits.js';

const loadPageHandler = () => {
    // update giveawayInfo
    giveawayInfo(); /// stop

    // by default show time units
    data.timerUnits.forEach((unitData) => {
        const unitDom = timerUnit(unitData);
        dom.deadline.append(unitDom);
    });

    // update timer units each seconds
    const intervalId = setInterval(() => {
        updateTimerUnits();
    }, 1 * 1000);

    // save intervalId
    data.intervalId = intervalId;
};

export default loadPageHandler;
