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
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes}${ampm}`;
}