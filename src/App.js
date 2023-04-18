import DaysList from './components/DaysList/DaysList';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import appData from './data';

const App = () => {
    return (
        <Container>
            <Header title='Меню' />
            <DaysList data={appData} />
        </Container>
    );
}
export default App;