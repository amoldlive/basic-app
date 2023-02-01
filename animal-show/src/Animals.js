function Animal(props) {
  const {type,love} = props;
  return (
        <div>
            <img src={type} alt="img"></img>
            <img src={love} alt="love"></img>
        </div>
  );
}

export default Animal;
