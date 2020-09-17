import React, { useState } from 'react';
import './Home.css'
// import sajek from './Sajek.png';
// import Sreemongol from './Sreemongol.png';
// import sundorbon from './sundorbon.png';
import Header from '../Header/Header';
import LocationName from '../LocationName/LocationName';
import fakeData from '../fakeData';

const Home = () => {


    const [locations, setLocations] = useState(fakeData);


    return (
        <div className="mainHomeBody">
            <div className="blackTransparent">
                <Header></Header>
                <div className='homeBody'>
                    <div className='row'>
                        <div className="descreption col-4  align-self-center">
                            <h1>Cox's Bazar</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi atque repellendus porro maxime, aliquam quisquam cupiditate ducimus labore aspernatur.</p>
                            <button>Booking -&gt;</button>
                        </div>
                        {
                            
                                locations.map(ln => <LocationName
                                    key={ln.key}
                                    location={ln}></LocationName>)
                            
                        }
                        {/* <div className="col-2">
                            <a href="./sajek">
                                <div className="picContainer ">
                                    <img className="image" src={sajek} alt="cox's_bazar"></img>

                                    <p className="imgText">Cox's Bazar</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="./sreemongol">
                                <div className="picContainer ">
                                    <img className="image" src={Sreemongol} alt="sreemongol" />

                                    <p className="imgText">Srimongol</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="./coxsbazar">
                                <div className="picContainer ">
                                    <img className="image" src={sundorbon} alt="sundorbon" />

                                    <p className="imgText">Sajek</p>
                                </div>
                            </a>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;