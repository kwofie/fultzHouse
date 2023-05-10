import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/sackville/Early Life and Social Developments of Beaver Bank.pdf";
import pdf2 from "../../../pdfs/brochures/sackville/Historic Sackville - The Early Years.pdf";
import pdf3 from "../../../pdfs/brochures/sackville/One Hundred Years of Remembrance - The Halifax Explosion.pdf";
import pdf4 from "../../../pdfs/brochures/sackville/Sackville Business Heritage.pdf";
import pdf5 from "../../../pdfs/brochures/sackville/The History of St. John the Evangelist Anglican Church.pdf";

export default function Sackville() {
    return (
        <div className="wrapper">
            <h1>Historic Sackville and Beaver Bank</h1>
            <div className="flex-row">

                {/* Early Life and Social Developments of Beaver Bank */}
                <div className="flex-item">
                    <h5 className="card-title">Early Life and Social Developments of Beaver Bank</h5>
                    <p className="card-text">Historic Beaver Bank has had many twists and turns. Its ties to the lumber industry and railroad, has been plentiful. Learn about the early days and social developments of a community over two hundred years old.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Historic Sackville: The Early Years */}
                <div className="flex-item">
                    <h5 className="card-title">Historic Sackville: The Early Years</h5>
                    <p className="card-text">Find out the answers to some burning questions about Sackville’s early years. Why was the Mi’kmaq name for the Sackville area called “Aloosoolawakade”? Why was Lucasville named Lucasville? Where did the name Kinsac come from? Is Beaver Bank named after beavers?</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* One Hundred Years of Remembrance: The Halifax Explosion */}
                <div className="flex-item">
                    <h5 className="card-title">One Hundred Years of Remembrance: The Halifax Explosion</h5>
                    <p className="card-text">This read takes a look at Sackville connections to a maritime disaster, the Halifax Explosion. Hear what happened to Harold T. Barrett, Marjorie Grove, Leo Fultz and Helen Hopkins.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Sackville Business Heritage in Perspective*/}
                <div className="flex-item">
                    <h5 className="card-title">Sackville Business Heritage in Perspective</h5>
                    <p className="card-text">Since its conception, Sackville has seen its share of business people come and go. From wheelwrights and coopers to mechanics and electricians, Sackville has been a part of it all, striving to meet the needs of its occupants. Hear about Blackburn’s community store and Blackburn Dollars. Before the Covid-19 pandemic ever came to town, Sackville had the innovative Duncan Fader to deliver. Learn about how Sportwheels rolled into town.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The History of St. John the Evangelist Anglican Church */}
                <div className="flex-item">
                    <h5 className="card-title">The History of St. John the Evangelist Anglican Church</h5>
                    <p className="card-text">Hear about the community pillar that is the St. John the Evangelist Anglican Church. Take a little time to look back and reflect on how this church has been here for the community for hundreds of years to provide spiritual direction.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}