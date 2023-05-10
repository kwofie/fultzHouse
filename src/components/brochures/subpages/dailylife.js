import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/dailylife/A History on Laundry.pdf";
import pdf2 from "../../../pdfs/brochures/dailylife/A History on Afternoon Tea.pdf";
import pdf3 from "../../../pdfs/brochures/dailylife/All About Soap and Candle Making.pdf";
import pdf4 from "../../../pdfs/brochures/dailylife/Childhood Play.pdf";
import pdf5 from "../../../pdfs/brochures/dailylife/From Sip to Cash - The Savvy Bottle Collector.pdf";
import pdf6 from "../../../pdfs/brochures/dailylife/Games From Long Ago.pdf";
import pdf7 from "../../../pdfs/brochures/dailylife/How Outhouses Came To Be.pdf";
import pdf8 from "../../../pdfs/brochures/dailylife/Tea Parties - Endless Possibilities.pdf";
import pdf9 from "../../../pdfs/brochures/dailylife/The Cure for What Ails You....pdf";
import pdf10 from "../../../pdfs/brochures/dailylife/The History of Hand-stitched Creations.pdf";
import pdf11 from "../../../pdfs/brochures/dailylife/Useful Objects From The Late 1800s.pdf";
import pdf12 from "../../../pdfs/brochures/dailylife/Victorian Christmas Traditions.pdf";
import pdf13 from "../../../pdfs/brochures/dailylife/Whatnots to Chamber Pots.pdf";

export default function Dailylife() {
    return (
        <div className="wrapper">
            <h1>Daily Life, Collectibles and Holidays</h1>
            <div className="flex-row">

                {/* A History on Laundry */}
                <div className="flex-item">
                    <h5 className="card-title">A History on Laundry</h5>
                    <p className="card-text">Is laundry not everyone’s favorite chore at home? Let’s clear that up, “NO!”. The evolution of laundry is profiled, and for good measure, a snapshot on ironing history is included.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* A History on Afternoon Tea */}
                <div className="flex-item">
                    <h5 className="card-title">A History on Afternoon Tea</h5>
                    <p className="card-text">For those who love tea, love it a lot. Learn about tea time etiquette, the origins of afternoon tea and the legends surrounding tea.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* All About Soap and Candle Making */}
                <div className="flex-item">
                    <h5 className="card-title">All About Soap and Candle Making</h5>
                    <p className="card-text">Literally what the title suggests, is what is at hand when this little gem is read. Explore the fascinating world of candle making and soap creation of yesteryear.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Childhood Play */}
                <div className="flex-item">
                    <h5 className="card-title">Childhood Play</h5>
                    <p className="card-text">Play is a fun way for children to learn without losing interest in the subject. There were a lot of games that taught children valuable lessons. Other games offered children a chance to clear their head while learning the importance of teamwork and how to work cohesively as one.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* From Sip to Cash: The Savvy Bottle Collector */}
                <div className="flex-item">
                    <h5 className="card-title">From Sip to Cash: The Savvy Bottle Collector</h5>
                    <p className="card-text">Bottles, bottles and more bottles. For those who like bottles, like them a lot. This is a must read for a Nova Scotia bottle collector. Some of Fultz House’s colourful bottles are on display.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Games From Long Ago */}
                <div className="flex-item">
                    <h5 className="card-title">Games From Long Ago</h5>
                    <p className="card-text">Before Monopoly, Clue and the expression, “you sank my battleship”, area families had their fair share of games to play both in the parlour, and outside. You name, they had it – guessing games, word games,  tables games, board games, work party games, holiday games, outdoor games, and even, classroom games. Just lots of fun!</p>
                    <a href={pdf6} className="card-link" target="_blank">Read more</a>
                </div>

                {/* How Outhouses Came to Be */}
                <div className="flex-item">
                    <h5 className="card-title">How Outhouses Came to Be</h5>
                    <p className="card-text">Let’s take a plunge into a dicey subject – that of the outhouse, its origins, the two-story structure, bathroom humour and so much more in how our forefathers dealt with number one and number two.</p>
                    <a href={pdf7} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Tea Parties: Endless Possibilities */}
                <div className="flex-item">
                    <h5 className="card-title">Tea Parties: Endless Possibilities</h5>
                    <p className="card-text">Why are so many people in love with the idea of having tea and a light snack in the afternoon? What quickly became a fad has evolved into a daily ritual that has been passed down from generation to generation. Fultz House has had many tea functions. Learn about a classic English tea, a gentleman’s tea, about a teddy bear’s picnic, and even a melt in your mouth coconut cake recipe.</p>
                    <a href={pdf8} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Cure for What Ails You... Homemade & Natural Remedies */}
                <div className="flex-item">
                    <h5 className="card-title">The Cure for What Ails You... Homemade and Natural Remedies</h5>
                    <p className="card-text">Healing different sicknesses in rural communities was often difficult because of the lack of medical professionals in the area. Most injuries or illnesses were looked after in the home. The remedies that were used were made of either affordable items or those that could be found in the surrounding area such as from plants, animals, and food grown in the garden. Find out about cures that ailed the sick. </p>
                    <a href={pdf9} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The History of Hand-stitched Creations */}
                <div className="flex-item">
                    <h5 className="card-title">The History of Hand-stitched Creations</h5>
                    <p className="card-text">Calling all quilters. This is the read for you. Stitch together the facts about quilting, embroidery, and learn about the art of the sampler.</p>
                    <a href={pdf10} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Useful Objects From The Late 1800's */}
                <div className="flex-item">
                    <h5 className="card-title">Useful Objects From The Late 1800's</h5>
                    <p className="card-text">Useful home, farm, woodworking and medical gadgets from the late 1800’s, which were a mainstay of life back then, are on display.</p>
                    <a href={pdf11} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Victorian Christmas Traditions */}
                <div className="flex-item">
                    <h5 className="card-title">Victorian Christmas Traditions</h5>
                    <p className="card-text">Read on about holly, jolly times in the Victorian era and how many of the Christmas traditions we have today, came to be.</p>
                    <a href={pdf12} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Whatnots to Chamber Pots */}
                <div className="flex-item">
                    <h5 className="card-title">Whatnots to Chamber Pots</h5>
                    <p className="card-text">There are certain conventions of a Victorian house, ones you will not find in a modern dwelling, that are preserved here in the Fultz House Museum, telling stories of everyday life in the mid 1800’s.</p>
                    <a href={pdf13} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}