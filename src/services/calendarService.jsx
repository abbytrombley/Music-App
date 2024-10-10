export const getAllCalendar = () => {
    return fetch(`http://localhost:8088/calendar`).then((res) => res.json())
}
export const createCalendar = (calendar) => {
    return fetch(`http://localhost:8088/calendar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(calendar)
    })
}

export const deleteCalendar = (calendarId) => {
    return fetch(`http://localhost:8088/calendar/${calendarId}`, { method: "DELETE" });
  };

  export const getCalendarById = (calendar) => {
    return fetch(
        `http://localhost:8088/calendar/${calendar}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateCalendar = (calendar) => {
    return fetch(`http://localhost:8088/calendar/${calendar.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calendar)
    })
  }