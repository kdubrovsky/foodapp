import Day from "../Day/Day";
import './DaysList.css';
const DaysList = () => {
    return (
        <div className="dayslist">
            <Day dayName="Понедельник"/>
            <Day dayName="Вторник"/>
            <Day dayName="Среда"/>
            <Day dayName="Четверг"/>
            <Day dayName="Пятница"/>
            <Day dayName="Суббота"/>
            <Day dayName="Воскресенье"/>
        </div>);
}

export default DaysList;


