/* 
   - finish styling on this page & for subpages 
       - submission container
       - flex-item
   - set up new template thing with emailjs after you get login from mykyta
   - test form submission with my email & then figure out where it should be sent to later
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './brochures.css';

export default function Brochures() {
    const [successMessage, setSuccessMessage] = useState('');//?
    const serviceID = ''//'service_2xzu5ou';//update
    const templateID = ''//'template_zv3ymyr';//update
    const publicKey = ''//'J2qvwN35IJJ54k5hb';//?

    const submitted = ( event) => {
        event.preventDefault();
        let data = event.target[0].value;
        // sendEmail(serviceID, templateID, data, publicKey);
        event.target.reset();
    }

    const sendEmail = (serviceID, templateID, data, publicKey) => {
        emailjs.send(serviceID, templateID, data, publicKey) 
            .then(() => { setSuccessMessage("Thanks for submitting your idea!") }) 
                .catch(err => console.error(`Something went wrong. ${err}`)); //dbl check these messages look ok on screen 
    };

    return (
        <div className="wrapper">
            <h1>Brochures</h1>
            <div className="flex-row">
                <Link to={'/culture'} className="brochure-section">Culture and the Supernatural</Link>
                <Link to={'/daily-life'} className="brochure-section">Daily Life, Collectibles and Holidays</Link>
                <Link to={'/education'} className="brochure-section">Education</Link>
                <Link to={'/museum-and-surrounding-area'} className="brochure-section">Fultz House Museum and Surrounding Area</Link>
                <Link to={'/historic-sackville-and-beaverbank'} className="brochure-section">Historic Sackville and Beaver Bank</Link>
                <Link to={'/historical-figures'} className="brochure-section">Historical Figures in Profile</Link>
                <Link to={'/kitchens'} className="brochure-section">Out of Historic Sackville Kitchens</Link>
                <Link to={'/sackville-attractions'} className="brochure-section">Historic Sackville Attractions and Places</Link>
                <Link to={'/transportation-and-trades'} className="brochure-section">Transportation and the Trades</Link>
            </div>

            <div id="submission-container">
                <h5>Do You Have a Great Research Idea?</h5>
                <p>Let us know, and it might become the topic for a future brochure!</p>
                <span className='success-msg'>{successMessage}</span> {/* working ok? */}
                <form onSubmit={submitted}>
                    <textarea id='submission-textarea' type='text' placeholder='Tell us about your idea!'/>
                    <button className='btn btn-outline-dark w-50' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}