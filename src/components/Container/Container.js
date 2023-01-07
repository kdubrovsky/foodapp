import './Container.css';

const Container = (content) => {
    return (
        <div className="container">
            {content.children}
        </div>
    );
};

export default Container;