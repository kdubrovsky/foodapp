import './Day.css';

const Day = (props) => {
    return (
        <div className="day">
            <h2 className="day-title">{props.dayName}</h2>
        </div>);
}

export default Day;


