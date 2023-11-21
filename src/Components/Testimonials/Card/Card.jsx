import "./Card.scss";

const Card = ({ name, title, image, text, linkedin }) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
          <span
            className="circle circle5"
            style={{ maxHeight: "15px", objectFit: "contain" }}
          >
            <img src={image} alt="" />
          </span>
        </div>
        <div className="glass"></div>
        <div className="content">
          <span className="title">{name}</span>
          <span className="text" style={{ fontSize: "0.75rem" }}>
            {title}
          </span>
          <span className="text">{text}</span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            {/* <a href=""></a> */}
            <button className="social-button .social-button1">
              <a href={linkedin} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 24 24"
                  className="svg"
                >
                  <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </a>
            </button>
          </div>
          <div className="view-more">
            <a
              href="https://www.linkedin.com/in/priyanshu-choudhary-sliet/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
            >
              <button className="view-more-button">Read more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
