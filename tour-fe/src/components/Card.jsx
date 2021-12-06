import { deleteTourById } from "../service/tour-servce";

const Card = (props) => {
  const deleteById = (id) => {
    deleteTourById(id)
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        props.getAll();
      });
  };

  return (
    <div className="card">
      <div className="card__header">
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className="card__body">
        <div className="card__body-header">
          <h1>{props.tour.title}</h1>
          <h3>Php {props.tour.price}</h3>
        </div>
        <div className="card__body-content">
          <p>{props.tour.content}</p>
        </div>
      </div>
      <div className="card__footer">
        <button
          onClick={() => {
            deleteById(props.tour.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
