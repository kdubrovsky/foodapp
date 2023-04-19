import './Meal.css';
import { ReactComponent as AddIcon } from './add.svg';
import Course from '../Course/Course';

const Meal = (props) => {
    return (
        <div className='meal'>
            <div className='meal-header'>
                <h3 className='meal-title'>{props.title}</h3>
                <button className='button-add'>
                    <AddIcon />
                </button>
            </div>

            {props.meal.map(({
                key,
                title,
                amount,
                calories
            }) => <Course
                    key={key}
                    title={title}
                    amount={amount}
                    calories={calories}
                />)}
        </div>
    );
};

export default Meal;