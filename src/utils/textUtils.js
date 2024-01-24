export function truncateTextWithDot(text, maxLength) {
    if (!text) return text;
    return text.length > maxLength ? text.substring(0, maxLength) + '.' : text;
}

export function capitalizeAndTruncateTextWithDot(text, maxLength) {
    if (!text) return text;
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalizedText.length > maxLength ? capitalizedText.substring(0, maxLength) + '.' : capitalizedText;
}