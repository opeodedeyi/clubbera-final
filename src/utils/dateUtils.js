export function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const secondsPast = (now.getTime() - date.getTime()) / 1000;

    if (secondsPast < 60) {
        return `${Math.round(secondsPast)}s ago`;
    }
    if (secondsPast < 3600) {
        return `${Math.round(secondsPast / 60)}m ago`;
    }
    if (secondsPast <= 86400) {
        return `${Math.round(secondsPast / 3600)}h ago`;
    }
    if (secondsPast <= 2592000) {
        return `${Math.round(secondsPast / 86400)}d ago`;
    }
    if (secondsPast <= 31536000) {
        return `${Math.round(secondsPast / 2592000)}mo ago`;
    }
    return `${Math.round(secondsPast / 31536000)}y ago`;
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

export function formatBirthday(dateString) {
    if (!dateString) return 'not set';
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getUTCDate();
    return `${day} ${month}`;
}

export function formatDateLong(isoString) {
    const date = new Date(isoString);
    const options = { weekday: 'short', timeZone: 'UTC' };
    const dayOfWeek = date.toLocaleDateString('en-US', options);
    
    const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${dayOfWeek}, ${month.toUpperCase()} ${day}, ${year}, ${hours}:${minutes}${ampm}`;
}

export function formatDateWithoutTime(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
}

export function extractTimeFromDate(dateString) {
    const date = new Date(dateString);
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes}${ampm}`;
}

export function getTimeUntilMeeting(dateOfMeeting, timeOfMeeting, duration) {
    const meetingStart = new Date(dateOfMeeting);
    const meetingTime = new Date(timeOfMeeting);

    meetingStart.setHours(meetingTime.getHours());
    meetingStart.setMinutes(meetingTime.getMinutes());
    meetingStart.setSeconds(meetingTime.getSeconds());

    const [hours, minutes] = duration.split(':').map(Number);
    const durationMs = (hours * 60 + minutes) * 60 * 1000;

    const meetingEnd = new Date(meetingStart.getTime() + durationMs);

    const now = new Date();

    const diffToStart = meetingStart - now;
    const diffToEnd = meetingEnd - now;

    let message = '';
    let isPastEvent = false;

    if (diffToStart > 0) {
        const days = Math.floor(diffToStart / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffToStart % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
            message = `Starting in ${days}d ${hours}h`;
        } else if (hours > 0) {
            message = `Starting in ${hours}h ${minutes}m`;
        } else {
            message = `Starting in ${minutes}m`;
        }
    } else if (diffToEnd > 0) {
        const hours = Math.floor((-diffToStart) / (1000 * 60 * 60));
        const minutes = Math.floor(((-diffToStart) % (1000 * 60 * 60)) / (1000 * 60));

        message = `Started ${hours}h ${minutes}m ago`;
    } else {
        isPastEvent = true;
        const hours = Math.floor((-diffToEnd) / (1000 * 60 * 60));
        const minutes = Math.floor(((-diffToEnd) % (1000 * 60 * 60)) / (1000 * 60));

        if (hours < 24) {
            message = `Ended ${hours}h ${minutes}m ago`;
        } else {
            const days = Math.floor(hours / 24);
            message = `Ended ${days}d ago`;
        }
    }

    return { message, isPastEvent };
}

export function getMeetingEndTime(time_of_meeting, duration) {
    const startTime = new Date(time_of_meeting);

    const [hours, minutes] = duration.split(':').map(Number);

    const endTime = new Date(startTime.getTime());

    endTime.setHours(endTime.getHours() + hours);
    endTime.setMinutes(endTime.getMinutes() + minutes);

    let hours12 = endTime.getHours() % 12 || 12;
    let minutes12 = endTime.getMinutes().toString().padStart(2, '0');
    let ampm = endTime.getHours() >= 12 ? 'PM' : 'AM';

    return `${hours12}:${minutes12}${ampm}`;
}