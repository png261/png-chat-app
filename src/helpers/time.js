export const nth = function (d) {
    if (d > 3 && d < 21) return 'th';

    switch (d % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};

export const formatTime = (milliseconds) => {
    const time = new Date(milliseconds * 1000);
    if (isNaN(time.getTime())) return false;
    
    const [weekday, month, date, year] = time.toString().split(' '); //[weekday, month, date, year, hour, timeZone, region]

    let hours = time.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours - 12 : hours;
    const minutes = ('00' + time.getMinutes()).slice(-2);
    const dateOrdinal = nth(date);

    const result = {
        hours: hours,
        minutes: minutes,
        amPm: amPm,
        weekday: weekday,
        date: date,
        dateOrdinal: dateOrdinal,
        month: month,
        year: year,
    };
    return result;
};

export const isWithin7Days = (seconds) => {
    const today = new Date();
    let lastWeek = Date.parse(
        new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
    );
    const date = new Date(seconds * 1000);

    return lastWeek > Date.parse(date);
};
