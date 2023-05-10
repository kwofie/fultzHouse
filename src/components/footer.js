import React from "react";
import "./footer.css";


const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2 info">
                    <p><b>Fultz House Museum</b></p>
                    <p>33 Sackville Drive <br />
                        Lower Sackville <br />
                        NS B4C 0E5
                    </p>
                </div>
                <div className="col-3 info">
                    <p><br /></p>
                    <p>
                        Phone: 902-865-3794 <br />
                        Fax: 902-865-6940 <br />
                        Email: <a href="mailto: fultz.house@ns.sympatico.ca">fultz.house@ns.sympatico.ca</a><br />
                    </p>
                </div>
                <div className="col-1"></div>
                <div className="col-4" id="hours">
                    <p><b>Hours</b></p>
                    <p>
                        <b>June:</b> Saturday and Sunday, 10am to 5pm <br />
                        <b>July and August:</b> Monday to Friday, 11am to 5pm, <br />
                        Satuday and Sunday, 10am to 5pm
                    </p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default Footer;
