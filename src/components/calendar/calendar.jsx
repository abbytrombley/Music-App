import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { deleteCalendar, getAllCalendar } from "../../services/calendarService";
import "./calendar.css";


export const Calendar = ({ currentUser }) => {
    const [calendar, setCalendar] = useState([]);
    const [myCalendar, setMyCalendar] = useState([]);
  
    useEffect(() => {
      getAllCalendar().then((calendarArray) => {
        setCalendar(calendarArray);
      });
    }, []);

    useEffect(() => {
      document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/0b/c4/12/0bc412c5af40c081f283c80fc0048918.jpg)`
    } , [])
  
    useEffect(() => {
      const foundCalendar = calendar.filter(
        (calendar) => calendar.userId === currentUser.id
      );
      setMyCalendar(foundCalendar);
    }, [calendar]);
  
    const handleDelete = (calendar) => {
      deleteCalendar(calendar.id).then(() => {
        getAllCalendar().then((calendarArray) => {
          setCalendar(calendarArray);
        });
      });
    };
  
    return (
        <div>
        <div className="calendar">
          <div>
            <Row className="flex-row-reverse">
              {myCalendar.map((calendar) => {
                return (
                  <Col key={calendar.id}>
                    <Card
                      style={{
                        width: "12rem",
                        padding: "1em",
                        margin: 5,
                      }}
                    >
                      <h2>{calendar.Band}</h2>
                      <p>{calendar.Location}</p>
                      <p>{calendar.Date}</p>
                      <Link to={`/calendar/${calendar.id}/editCalendar`}>
                        <Button color="primary" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>
                      <Button
                        color="danger"
                        size="sm"
                        style={{ margin: 5 }}
                        onClick={() => handleDelete(calendar)}>
                        Delete
                      </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div>
          <Link to="/calendar/newCalendar">
            <button className="button">Add Upcoming Event</button>
          </Link>
        </div>
      </div>
    );
  };
  



