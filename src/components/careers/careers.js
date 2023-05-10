import React from "react";
import './careers.css';
// to import a pdf job ad, first makle sure its in the career pdf folder and then use the below template line (fill out the sections starting and ending with "__" ):
// import __Name you want to call the pdf in the code later on__ from "../../pdfs/careers/__pdf name__.pdf"

import ProgramAssistant2022 from "../../pdfs/careers/Program Assistant-2022.pdf"
import InterpreationAssistant2022 from "../../pdfs/careers/Interpreation Assistant-2022.pdf"

const Careers = () => {
    return (
        <div className="container-fluid" id="container-careers">
            <div className="container">
                <h1>Careers</h1>
                <br />
                <h3>Current Openings:</h3>
                <br />
                {/* comment out the below noOpenings p tag if there are positions*/}
                {/* <p id="noOpenings">
                    There are currently no openings available.
                </p> */}

                {/* Job info template below. */}
                {/* <div className="col">
                    <div className="card h-100 bg-transparent shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">__Job Title__</h5>
                            <p className="card-text">
                                __Brief description__
                            </p>
                            <a href={__pdf name that is imported above__} className="card-link">Read Full Job Ad</a>
                        </div>
                    </div>
                </div> */}

                < div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 d-flex justify-content-center" id="jobPosting" >
                    {/* place info here */}
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Program Assistant</h5>
                                <p className="card-text">
                                    The Program Assistant reports to and is supervised by the Summer Student Co-
                                    Ordinator. The Program Assistant assists in taking photos and scanning documents;
                                    performs research on artifacts and archives; provides guided, narrated tours of the
                                    Fultz House Museum and grounds; assists with fundraising activites; and cleaning.
                                </p>
                                <a href={ProgramAssistant2022} className="card-link">Read Full Job Ad</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Interpreation Assistant</h5>
                                <p className="card-text">
                                The Interpretation Assistant reports to and is supervised by the Summer Student Co-
                                Ordinator. The Interpretation Assistant assists in development of displays and
                                exhibits; performs research on artifacts and archives; provides guided, narrated tours
                                of the Fultz House Museum and grounds; assists with fundraising activites; and
                                cleaning.
                                </p>
                                <a href={InterpreationAssistant2022} className="card-link">Read Full Job Ad</a>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Careers;