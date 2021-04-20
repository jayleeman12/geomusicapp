export function getTimeAgo(date: Date): string {
    const secondsAgo = Math.floor((Date.now() - date.getTime()) / 1000)
    if (secondsAgo < 60) {
        return formatTimeAgo(secondsAgo, 'second');
    }
    const minutesAgo = Math.floor(secondsAgo / 60)
    if (minutesAgo < 60) {
        return formatTimeAgo(minutesAgo, 'minute');
    }
    const hoursAgo = Math.floor(minutesAgo / 60)
    if (hoursAgo < 24) {
        return formatTimeAgo(hoursAgo, 'hour');
    }
    const daysAgo = Math.floor(hoursAgo / 24)
    if (daysAgo < 7) {
        return formatTimeAgo(daysAgo, 'day');
    }
    const weeksAgo = Math.floor(daysAgo / 7)
    return formatTimeAgo(weeksAgo, 'week');
}

function formatTimeAgo(amount: number, measurement: string): string {
    if (amount == 1) {
        return `${amount} ${measurement} ago`
    }
    return `${amount} ${measurement}s ago`
}