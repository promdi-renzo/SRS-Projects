import Bday from "./Bday";
import Header from "./Header";

const List = (props) => {
  return (
    <div className="list-view">
      <Header num={props.bdays.length} />
      {props.bdays.map((b) => {
        console.log(b.firstName);
        return (
          <Bday
            key={b.id}
            fname={b.firstName}
            lname={b.lastName}
            age={b.age}
            picPath={b.picPath}
          />
        );
      })}
    </div>
  );
};

export default List;
