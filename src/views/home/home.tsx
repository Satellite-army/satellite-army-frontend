import React from "react";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

import {Icon} from "../../assets";
//import Lottie from 'react-lottie';
import planet1 from '../../assets/animation/planet1.json'
import planet2 from '../../assets/animation/planet2.json'
import planet3 from '../../assets/animation/planet3.json'
import extendedLogo from '../../assets/scritta.png'

    // const renderAnimation = (animationData: any) => {

    //     console.log(animationData)
    //     const defaultOptions = {
    //     loop: false,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    //     };

    //     return (
    //         <Lottie options={defaultOptions}
    //                 height={150}
    //                 width={150}
    //                 isStopped={false}
    //                 isPaused={false}/>
    //     )
    // }

    export const Home = () => {
    

        return (

            <div className="home-background">
                <img className="header-icon" src={Icon}/>
                <div className="body">
                    <div className="title" ><img src={extendedLogo} width="500" height="110"/></div>
                    <div className="subtitle">The most complete tracking tool for DeFi, native to Solana</div>

                    <div className="features">
                    <div className="feature feature-top">
                        {/* {renderAnimation(planet1)} */}
                        <div className="circle">
                        <div className="feature-title">Yield</div>
                        </div>
                        <div className="feature-description">Track your LP farming tokens</div>
                    </div>
                    <div className="feature">
                        {/* {renderAnimation(planet2)} */}
                        <div className="circle">
                        <div className="feature-title">Impermanent Loss</div>
                        </div>
                        <div className="feature-description">Easily access IL value of your pools</div>
                    </div>
                    <div className="feature feature-top">
                        {/* {renderAnimation(planet3)} */}
                        <div className="circle">
                        <div className="feature-title">Alerts</div>
                        </div>
                        <div className="feature-description">Setup alerts on price, IL and security updates</div>
                    </div>
                    </div>
                    <div className="buttons">
                        <Link to="/app">
                            <Button label="Connect to the galaxy" className="p-button-raised " />
                        </Link>
                    <a href="https://drive.google.com/file/d/1nrwCG2CfgJbdm0TTinsqNNpQT4WuXbXC/view" target="_blank">
                        <Button label="Not sure? take a look to our demo" className="p-button-raised " />
                    </a>
                    </div>
                </div>

            </div>

      
      );
    

}



