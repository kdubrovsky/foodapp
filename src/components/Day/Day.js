import './Day.css';
import Meal from '../Meal/Meal';

const Day = (props) => {
    return (
        <div className='day'>
            <h2 className='day-title'>{props.title}</h2>
            <Meal title='Завтрак' meal={props.meals.breakfast} />
            <Meal title='Обед' meal={props.meals.lunch} />
            <Meal title='Ужин' meal={props.meals.dinner} />
        </div>);
};

export default Day;