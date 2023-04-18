import Day from '../Day/Day';
import './DaysList.css';


const DaysList = (props) => {
    return (
        <div className='dayslist'>
            {props.data.map(({ key, title, meals }) =>
                <Day
                    key={key}
                    title={title}
                    meals={meals}
                />)}
        </div>);
}

export default DaysList;