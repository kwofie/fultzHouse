import React from 'react';
import artifactPic1 from "../../pics/artifacts/artifactpic1.jpeg"
import artifactPic2 from "../../pics/artifacts/artifactpic2.jpeg"
import artifactPic3 from "../../pics/artifacts/artifactpic3.jpeg"
import artifactPic4 from "../../pics/artifacts/artifactpic4.jpeg"
import artifactPic5 from "../../pics/artifacts/artifactpic5.jpeg"
import artifactPic6 from "../../pics/artifacts/artifactpic6.jpeg"
import artifactPic7 from "../../pics/artifacts/artifactpic7.jpeg"
import artifactPic8 from "../../pics/artifacts/artifactpic8.jpeg"
import artifactPic9 from "../../pics/artifacts/artifactpic9.jpeg"
import artifactPic10 from "../../pics/artifacts/artifactpic10.jpeg"
import artifactPic11 from "../../pics/artifacts/artifactpic11.jpeg"
import artifactPic12 from "../../pics/artifacts/artifactpic12.jpeg"
import artifactPic13 from "../../pics/artifacts/artifactpic13.jpg"
import artifactPic14 from "../../pics/artifacts/artifactpic14.jpeg"
import artifactPic15 from "../../pics/artifacts/artifactpic15.jpeg"
import artifactPic16 from "../../pics/artifacts/artifactpic16.jpeg"
import artifactPic17 from "../../pics/artifacts/artifactpic17.jpeg"
import artifactPic18 from "../../pics/artifacts/artifactpic18.jpeg"
import artifactPic19 from "../../pics/artifacts/artifactpic19.jpeg"
import artifactPic20 from "../../pics/artifacts/artifactpic20.jpeg"
import artifactPic21 from "../../pics/artifacts/artifactpic21.jpeg"

import artifactColMgmtPol from "../../pdfs/artifacts/Artifact Collection Management Policy.pdf"


const Artifacts = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <h1>Artifacts</h1>
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <p>Please browse through some photos of the artifacts we have at the museum.</p>
                    <br/>
                    <p>Our Artifact Collection Management Policy can be viewed and read <a href={artifactColMgmtPol}>here</a></p>
                    <br/>
                    <p>To view and learn more of our collection be visit: <a href='https://novamuse.ca/Detail/entities/6299'>Our NovaMuse Page</a></p>

                </div>
                <div className='col-2'></div>
            </div>

            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div id="ArtifactCarousel" className="carousel slide shadow-lg" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={artifactPic1} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic2} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic3} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic4} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic5} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic6} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic7} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic8} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic9} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic10} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic11} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic12} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic13} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic14} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic15} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic16} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic17} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic18} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic19} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic20} className="w-auto" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={artifactPic21} className="w-auto" alt="..." />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#ArtifactCarousel" data-bs-slide="prev" data-bs-pause="hover" data-bs-touch="true">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#ArtifactCarousel" data-bs-slide="next" data-bs-pause="hover" data-bs-touch="true">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
}

export default Artifacts;