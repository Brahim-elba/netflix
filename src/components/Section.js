import Title from "./Title";
import Caroussel from "./Caroussel";

const Section = (props) => {
  return (
    <div className="section">
      <Title title={props.sectionName.category} />
      <Caroussel urlImgArray={props.sectionName.images} />
    </div>
  );
};

export default Section;
