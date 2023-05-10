import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/attractions/A Theater Lovers Delight.pdf";
import pdf2 from "../../../pdfs/brochures/attractions/Galloping into the Past.pdf";
import pdf3 from "../../../pdfs/brochures/attractions/Sackville Destinations.pdf";

export default function Attractions() {
    return (
        <div className="wrapper">
            <h1>Historic Sackville Attractions and Places</h1>
            <div className="flex-row">

                {/* A Theatre’s Lover Delight: The Sackville Drive-in */}
                <div className="flex-item">
                    <h5 className="card-title">A Theatre’s Lover Delight: The Sackville Drive-in</h5>
                    <p className="card-text">While the Sackville Drive-in has long since shown its last film, many residents have not forgotten about it, as it  was more than a business, but a place where the community gathered, socialized, and were entertained.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Galloping Into the Past: The Sackville Downs Story */}
                <div className="flex-item">
                    <h5 className="card-title">Galloping Into the Past: The Sackville Downs Story</h5>
                    <p className="card-text">Sackville Downs, once the harness racing showplace of the Maritimes, had its fair share of triumphs and struggles. Take a gallop down memory lane and see why Sackville Downs was at the heart of our main street.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Sackville Destinations */}
                <div className="flex-item">
                    <h5 className="card-title">Sackville Destinations</h5>
                    <p className="card-text">Sackville and Beaver Bank have always been home to an assortment of places that draw a crowd, from Beaver Bank Station to Blackburn’s to the Quarry to the Bomber Canteen, and so much more. Take a little time and read up on some of Sackville’s most memorable destinations from the 1900’s.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}