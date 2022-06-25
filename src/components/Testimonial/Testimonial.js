import React from "react";
import "./Testimonial.css";
import StarIcon from "@mui/icons-material/Star";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dropdown = () => {
  const [mark, setMark] = React.useState(false);
  const handleClick = () => setMark(!mark);
  const iconStyle = {
    backgroundColor: "var(--color-hover)",
    borderRadius: "50%",
    transition: "0.3s",
  };
  return (
    <div className="dropdown">
      <MoreVertIcon
        fontSize="small"
        className="vertical-icon"
        onClick={handleClick}
        style={mark ? iconStyle : null}
      />
      <div className={mark ? "flag" : "hide"}>
        <a
          href="https://www.google.com/maps/place/Pretty+Neat+Maids,+LLC/@41.9611218,-87.7280033,15z/data=!4m5!3m4!1s0x0:0x810e8085339ac80a!8m2!3d41.9611218!4d-87.7280033"
          target="_blank"
          rel="noreferrer"
        >
          Flag as inapproriate
        </a>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const reviews = {
    "Lane G":
      "Daniela and her mother are absolutely fantastic. They do a better job and charge less than previous cleaning services we’ve had in the past. They are always on time and responsive to texts. They also happen to be lovely people you can feel comfortable having in your home! Highly recommend.",
    Ricky:
      "Patricia and her team have been cleaning my Home for 5 years now, and they are simply AMAZING! They are prompt, professional, sweet, and amazing at what they do. I have a couple large breed dogs and they treat them as their own and easily clean around them, the dogs look forward to seeing them every time. Patricias team also have cleaned my moms home and she was astonished at how fabulous it was. They are Extremely trustworthy, as they have had my keys for years now. I would highly recommend them for any of your cleaning needs!",
    "Laura R":
      "I cannot say enough great things about Patricia and Pretty Neat Maids! It is the highlight of my week. She does a fantastic job and leaves our home sparkling clean. In addition, she is the sweetest person, wonderful with my two year old daughter and our dog. She is trustworthy, flexible and a joy to work with. We are lucky to have found her.",
  };
  const time = ["8 months ago", "1 year ago", "1 year ago"];
  const obj = Object.entries(reviews);

  return (
    <section className="testimonial" id="testimonials">
      <hr className="seperator" />
      <h2 className="section-heading">Testimonials</h2>
      <div className="review-info__wrap">
        {/* Review card 1 */}
        {obj.map(([author, review], i) => {
          return (
            <div key={i} className="review-card">
              <div className="stats">
                <StarIcon
                  className="star-icon"
                  fontSize="small"
                  sx={{ color: "#fbbc04" }}
                />
                <StarIcon
                  className="star-icon"
                  fontSize="small"
                  sx={{ color: "#fbbc04" }}
                />
                <StarIcon
                  className="star-icon"
                  fontSize="small"
                  sx={{ color: "#fbbc04" }}
                />
                <StarIcon
                  className="star-icon"
                  fontSize="small"
                  sx={{ color: "#fbbc04" }}
                />
                <StarIcon
                  className="star-icon"
                  fontSize="small"
                  sx={{ color: "#fbbc04" }}
                />
                <div className="wrh">{time[i]}</div>
                <Dropdown />
              </div>
              <blockquote className="bq">
                <q>{review}</q>
              </blockquote>
              <cite className="author">- {author}</cite>
            </div>
          );
        })}
      </div>
      <div className="review-read">
        <a
          className="link-review"
          href="https://search.google.com/local/writereview?placeid=ChIJRxAX_53LD4gRCsiaM4WADoE"
          rel="noreferrer"
          target="_blank"
        >
          Write a Review
        </a>
        <a
          className="link-review"
          href="https://search.google.com/local/reviews?placeid=ChIJRxAX_53LD4gRCsiaM4WADoE"
          rel="noreferrer"
          target="_blank"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default Testimonial;
