import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";
import logo from '../Header/Logo.png';
import fakeData from '../fakeData';
import './TravelTo.css'

const TravelTo = () => {
    const { locationKey } = useParams()
    const fetchName = fakeData.find(ln => ln.key === locationKey)
    const { placeName, details } = fetchName;
    return (
        <div className="mainHomeBody">
            <div className="blackTransparent">
                {/* to show navbar, on assignment it showed two navbar with different color...  */}
                <div>
                    <div className="mainBody d-flex justify-content-center">
                        <img className="logo" src={logo} alt="logo" />
                        <div className="navSignUp col-7">
                            <div className="searchBox">
                                <div class="form-inline">

                                    <i class="fas fa-search" aria-hidden="true"><FontAwesomeIcon icon={faSearch} /></i>
                                    <input className="form-control" type="text" placeholder="Search your destination"
                                        aria-label="Search" />
                                </div>
                                <nav>
                                    <Link className="navlink" to="../home">Home</Link>
                                    <Link className="navlink" to="../destination">Destination</Link>
                                    <Link className="navlink" to="../blog">Blog</Link>
                                    <Link className="navlink" to="../contact">Contact</Link>
                                </nav>
                                <Link to="../login"><button>Log In</button></Link>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="fromTo row">
                    <div className="col-3">
                        <h1>{placeName}</h1>
                        <p>{details}</p>
                    </div>
                    <form className="bookingBox">
                        <div className="form-group">
                        <label>Origin</label>
                            <input type="text" className="travelForm form-control" defaultValue="Dhaka" />
                        <br/>
                            <label>Destination</label>
                            <input type="text" className="travelForm form-control" value={placeName} />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TravelTo;