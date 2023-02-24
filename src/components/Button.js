import '../stylesheets/Button.css';

const Button = ({ text, clickButton, handleClick }) => {
    return(
        <button type="button" className= {clickButton ? "btn btn-primary mx-auto d-block btn-lg" : "btn btn-success mx-auto d-block btn-lg"} onClick={handleClick}>{text}</button>
    );
}

export default Button;