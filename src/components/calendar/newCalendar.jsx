import { useState } from "react";
import "./calendar.css";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { createCalendar } from "../../services/calendarService";


export const NewCalendar = ({currentUser}) => {
  const [newCalendar, setNewCalendar] = useState({
    Band: "",
    Location: "",
    Date: "",
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const calendar = {
        Band: newCalendar.band,
        Location: newCalendar.location,
        Date: newCalendar.date,
        userId: currentUser.id
    }
    createCalendar(calendar).then(() => {
        navigate("/calendar")
    })

  }

  return (
    <div className="form">
      <form className="calendar-form">
        <h2>New Event</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Band"
            onChange={(event) => {
              const calendarCopy = { ...newCalendar };
              calendarCopy.band = event.target.value;
              setNewCalendar(calendarCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Location"
            onChange={(event) => {
              const calendarCopy = { ...newCalendar };
              calendarCopy.location = event.target.value;
              setNewCalendar(calendarCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Date"
            onChange={(event) => {
              const calendarCopy = { ...newCalendar };
              calendarCopy.date = event.target.value;
              setNewCalendar(calendarCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <Button onClick={handleSave}>
            Submit New Event
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
