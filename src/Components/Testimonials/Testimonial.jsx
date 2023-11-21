import "./Testimonial.scss";
import Card from "./Card/Card";
import data from "./testimonialData";

const Testimonial = () => (
    <div className="container">
      <h1 style={{fontSize: "60px"}}>Testimonials</h1>
      <div className="cards">
      {data.map((data, i) => (
        <Card
        name={data.author}
        title={data.title}
        image={data.img}
        text={data.testimonial.length > 280 ? data.testimonial.slice(0, 280) + '...' : data.testimonial}
        linkedin={data.linkedin}
        key={i}
        />
        ))}
        </div>
    </div>
);

export default Testimonial;
