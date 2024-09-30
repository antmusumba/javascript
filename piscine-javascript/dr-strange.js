function addWeek(date) {
    const epoch = new Date('0001-01-01');
    const daysSinceEpoch = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
    const dayIndex = daysSinceEpoch % 14;
    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    return daysOfWeek[dayIndex];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate;
}

