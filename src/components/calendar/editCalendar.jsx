import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getCalendarById, updateCalendar } from "../../services/calendarService";


export const EditCalendar = () => {
  const [calendar, setCalendar] = useState({});
  const { calendarId } = useParams();

  useEffect(() => {
    getCalendarById(calendarId).then((data) => {
      const calendarObj = data;
      setCalendar(calendarObj);
    });
  }, [calendarId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedCalendar = {
      Band: calendar.band,
      Location: calendar.location,
      Date: calendar.date,
    };
    updateCalendar(editedCalendar).then(() => {
      navigate("/calendar");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Calendar</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={calendar.band}
              onChange={(event) => {
                const calendarCopy = { ...calendar };
                calendarCopy.band = event.target.value;
                setCalendar(calendarCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={calendar.location}
              onChange={(event) => {
                const calendarCopy = { ...calendar };
                calendarCopy.location = event.target.value;
                setCalendar(calendarCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={calendar.date}
              onChange={(event) => {
                const calendarCopy = { ...calendar };
                calendarCopy.date = event.target.value;
                setCalendar(calendarCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <Button onClick={handleSave}>
            Save Event
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
