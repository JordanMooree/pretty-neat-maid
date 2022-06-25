import React from "react";
import "./Quote.css";
import CloseIcon from "@mui/icons-material/Close";

const Quote = (props) => {
  return (
    <div className={props.buttonState}>
      <div className="iframe-close__wrap">
        <p className="title">Get a Quote</p>
        <CloseIcon className="close-icon" onClick={props.iconState} />
        <iframe src="https://business.google.com/websites/forms?st=services&amp;hl=en&amp;lid=13827022297201908463&amp;usegapi=1&amp;jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.dzXZWX9QTbE.O%2Fd%3D1%2Frs%3DAHpOoo_epIQDPHdjFr3MLkazUi2Jmy50dQ%2Fm%3D__features__#id=I0_1655827229059&amp;_gfid=I0_1655827229059&amp;parent=https%3A%2F%2Fprettyneatmaidsllc.com&amp;pfname=&amp;rpctoken=38516295"></iframe>
      </div>
    </div>
  );
};

export default Quote;
