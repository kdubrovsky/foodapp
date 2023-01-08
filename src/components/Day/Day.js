import './Day.css';
import Meal from '../Meal/Meal';

const Day = (props) => {
    return (
        <div className="day">
            <h2 className="day-title">{props.dayName}</h2>
            <Meal title="Завтрак"/>
            <Meal title="Обед"/>
            <Meal title="Ужин"/>
        </div>);
};

export default Day;


