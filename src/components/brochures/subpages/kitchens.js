import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/kitchens/Chocolate Chip Trip - A History of Cookies.pdf";
import pdf2 from "../../../pdfs/brochures/kitchens/Out of Old Sackville Kitchens - French Cooking.pdf";
import pdf3 from "../../../pdfs/brochures/kitchens/Out of Old Sackville Kitchens - German Staples.pdf";
import pdf4 from "../../../pdfs/brochures/kitchens/Out of Old Sackville Kitchens - English Cooking.pdf";
import pdf5 from "../../../pdfs/brochures/kitchens/Prepping for Food in Old Sackville Kitchens.pdf";

export default function Kitchens() {
    return (
        <div className="wrapper">
            <h1>Out of Historic Sackville Kitchens</h1>
            <div className="flex-row">

                {/* Chocolate Chip Trip: A History of Cookies */}
                <div className="flex-item">
                    <h5 className="card-title">Chocolate Chip Trip: A History of Cookies</h5>
                    <p className="card-text">Attention cookie monsters (no blue fur needed) of all ages! Take a look at this retrospective on cookies and how they measure up. Some favorite recipes are shared.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Out of Old Sackville Kitchens: French Cooking */}
                <div className="flex-item">
                    <h5 className="card-title">Out of Old Sackville Kitchens: French Cooking</h5>
                    <p className="card-text">In the 1800s, Sackville kitchens were constantly buzzing with activity, as family life revolved around this room and the preparation of meals. Some French staples are listed for you to try some authentic, early French settler choices.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Out of Old Sackville Kitchens: German Staples */}
                <div className="flex-item">
                    <h5 className="card-title">Out of Old Sackville Kitchens: German Staples</h5>
                    <p className="card-text">Take a little time and whip up some delightful German dishes that many enjoyed. Hear about German cooking and European cuisine, in Out of Old Sackville Kitchens: German Staples.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Out of Old Sackville Kitchens: English Cooking */}
                <div className="flex-item">
                    <h5 className="card-title">Out of Old Sackville Kitchens: English Cooking</h5>
                    <p className="card-text">We spent some time cooking up an interesting story on what it would be like in an old Sackville kitchen in the 1700’s. Some tasty, traditional English recipes are shared.</p>
                    <a href={pdf4} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Prepping for Food in Old Sackville Kitchens */}
                <div className="flex-item">
                    <h5 className="card-title">Prepping for Food in Old Sackville Kitchens</h5>
                    <p className="card-text">The preparation of food demanded a great deal of time and devotion from each family member living in an old Sackville household, as these meals were 100% natural and made entirely from scratch.</p>
                    <a href={pdf5} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}