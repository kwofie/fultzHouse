import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/figures/Abraham Gesner and George Lawson.pdf";
import pdf2 from "../../../pdfs/brochures/figures/Captain John Gorham - Hero or Monster.pdf";
import pdf3 from "../../../pdfs/brochures/figures/Charles Fenerty - The Life and Times.pdf";
import pdf4 from "../../../pdfs/brochures/figures/Citizens Who Have Cared.pdf";
import pdf5 from "../../../pdfs/brochures/figures/Cornwallis - The Controversial Founder of Halifax.pdf";
import pdf6 from "../../../pdfs/brochures/figures/Harold T. Barrett - Mr. Beaver Bank.pdf";
import pdf7 from "../../../pdfs/brochures/figures/Leading the Charge One Step Forward.pdf";
import pdf8 from "../../../pdfs/brochures/figures/Leslie Thomas and AJ Smeltzer.pdf";
import pdf9 from "../../../pdfs/brochures/figures/The Extraordinary Women of Sackville.pdf";
import pdf10 from "../../../pdfs/brochures/figures/The Fultz Family in Perspective.pdf";
import pdf11 from "../../../pdfs/brochures/figures/Two Good Men.pdf"; 

export default function Figures() {
    return (
        <div className="wrapper">
            <h1>Historical Figures in Profile</h1>
            <div className="flex-row">

                {/* Abraham Gesner and George Lawson: Great Minds of Sackville */}
                <div className="flex-item">
                    <h5 className="card-title">Abraham Gesner and George Lawson: Great Minds of Sackville</h5>
                    <p className="card-text">The Sackville area has had its share of great minds, specifically in the field of science. The scientific work of Abraham Gesner and Dr. George Lawson are profiled.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>
                
                {/* Captain John Gorham: Hero or Monster? */}
                <div className="flex-item">
                    <h5 className="card-title">Captain John Gorham: Hero or Monster?</h5>
                    <p className="card-text">Captain John Gorham and the Gorham Rangers were dispatched to Sackville in 1749, and Fort Sackville was founded. Discover about his controversial past, and whether his reputation as an historical villain is accurate or not. The facts are presented, and you decide.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Charles Fenerty: The Life and Times */}
                <div className="flex-item">
                    <h5 className="card-title">Charles Fenerty: The Life and Times</h5>
                    <p className="card-text">It is in part thanks to Charles Fenerty that our community children have access to cheap paper to do their homework on. Learn about the pulp and paper process and how this native son made his mark.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Citizens Who Have Cared: The Stories of Ted B. Blackburn and Gertrude Parker */}
                <div className="flex-item">
                    <h5 className="card-title">Citizens Who Have Cared: The Stories of Ted B. Blackburn and Gertrude Parker</h5>
                    <p className="card-text">Our community has been quite fortunate to have so many wonderful, caring citizens. Learn about business leader and community builder Ted B. Blackburn, who introduced many to television. Let’s not forget Gertrude Parker, a telephone operator, who was the brains, the human component, through which every call in the area had to funnel.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Cornwallis: The Controversial Founder of Halifax */}
                <div className="flex-item">
                    <h5 className="card-title">Cornwallis: The Controversial Founder of Halifax</h5>
                    <p className="card-text">Discover why Governor Edward Cornwallis is such a controversial figure from our past. His relationship with the Mi’kmaq is examined, as is the early days and founding of our capital city and area.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Harold T. Barrett: “Mr. Beaver Bank” */}
                <div className="flex-item">
                    <h5 className="card-title">Harold T. Barrett: “Mr. Beaver Bank”</h5>
                    <p className="card-text">Mr. Beaver Bank himself, Harold T. Barrett, had a Beaver Bank upbringing. Learn about the Halifax Explosion, the start of Barrett Lumber and the leadership role this community builder took on.</p>
                    <a href={pdf6} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Leading the Charge... One Step Forward */}
                <div className="flex-item">
                    <h5 className="card-title">Leading the Charge... One Step Forward</h5>
                    <p className="card-text">The women of Sackville represented half of the community’s talent, energy, courage and commitment. Hear about Emily Payne’s long, liberating walk. Hear about Gertrude Parker’s community work, and how Sadie Thomas, was a teacher, many would not soon forget.</p>
                    <a href={pdf7} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Leslie Thomas and A.J. Smeltzer */}
                <div className="flex-item">
                    <h5 className="card-title">Leslie Thomas and A.J. Smeltzer</h5>
                    <p className="card-text">Leslie Thomas and A.J. Smeltzer were men who lived their lives for the community. Find out what made them tick. Leslie Thomas was unfortunately lost to the war effort in WWII. A.J. Smeltzer was an old-fashioned smithy.</p>
                    <a href={pdf8} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Extraordinary Women of Sackville */}
                <div className="flex-item">
                    <h5 className="card-title">The Extraordinary Women of Sackville</h5>
                    <p className="card-text">This brochure will bring to life some of Sackville’s notable women who challenged the status quo, who overcame enormous obstacles and who accomplished things that many thought impossible. Kit Little, Mary Fultz, Shirley Major, Henrietta Wright and Agnes O’Donnell Kelly are profiled.</p>
                    <a href={pdf9} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Fultz Family in Perspective */}
                <div className="flex-item">
                    <h5 className="card-title">The Fultz Family in Perspective</h5>
                    <p className="card-text">Who was the Fultz family? Find out the who, what, when, where and why of the Fultz family, and learn a little something about our community’s past in the process.</p>
                    <a href={pdf10} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Two Good Men: The Lives of Harry R. Hamilton and Burdett Lively */}
                <div className="flex-item">
                    <h5 className="card-title">Two Good Men: The Lives of Harry R. Hamilton and Burdett Lively</h5>
                    <p className="card-text">Harry R. Hamilton and Burdett Lively were two men who went off to war, and their stories are told in tribute for their sacrifice.</p>
                    <a href={pdf11} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}