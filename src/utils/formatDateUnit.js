/**
 * Format time unit.
 *
 * @param {number} unit - The unit to format.
 * @returns {string | number} the formate unit if less than 10
 */

const formatDateUnit = (unit) => {
    return (unit = unit < 10 ? '0' + unit : unit);
};

export default formatDateUnit;
