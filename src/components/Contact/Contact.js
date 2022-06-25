import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <hr className="seperator" />
      <h2 className="section-heading">Contact us</h2>
      <article className="map">
        <a
          href="https://www.google.com/maps/place/Pretty+Neat+Maids,+LLC/data=!3m1!4b1!4m2!3m1!1s0x880fcb9dff171047:0x810e8085339ac80a"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="QMbmRe"
            style={{
              backgroundImage:
                "url('https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=US&markers=color:0x60a5a5|41.9611218,-87.7280033&zoom=16&client=google-presto&signature=DPRS7XIvd9feBQlGoEv4z2VskUs')",
            }}
            title="Map showing business location."
          ></div>
        </a>
      </article>
      <article className="contact-info">
        <div className="contact c-itm">
          <h3 className="c-heading">Contact</h3>
          <a href="tel:+1-630-785-0938" className="dir">
            Call Now
          </a>
          <p className="numb">(630) 785-0938</p>
        </div>
        <div className="address c-itm">
          <h3 className="c-heading">Address</h3>
          <a
            href="https://www.google.com/maps/dir//Pretty+Neat+Maids,+LLC/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fcb9dff171047:0x810e8085339ac80a!2m2!1d-87.7280033!2d41.9611218"
            className="dir"
          >
            Get Directions
          </a>
          <address className="qhkvMe " itemProp="address">
            <div>4000 West Montrose Avenue</div>
            <div>Chicago, IL 60641</div>
            <div>USA</div>
          </address>
        </div>
        <div className="bus-hours c-itm">
          <h3 className="c-heading">Business Hours</h3>
          <table itemProp="openingHours">
            <tbody>
              <tr>
                <th className="x2TOCf">Mon:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Tue:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Wed:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Thu:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Fri:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Sat:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Sun:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">8:00 AM – 5:00 PM</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default Contact;
