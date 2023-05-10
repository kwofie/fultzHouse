import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/museum/Favorite Things.pdf";
import pdf2 from "../../../pdfs/brochures/museum/Fultz House Museum - A Volunteer Destination.pdf";
import pdf3 from "../../../pdfs/brochures/museum/The Art of Coopering.pdf";
import pdf4 from "../../../pdfs/brochures/museum/The Cenotaph at Sackville Heritage Park.pdf";
import pdf5 from "../../../pdfs/brochures/museum/The Old Blacksmith Shop.pdf";
import pdf6 from "../../../pdfs/brochures/museum/Thousands of Stories.pdf";

export default function Museum() {
    return (
        <div className="wrapper">
            <h1>Fultz House Museum and Surrounding Area</h1>
            <div className="flex-row">

                {/* Favorite Things */}
                <div className="flex-item">
                    <h5 className="card-title">Favorite Things</h5>
                    <p className="card-text">We have asked our summer students of the past to identify some of their favorite things from the Fultz House Museum collections, and their answers fill the panels of this brochure. Hear the stories of some special artifacts that caught their attention.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Fultz House Museum: A Volunteer Destination */}
                <div className="flex-item">
                    <h5 className="card-title">Fultz House Museum: A Volunteer Destination</h5>
                    <p className="card-text">A fun and dynamic place to come and volunteer. Learn about the past, and in the process, realize what a special place your community happens to be.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Art of Coopering */}
                <div className="flex-item">
                    <h5 className="card-title">The Art of Coopering</h5>
                    <p className="card-text">The cooper trade was once as common as the commodities in their barrels. Sharpen your knowledge on wood and what was preferred by a cooper. Learn about how Richard and Earl Grace’s cooperage arrived on the grounds of the Fultz House Museum, board-by-board.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Cenotaph at Sackville Heritage Park */}
                <div className="flex-item">
                    <h5 className="card-title">The Cenotaph at Sackville Heritage Park</h5>
                    <p className="card-text">A cenotaph is a monument erected in honour of a person or group of people whose remains are elsewhere – lost in the fields of battle. Take a little time to remember those who have been lost to the war effort, and how Sackville has paid tribute to those lost at the Sackville Cenotaph in Sackville Heritage Park.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Old Blacksmith Shop */}
                <div className="flex-item">
                    <h5 className="card-title">The Old Blacksmith Shop</h5>
                    <p className="card-text">The Fultz House Museum blacksmith shop is a tribute to old-fashioned building methods and the fulfillment of a dream. Touring the blacksmith shop helps visitors to look back into our past and see how our forebears lived and carried on their lives. Tools, costs of jobs and general techniques are offered up.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Thousands of Stories Waiting To Be Learned @ The Sackville Heritage Archives */}
                <div className="flex-item">
                    <h5 className="card-title">Thousands of Stories Waiting To Be Learned @ The Sackville Heritage Archives</h5>
                    <p className="card-text">Looking back literally on the pages of history, the Sackville Heritage Archive holdings provide a vital role that enables the people of today and tomorrow to examine the unique records that captures snapshots in time of Beaver Bank, Kinsac, Lower Sackville, Lucasville, Middle and Upper Sackville, to help comprehend how our communities took root and flourished.</p>
                    <a href={pdf6} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}