export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
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