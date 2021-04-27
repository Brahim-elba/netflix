import data from "../data.json";
import Section from "./Section";

const Container = () => {
  return (
    <div className="container main">
      {data.map((elem, index) => {
        return <Section sectionName={elem} key={index} />;
      })}
    </div>
  );
};

export default Container;
