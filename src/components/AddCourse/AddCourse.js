import './AddCourse.css';
import { ReactComponent as CloseIcon } from './close.svg';

const AddCourse = (props) => {
    return (
        <dialog className='add-course'>
            <h3 className='add-course__title'>{props.title}</h3>
            <button className='button-close'>
                <CloseIcon onClick={() => { document.querySelector('.add-course').close() }} />
            </button>
            <form onSubmit={console.log('Form sended')}>
                <input className='input' type='text' placeholder='Название' />
                <input className='input' type='text' placeholder='Вес в граммах' />
                <input className='input' type='text' placeholder='Калорийность' />
                <button className='button-add-course' type='submit'>Добавить</button>
            </form>
        </dialog>
    );
};

export default AddCourse;