import './Meal.css';
import {ReactComponent as AddIcon} from "./add.svg";
import Dish from "../Dish/Dish";

const Meal = (props) => {
    return (
        <div className="meal">
            <div className="meal-header">
                <h3 className="meal-title">{props.title}</h3>
                <button className="button-add">
                    <AddIcon/>
                </button>
            </div>
            <Dish title="Суп-пюре из тыквы" amount="200" measurement="г" calories="240"/>

        </div>
    );
};

export default Meal;