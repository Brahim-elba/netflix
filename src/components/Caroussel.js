import Picture from "./Picture";

const Caroussel = (props) => {
  return (
    <div className="caroussel">
      {props.urlImgArray.map((elem, index) => {
        return <Picture urlImg={elem} key={index} />;
      })}
    </div>
  );
};

export default Caroussel;
