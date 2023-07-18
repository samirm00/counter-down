/**
 * Creates and returns a timer unit element based on the provided unitData.
 *
 * @param {Object} unitData - The data for the timer unit.
 * @returns {HTMLElement} The created timer unit element.
 */

const timerUnit = (unitData) => {
    // create container
    const container = document.createElement('div');
    container.classList.add('deadline-format');

    // create parent
    const parent = document.createElement('div');

    // create value
    const value = document.createElement('h4');
    value.innerText = unitData.value;
    value.classList.add(unitData.className);

    // create title
    const title = document.createElement('span');
    title.innerText = unitData.title;

    // append
    parent.append(value, title);
    container.append(parent);

    return container;
};

export default timerUnit;
