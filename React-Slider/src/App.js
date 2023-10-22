import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "remixicon/fonts/remixicon.css";
const ratingChanged = (newRating) => {
  console.log(newRating);
};
function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel1">
      <h2>Testimonials</h2>
      <p>That's what our client says </p>
      <Slider {...settings}>
        <div className="boxx">
          {/* <h3>1</h3> */}
          <i class="ri-user-line"></i>
          <h5 class="title">Customer Name</h5>
          <h6 class="review">Happy Customer </h6>
          <p className="comment">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply<br></br>
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the<br></br>
            In industry
          </p>
          <div className="stars">
            <ReactStars
              classNames={"ahm"}
              count={5}
              onChange={ratingChanged}
              size={"10px"}
              color="#707070"
              // filledIcon={true}
              activeColor="#ed6b37"
            />
            ,
          </div>
        </div>
        <div className="boxx">
          <i class="ri-user-line"></i>
          <h5 class="title">Customer Name</h5>
          <h6 class="review">Happy Customer </h6>
          <p className="comment">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply<br></br>
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the<br></br>
            In industry
          </p>
          <div className="stars">
            <ReactStars
              classNames={"ahm"}
              count={5}
              onChange={ratingChanged}
              size={"10px"}
              color="#707070"
              // filledIcon={true}
              activeColor="#ed6b37"
            />
            ,
          </div>
        </div>
        <div className="boxx">
          <i class="ri-user-line"></i>
          <h5 class="title">Customer Name</h5>
          <h6 class="review">Happy Customer </h6>
          <p className="comment">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply<br></br>
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the<br></br>
            In industry
          </p>
          <div className="stars">
            <ReactStars
              classNames={"ahm"}
              count={5}
              onChange={ratingChanged}
              size={"10px"}
              color="#707070"
              // filledIcon={true}
              activeColor="#ed6b37"
            />
            ,
          </div>
        </div>
        <div className="boxx">
          <i class="ri-user-line"></i>
          <h5 class="title">Customer Name</h5>
          <h6 class="review">Happy Customer </h6>
          <p className="comment">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply<br></br>
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the<br></br>
            In industry
          </p>
          <div className="stars">
            <ReactStars
              classNames={"ahm"}
              count={5}
              onChange={ratingChanged}
              size={"10px"}
              color="#707070"
              // filledIcon={true}
              activeColor="#ed6b37"
            />
            ,
          </div>
        </div>
        <div className="boxx">
          <i class="ri-user-line"></i>
          <h5 class="title">Customer Name</h5>
          <h6 class="review">Happy Customer </h6>
          <p className="comment">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply<br></br>
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the<br></br>
            In industry
          </p>
          <div className="stars">
            <ReactStars
              classNames={"ahm"}
              count={5}
              onChange={ratingChanged}
              size={"10px"}
              color="#707070"
              // filledIcon={true}
              activeColor="#ed6b37"
            />
            ,
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default App;
