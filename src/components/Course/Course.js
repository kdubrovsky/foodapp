import './Course.css';
import { ReactComponent as EditIcon } from './edit.svg';

const Course = (props) => {
    return (
        <div className='course'>
            <p className='course-title'>{props.title}</p>
            <p className='course-amount'>{props.amount}
                <span> г</span>
            </p>
            <p className='course-calories'>{props.calories} ккал</p>
            <button className='button-edit'>
                <EditIcon />
            </button>
        </div>
    );
};

export default Course;