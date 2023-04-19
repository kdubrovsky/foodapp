// data import
import appData from './data';

// components import
import DaysList from './components/DaysList/DaysList';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import AddCourse from './components/AddCourse/AddCourse';



const App = () => {
    return (
        <Container>
            <AddCourse title='Добавить блюдо' />
            <Header title='Меню' />
            <DaysList data={appData} />
        </Container>
    );
}
export default App;