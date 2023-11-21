import "./Testimonial.scss";
import Card from "./Card/Card";
import data from "./testimonialData";

const Testimonial = () => (
    <div className="container">
      {data.map((data, i) => (
        <Card
        name={data.author}
        title={data.title}
        image={data.img}
        text={data.testimonial}
        linkedin={data.linkedin}
        key={i}
      />
      ))}
    </div>
);

export default Testimonial;
