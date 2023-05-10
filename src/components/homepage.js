import React from "react";
import image1 from "../pics/homepage-carousel/building-front.jpg"
import image2 from "../pics/homepage-carousel/grounds-pano.jpg"
import image3 from "../pics/homepage-carousel/model.jpeg"
import image4 from "../pics/homepage-carousel/Blacksmith Painting 3.jpg"
import image5 from "../pics/homepage-carousel/Fultz Corner.jpeg"
import image6 from "../pics/homepage-carousel/Fultz House - Front.jpg"
import image7 from "../pics/homepage-carousel/Fultz House - Side View.jpg"
import image8 from "../pics/homepage-carousel/Fultz House Front Image 5.jpg"
import image9 from "../pics/homepage-carousel/Fultz House Front Image 6.jpg"
import image10 from "../pics/homepage-carousel/Fultz House Painting 3.jpg"
import image11 from "../pics/homepage-carousel/tree-cover.jpeg"


const Homepage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image4} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image5} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image6} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image7} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image8} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image9} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image10} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image11} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h1>Welcome to Fultz House!</h1>
                    <h5>Sackville’s Heritage Portal</h5>
                    <br/>
                    <p> 
                        Located at the corner of Nova Scotia's most famous intersection,
                        Fultz House Museum's collections reflect over 200 years of Sackville history. Constructed in the 1860s,
                        Bennett Fultz's house is now home to hundreds of artifacts, photographs, and displays.
                        Come discover Sackville's proud history for yourself!
                    </p>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                {/* Insert Social media feeds here */}
                <div className="col-1"></div>
                <div className="col-4" id="facebook-feed">
                    {/* insert facebook feed code here */}
                </div>
                <div className="col-2"></div>
                <div className="col-4" id="instagramfeed-feed">
                    {/* insert instagram feed code here */}                    
                </div>
                <div className="col-1"></div>
            </div>
        </div>

    )
}

export default Homepage;