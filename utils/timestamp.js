/*
timeStampMaker ...
*/
export function timestampMaker() {
    const timestamp = new Date();

    const day = timestamp.toDateString();
    const time = timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    const displayDate = `${day}, ${time}`;

    return displayDate;
}
