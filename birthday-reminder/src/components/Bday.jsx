const Bday = (props) => {
  return (
    <div className="bday">
      <div className="img">
        <img src={props.picPath} alt="" />
      </div>

      <h1>
        Name: {props.fname} {props.lname}
      </h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
};

export default Bday;
