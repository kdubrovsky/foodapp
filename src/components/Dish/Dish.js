import './Dish.css';
import {ReactComponent as EditIcon} from "./edit.svg";

const Dish = (props) => {
  return (
      <div className="dish">
          <p className="dish-title">{props.title}</p>
          <p className="dish-amount">{props.amount}
              <span> {props.measurement}</span>
          </p>
          <p className="dish-calories">{props.calories} ккал</p>
          <button className="button-edit">
                <EditIcon/>
          </button>
      </div>
  );
}

export default Dish;