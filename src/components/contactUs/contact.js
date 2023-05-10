import React from "react";

const ContactUs = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>Contact Us</h1>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <h2>Fultz House Museum</h2>
                    <div id="contact-info">
                        <p>
                            <h5>Address: <br></br></h5>
                            33 Sackville Drive <br></br> 
                            Lower Sackville <br></br> 
                            NS B4C 0E5
                        </p>
                        <p>
                            <h5>Phone: <br></br></h5>
                            902-865-3794
                        </p>
                        <p>
                            <h5>Fax: <br></br></h5>
                            902-865-6940
                        </p>
                        <p>
                            <h5>Email: <br></br></h5>
                            <a href="mailto: fultz.house@ns.sympatico.ca">fultz.house@ns.sympatico.ca</a>
                        </p>
                        <p>
                        <h5>Hours: <br></br></h5>
                        June: Saturday and Sunday, 10am to 5pm <br />
                        July and August: Monday to Friday, 11am to 5pm, <br />
                        Satuday and Sunday, 10am to 5pm
                        </p>



                    </div>
                </div>
                <div className="col-6" id="directions">
                    <h2>Directions:</h2>
                    <p>
                    From Highway 102/Airport: <br/>
                    Take Exit 4C onto Glendale Avenue. 
                    Turn left at the lights at Cobequid Road. 
                    Turn left at the Memory Lane lights. 
                    Follow signs to our parking area.
                    </p>

                    <p>
                    From Bedford/Halifax: <br/>
                    Take Highway 101, exiting at Exit 1K (follow signs for Lower Sackville). 
                    At the lights, turn right onto Cobequid Road. 
                    Turn right at the Memory Lane lights. 
                    Follow signs to our parking area.  
                    </p>

                    <p>
                    From Dartmouth: <br/>
                    Take Highway 7 following signs to Sackville. 
                    Exit at Cobequid Road, turning left onto Memory Lane before reaching the lights. 
                    Follow signs to our parking area.
                    </p>

                    <p>
                    From Windsor: <br/>
                    Take Highway 101 toward Halifax/Dartmouth, exiting at Beaverbank Road. 
                    Turn right at the first set of lights onto Old Sackville Road. 
                    At the end of Old Sackville Road, proceed straight ahead through the lights at Sackville Drive onto Cobequid Road. 
                    Turn right at the Memory Lane lights. 
                    Follow signs to our parking area. 
                    </p>

                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default ContactUs;