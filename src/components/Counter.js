import "../stylesheets/Counter.css";

const Counter = ({ clicksNumber}) => {
    return(
        <div className="container counter-container mx-auto d-block text-center">{clicksNumber}</div>
    );
}

export default Counter;