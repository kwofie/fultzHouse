import React from 'react';
import './notablePeople.css';
import pdf01 from '../../pdfs/people/A.J. Smeltzer Profile.pdf';
import pdf02 from '../../pdfs/people/Abraham Gesner Profile.pdf';
import pdf03 from '../../pdfs/people/Agnes ODonnell Kelly Profile.pdf';
import pdf04 from '../../pdfs/people/Burdett Lively Profile.pdf';
import pdf05 from '../../pdfs/people/Emily Payne Profile.pdf';
import pdf06 from '../../pdfs/people/Fultz Family Profile.pdf';
import pdf07 from '../../pdfs/people/George Lawson Profile.pdf';
import pdf08 from '../../pdfs/people/Gertrude Parker Profile.pdf';
import pdf09 from '../../pdfs/people/Harold T. Barrett Profile.pdf';
import pdf010 from '../../pdfs/people/Harry R. Hamilton  Profile.pdf';
import pdf011 from '../../pdfs/people/Leslie Thomas Profile.pdf';
import pdf012 from '../../pdfs/people/Mary Fultz Profile.pdf';
import pdf013 from '../../pdfs/people/Sadie Thomas Profile.pdf';
import pdf014 from '../../pdfs/people/Ted B. Blackburn Profile.pdf';
import pdf015 from '../../pdfs/people/Charles Fenerty  Profile.pdf';
import pic1 from '../../pics/notable-people/Picture1.png';
import pic2 from '../../pics/notable-people/Picture2.png';
import pic3 from '../../pics/notable-people/Picture3.png';
import pic4 from '../../pics/notable-people/Picture4.jpg';
import pic5 from '../../pics/notable-people/Picture5.jpg';
import pic6 from '../../pics/notable-people/Picture6.png';
import pic7 from '../../pics/notable-people/Picture7.png';
import pic8 from '../../pics/notable-people/Picture8.jpg';
import pic9 from '../../pics/notable-people/Picture9.jpg';
import pic10 from '../../pics/notable-people/Picture10.png';
import pic11 from '../../pics/notable-people/Picture11.png';
import pic12 from '../../pics/notable-people/Picture12.jpg';
import pic13 from '../../pics/notable-people/Picture13.png';
import pic14 from '../../pics/notable-people/Picture14.png';
import pic15 from '../../pics/notable-people/Picture15.jpg';

const NotablePeople = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h1>Notable People</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic1} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">A.J. Smeltzer</h5>
                                <p className="card-text">Mr. Smeltzer was an active member of the community outside
                                    business and political circles. He was known for
                                    his decorative ironwork.</p>
                                <a href={pdf01} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic2} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Abraham Gesner</h5>
                                <p className="card-text">It has been said that he was born with a love of geology in his bones. Gesner became the first government geologist in a British colony when appointed Provincial Geologist of New Brunswick in 1838.</p>
                                <a href={pdf02} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic3} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Agnes O'Donnell Kelly</h5>
                                <p className="card-text">Agnes O’Donnell Kelly was an enthusiastic chronicler of local history and a willing teacher of local heritage. Ms. Kelly was a faithful friend to the Fultz House Museum. </p>
                                <a href={pdf03} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic4} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Burdett Lively</h5>
                                <p className="card-text">When World War II began, Beaver Bank’s Burdett Lively volunteered to join the forces, like most Canadians who fought in World War II since conscription was not imposed until the later stages.</p>
                                <a href={pdf04} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic5} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Emily Payne</h5>
                                <p className="card-text">At one point, Emily cared for twenty-five babies in her home. She showed these wee tots love and attention. She embraced them, as if they were her own.</p>
                                <a href={pdf05} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic6} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Fultz Family</h5>
                                <p className="card-text">The Fultz family identified themselves to be farmers, but in actuality they led diverse and interesting lives, being credits to their trades.</p>
                                <a href={pdf06} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic7} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">George Lawson</h5>
                                <p className="card-text">He constructed one of the first known Canadian botanical gardens and became a founding member and president of the Royal Society of Canada.</p>
                                <a href={pdf07} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic8} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gertrude Parker</h5>
                                <p className="card-text">The Halifax Chronicle-Herald once wrote an article on Parker, stating: “Until the dial system was introduced in 1963, Mrs. Gertrude Parker was the telephone operator, the brains, the human component, through which every call in the area had to funnel.</p>
                                <a href={pdf08} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic9} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Harold T. Barrett</h5>
                                <p className="card-text">In 1985, the first junior high school in Beaver Bank was named after Mr. Barrett, known today as Harold T. Barrett Junior High School.</p>
                                <a href={pdf09} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic10} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Harry R. Hamilton</h5>
                                <p className="card-text">Harry was a man of good character and it was said of him by his comrades that he never had a bad thing to say about anyone and no one had a bad thing to say about him.</p>
                                <a href={pdf010} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic11} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Leslie Thomas</h5>
                                <p className="card-text">Leslie Thomas was the type of man who lived his life for his community.</p>
                                <a href={pdf011} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic12} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mary Fultz</h5>
                                <p className="card-text">She connected families with loved ones through the passage of the written word with one stamp at a time.</p>
                                <a href={pdf012} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic13} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sadie Thomas</h5>
                                <p className="card-text">One of Sackville’s most remarkable teachers was born in 1881. Known as Sadie by her friends and loved ones, Sadie lived a remarkable life.</p>
                                <a href={pdf013} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic14} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ted B. Blackburn</h5>
                                <p className="card-text">Blackburn was a man who listened and followed what the public wanted. It has even been said that his store was the K-Mart of the day. </p>
                                <a href={pdf014} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent shadow-lg p-1">
                            <img src={pic15} className="card-img-top notable-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ted B. Blackburn</h5>
                                <p className="card-text">Charles’ curious mindset, and how he liked to ponder and think out problems, and arrive at solutions through his ingenuity and perseverance, is what led him to be an inventor.</p>
                                <a href={pdf015} className="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotablePeople;