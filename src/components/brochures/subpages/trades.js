import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/trades/Craftspeople in the Community.pdf";
import pdf2 from "../../../pdfs/brochures/trades/Heading Down the Rails - A Look at Railway Heritage.pdf";
import pdf3 from "../../../pdfs/brochures/trades/The History of Stagecoach Travel in Nova Scotia.pdf";
import pdf4 from "../../../pdfs/brochures/trades/The Life and Tools of a Cooper.pdf";
import pdf5 from "../../../pdfs/brochures/trades/The Old-Fashioned Smithy.pdf";
import pdf6 from "../../../pdfs/brochures/trades/The Wheelwright Craft.pdf";
import pdf7 from "../../../pdfs/brochures/trades/Travelling in the Early Days.pdf";
import pdf8 from "../../../pdfs/brochures/trades/Village Carpentry.pdf";

export default function Trades() {
    return (
        <div className="wrapper">
            <h1>Transportation and the Trades</h1>
            <div className="flex-row">

                {/* Craftspeople in the Community */}
                <div className="flex-item">
                    <h5 className="card-title">Craftspeople in the Community</h5>
                    <p className="card-text">Our communities were blessed with many skilled, talented artisans. These craftspeople served as blacksmith, harness makers, shoemakers, wheelwrights, and not to forget the work of home industries.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Heading Down the Rails: A Look at Railway Heritage */}
                <div className="flex-item">
                    <h5 className="card-title">Heading Down the Rails: A Look at Railway Heritage</h5>
                    <p className="card-text">The railroad has had its share of challenges and successes. It was pivotal in Beaver Bank’s story. Learn about Daniel Hallisey, the station agent, and the Beaver Bank Station.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The History of Stagecoach Travel in Nova Scotia */}
                <div className="flex-item">
                    <h5 className="card-title">The History of Stagecoach Travel in Nova Scotia</h5>
                    <p className="card-text">A short retrospective on the stagecoach, its role in the development of our communities, the communication lifeline it served, and the Fultz family connection that intersected time and place.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Life and Tools of a Cooper */}
                <div className="flex-item">
                    <h5 className="card-title">The Life and Tools of a Cooper</h5>
                    <p className="card-text">Coopers were well known for their knowledge and craftsmanship in barrel making. A community cooper served an essential role in the community. Very few jobs required the intricate skill that a cooper needed. Tools of the trade in the Fultz House collection are on display in this homage to the life and tools of a cooper.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Old-Fashioned Smithy */}
                <div className="flex-item">
                    <h5 className="card-title">The Old-Fashioned Smithy</h5>
                    <p className="card-text">The community smithy was a centerpiece in many towns in the late 1800’s and early 1900’s. They were essential to nearly every area because of their importance to the local shops that were almost always located in close proximity to the blacksmith.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Wheelwright Craft */}
                <div className="flex-item">
                    <h5 className="card-title">The Wheelwright Craft</h5>
                    <p className="card-text">Once a mainstay of the community, a wheelwright was a trade involved with the construction of wheels for diverse types of wagons and carriages. Being a wheelwright was a traditional family trade and a very common job choice for early Sackville settlers. Bennett Fultz, an early settler in Sackville, worked as a wheelwright for a time. His father, Anthony Fultz, operated a wheelwright shop across from Bennett’s home (now the Fultz House Museum) on the road to Windsor.</p>
                    <a href={pdf6} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Travelling in the Early Days */}
                <div className="flex-item">
                    <h5 className="card-title">Travelling in the Early Days</h5>
                    <p className="card-text">Travelling in the early days involved stagecoaches, getting people to and from their community. Learn what hardships winter travel brought, and the work of travel tradespeople, like a farrier, who attached horseshoes.</p>
                    <a href={pdf7} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Village Carpentry */}
                <div className="flex-item">
                    <h5 className="card-title">Village Carpentry</h5>
                    <p className="card-text">The tasks of a village carpenter may have seemed simple and small but were in fact tasks that took time and patience. Sackville has had many skilled carpenters over the years. Learn about their tools and how they worked back in the day.</p>
                    <a href={pdf8} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}