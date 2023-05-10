import React from "react";
import '../brochures.css';
import pdf1 from "../../../pdfs/brochures/education/Teaching and Learning.pdf";
import pdf2 from "../../../pdfs/brochures/education/The Maroon Hill Children.pdf";
import pdf3 from "../../../pdfs/brochures/education/The Story Behind the Grove Finishing School.pdf";

export default function Education() {
    return (
        <div className="wrapper">
            <h1>Education</h1>
            <div className="flex-row">

                {/* Teaching and Learning in a One and Two Room Schoolhouse */}
                <div className="flex-item">
                    <h5 className="card-title">Teaching and Learning in a One and Two Room Schoolhouse</h5>
                    <p className="card-text">Find out what life in a one and two room schoolhouse was like. What size were the classes on average? How much did a teacher make? What conditions did a female teacher have to live up to? This pamphlet is chalk full of useful intel on the education system from the past.</p>
                    <a href={pdf1} className="card-link" target="_blank">Read more</a>
                </div>

                {/* Historic Black Sackville: The Maroon Hill Children & Mrs. Caldwell’s School */}
                <div className="flex-item">
                    <h5 className="card-title">Historic Black Sackville: The Maroon Hill Children and Mrs. Caldwell’s School</h5>
                    <p className="card-text">Read about part of our community’s Black heritage, and discover the story behind the Maroon Hill children losing their school and how Mrs. Caldwell’s kitchen school opened, and how a lot of people’s eyes were open to what was possible, by a wonderful group of children, when give a chance. This story was a testament to determination.</p>
                    <a href={pdf2} className="card-link" target="_blank">Read more</a>
                </div>

                {/* The Story Behind the Grove Finishing School */}
                <div className="flex-item">
                    <h5 className="card-title">The Story Behind the Grove Finishing School</h5>
                    <p className="card-text">Sit down and take a moment to read up on the Grove Finishing School, what it set out to do, how it evolved, and the historic connections of the Grove family to the Beaver Bank community.</p>
                    <a href={pdf3} className="card-link" target="_blank">Read more</a>
                </div>

            </div>
        </div>
    )
}