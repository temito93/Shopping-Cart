import Button from "../Button/Button";

const ListItem = ({ onClick, title, price }) => {
  return (
    <div className="d-flex mt-4 justify-content-between w-25">
      <h4>{title}</h4>
      <p>{price}</p>
      <Button onClick={onClick} className="btn btn-primary">
        Add
      </Button>
    </div>
  );
};

export default ListItem;
