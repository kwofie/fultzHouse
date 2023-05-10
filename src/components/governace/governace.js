import React from "react";
import './governace.css';
import statementOfPurposePDF from "../../pdfs/governance/Statement of Purpose.pdf";
import researchPolicyPDF from "../../pdfs/governance/FCRS Research Policy.pdf";
import constitutionByLawPDF from "../../pdfs/governance/Constitution and By-Laws 2022.pdf";
import artifactPDF from "../../pdfs/governance/Artifact Donor Questionnaire.pdf";
import archivalPDF from "../../pdfs/governance/Archival Donor Questionnaire.pdf";
import AGM2022ReportPDF from "../../pdfs/governance/AGM Report 2022.pdf";

const Governace = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <h3>Governance</h3>
                <br/>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Fultz Corner Restoration Society</h5>
                                <p className="card-text">
                                    Statement of Purpose for the Society.
                                </p>
                                <a href={statementOfPurposePDF} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Reseach Policy</h5>
                                <p className="card-text">
                                    Guidelines by which youth summer employees, volunteers, and
                                    the general public are able to access and use resources held
                                    in the Museum’s collection.
                                </p>
                                <a href={researchPolicyPDF} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Constitution and By-Laws</h5>
                                <p className="card-text">
                                    -
                                </p>
                                <a href={constitutionByLawPDF} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Artifact Donor Questionnaire</h5>
                                <p className="card-text">
                                    -
                                </p>
                                <a href={artifactPDF} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Archival Donor Questionnaire</h5>
                                <p className="card-text">
                                    -
                                </p>
                                <a href={archivalPDF} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">AGM Report 2022</h5>
                                <p className="card-text">
                                    The report from after our 2022 Annual General Meeting.
                                </p>
                                <a href={AGM2022ReportPDF} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governace;