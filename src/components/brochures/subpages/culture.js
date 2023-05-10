import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/culture/Folklore is....pdf";
import pdf2 from "../../../pdfs/brochures/culture/Ghost Stories @ Fultz House.pdf";
import pdf3 from "../../../pdfs/brochures/culture/Ghostly Encounters.pdf";
import pdf4 from "../../../pdfs/brochures/culture/Ghostly Goings-On.pdf";
import pdf5 from "../../../pdfs/brochures/culture/Ghostly Tales.pdf";
import pdf6 from "../../../pdfs/brochures/culture/The History and Folklore of Holidays in Nova Scotia.pdf";
import pdf7 from "../../../pdfs/brochures/culture/Weather Lore for All Seasons.pdf";

export default function Culture() {
    return (
        <div className="wrapper">
            <h1>Culture and the Supernatural</h1>
            <div className="flex-row">

                {/* Folklore is... */}
                <div className="flex-item">
                    <h5 className="card-title">Folklore is...</h5>
                    <p className="card-text">Every culture has different historical backgrounds and traditions resulting in many versions of folklore. See what we came up with, and why we think it is pretty cool and amazing.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>
                
                {/* Ghost Stories @ Fultz House */}
                <div className="flex-item">
                    <h5 className="card-title">Ghost Stories @ Fultz House</h5>
                    <p className="card-text">Many children and youths, and some adults, have often asked whether the Fultz House is haunted and has any ghosts. This is your chance to find out the answer.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Ghostly Encounters */}
                <div className="flex-item">
                    <h5 className="card-title">Ghostly Encounters</h5>
                    <p className="card-text">Plan to attend any campfires soon? Have to tell a ghost story? Alleviate your concerns, and pull out your phones, and get your spook on with one of these three ghostly tales. One thing is for sure “our” ghosts remain an enduring source of fascination to humanity today, and most likely into the future.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Ghostly Goings-On */}
                <div className="flex-item">
                    <h5 className="card-title">Ghostly Goings-On</h5>
                    <p className="card-text">Sackville and the surrounding area has had its share of reports of sad souls still said to be roaming and re-visiting the places of their death. These two ghostly encounters are sure to put a chill in your evening.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Ghostly Tales */}
                <div className="flex-item">
                    <h5 className="card-title">Ghostly Tales</h5>
                    <p className="card-text">Have you ever gazed upon the Devil’s footprints? Here’s your chance to hear Beaver Bank’s famous spooky, Halloween delight.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The History and Folklore of Holidays in Nova Scotia */}
                <div className="flex-item">
                    <h5 className="card-title">The History and Folklore of Holidays in Nova Scotia</h5>
                    <p className="card-text">We celebrate many holidays throughout the year, but what exactly are these days? While many holidays have their origins shrouded in the mists of history and have been celebrated in various forms for centuries, new holidays are still being created in modern times. Check out some of these special days, why they exist and what they represent.</p>
                    <a href={pdf6} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Weather Lore for All Seasons */}
                <div className="flex-item">
                    <h5 className="card-title">Weather Lore for All Seasons</h5>
                    <p className="card-text">Weather lore is often dismissed and used only in a joking matter as old wives tales and myths that hold no truth. In actuality, weather lore is a type of folklore that focuses on the prediction of weather patterns. Year-round weather lore is used all year to predict daily weather. There are many different sayings that people like to say, but most of them revolve around what an animal is doing or how they react to certain aspects of their daily life.</p>
                    <a href={pdf7} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}