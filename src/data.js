export const data = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    timerUnits: [
        {
            value: '00',
            title: 'days',
            className: 'days',
        },
        {
            value: '00',
            title: 'hours',
            className: 'hours',
        },
        {
            value: '00',
            title: 'mins',
            className: 'minutes',
        },
        {
            value: '00',
            title: 'secs',
            className: 'seconds',
        },
    ],
    oldMinutes: 0,
    oldHours: 0,
    oldDays: 0,
};

export const dom = {
    giveaway: document.querySelector('.giveaway'),
    deadline: document.querySelector('.deadline'),
};
