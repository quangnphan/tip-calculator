const Button = (props) => {
  const handleSelect = (e) => {
    props.setPercent(e.target.value);
  };
  return (
    <button className="btn" value={props.value} onClick={handleSelect}>
      {props.value}%
    </button>
  );
};

export default Button;
