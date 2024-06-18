export const getAllDates = () => {
    return fetch(`http://localhost:8088/calendar`).then((res) => res.json())
}