import './Day.css';
import Dish from "../Dish/Dish";

const Day = (props) => {
    return (
        <div className="day">
            <h2 className="day-title">{props.dayName}</h2>
            <Dish
                title="Салат из рукколы"
                amount="200"
                measurement="г"
                calories="1200"/>
        </div>);
}

export default Day;


