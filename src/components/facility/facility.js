import React from "react";
import fultzimg from '../../pics/facilities/Fultz House.jpeg';
import millstoneimg from '../../pics/facilities/Mill Stone.jpeg';
import blacksmithimg from '../../pics/facilities/Blacksmith Shop.jpeg';
import carriageimg from '../../pics/facilities/Carriage House.jpeg';
import pathimg from '../../pics/facilities/Charles Fenerty Natural Path.jpeg';
import gazeboimg from '../../pics/facilities/Gazebo.jpeg';
import cooperageimg from '../../pics/facilities/Grace Cooperage.jpeg';
import lowerimg from '../../pics/facilities/Lower Lawn.jpeg';
import picnicimg from '../../pics/facilities/Picnic Table.jpeg';
import programimg from '../../pics/facilities/Program Centre.jpeg';
import outhouseimg from '../../pics/facilities/Replica Outhouse.jpeg';
import upperimg from '../../pics/facilities/Upper Grounds.jpeg';
import wellimg from '../../pics/facilities/Wishing Well.jpeg';
import storageimg from '../../pics/facilities/17.jpeg';

const Facility = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Facilities</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={fultzimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">FULTZ HOUSE</h5>
                                <p className="card-text">Historic house built by Bennett and Mary Fultz in the 1860’s, at the intersection of the two great roads, the Windsor Road and Cobequid Road.   The original house was 20 x 20.  As the family grew, additions were added on.  Bennett and Mary ran a post office from the kitchen window. See <a href='#'>About the Museum Page</a> for full story on the house.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">MILL STONE</h5>
                                <p className="card-text">A favorite background for weddings and photos, with beautiful flowers and memorial stones around it. The mill stone is over 200 years old and came from a mill on the Sackville River. </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={millstoneimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={blacksmithimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">BLACKSMITH SHOP</h5>
                                <p className="card-text">The design and construction of the Fultz House Museum Blacksmith Shop was based on old-fashioned building methods. The wood used to construct the blacksmith shop came from an old barn in Beaver Bank (erected in the 1800’s). The building was modeled after A.J. Smeltzer’s shop, a former Sackville blacksmith. The bricks for the firebox came from the Anglican Church in Stewiacke. The blacksmith shop was unveiled in 1995.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">CARRIAGE HOUSE</h5>
                                <p className="card-text">The Fultz House Museum Carriage House was built at the top of the property, near where Bennett Fultz would have had his carriage repair shop. The Fultz House Museum Carriage House was officially opened on July 1, 2017.<br/>
                                The Carriage House allows us to tell the story of the work Bennett Fultz did as a wheelwright, displaying tools, and wheels at different stages of the repair process. We also have carriages and a hearse in the carriage house that each have their own story.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={carriageimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={pathimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">CHARLES FENERTY NATURE PATH</h5>
                                <p className="card-text">Visitors can explore the Charles Fenerty Nature Path, which connects to the neighbouring Sackville Heritage Park and the community cenotaph. The path meanders through the wooded area of the property.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">GAZEBO</h5>
                                <p className="card-text">Donated by the Payzant family in memory of Shirley Payzant.  The gazebo is the prime location for weddings on the grounds.  
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={gazeboimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={cooperageimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">GRACE COOPERAGE</h5>
                                <p className="card-text">The W.J. Grace  Cooperage was a working cooperage located in Middle Sackville. Brothers Richard & Earl Grace were Sackville’s last coopers, who retired in 1970. The dismantling of the building and relocation to the Fultz House grounds was done very delicately -broken down board-by- board and each piece numbered in 1987.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">LOWER LAWN</h5>
                                <p className="card-text">The lower lawn has several memorial gardens as well as benches to sit down and relax.  
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={lowerimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={picnicimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">PICNIC TABLE</h5>
                                <p className="card-text">A place to sit down outside the museum, relax, and have lunch.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">PROGRAM CENTRE</h5>
                                <p className="card-text">The building was originally a tourist bureau located on Sackville Drive near where the Sackville Library is today.  The building was moved to the museum and used as a Craft Shop with displays like a historic general store.  Over time the artifact displays were removed, and it was used as a Craft Shop. The building is now going to be used as a program area for groups to do crafts and activities.    
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={programimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={outhouseimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">REPLICA OUTHOUSE</h5>
                                <p className="card-text">An outhouse replica is located next to the W.J. Grace Cooperage and Blacksmith Shop. Families like the Fultzes would have had the outhouse close enough to their home to reach safely at night or during inclement weather, but far enough way to avoid lingering smells entering the home.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">UPPER GROUNDS</h5>
                                <p className="card-text">The upper grounds contain the Futz House, Cooperage, Blacksmith Shop, Carriage House, Ted B. Blackburn Wishing Well, and the mill stone.   There are memorial gardens and benches on these grounds as well.  The upper lawn is where many events are hosted.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={upperimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={wellimg} className="card-img" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">TED B. BLACKBURN WISHING WELL</h5>
                                <p className="card-text">The Ted B. Blackburn Wishing Well outside the back of the house, was named in honour of Ted B. Blackburn. Mr. Blackburn was a local historian, entrepreneur and community advocate. He was a founding member of the Fultz Corner Restoration Society. The wishing well was dedicated in his memory in 1989. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-facility h-100 bg-transparent shadow-lg p-1 my-3">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">#17</h5>
                                <p className="card-text">The building is referred to as #17 because the street number is 17 Sackville Drive.  This building is currently used for storage.  
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={storageimg} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility;