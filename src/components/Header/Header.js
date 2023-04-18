import './Header.css';

const Header = (props) => {
    return (
        <h1 className='menu-title'>{props.title}</h1>
    );
}

export default Header;
