import React from "react";
import './donations.css';
import donateimg from '../../pics/donate.jpg';
import donateForm from '../../pdfs/Donate Form.docx';

const Donations = () => {
    return (
        <div className="container-fluid" id='container-donations'>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1 className="py-4">Donations</h1>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={donateimg} alt="" id='donate-img'/>
                        </div>
                        <div className="col mx-auto my-auto">
                            <p>
                                All donations to the Fultz Corner Restoration (Fultz House Museum) are used for the maintenance, new development, and upkeep of the museum building, outbuildings, grounds, and collections.  We are very grateful for donations we received.  Please follow the link below to complete the form for monetary donations so a tax receipt can be provided.
                            </p>
                            <a href={donateForm} className='btn btn-primary py-3 px-5'>Donate Form</a>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default Donations;