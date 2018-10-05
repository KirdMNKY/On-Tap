import React, {Component} from 'react';
import "../components/OnTap/OnTap.css";

class OnTap extends Component {
    render() {
        return (
            <div> 
                <div className="bg-img">
                    <div className="loadingContent container">
                        {/* <img id= "logo" src={require('../images/OnTapLogo.svg')} /> */}
                        <img id= "circle" src={require('../images/circle.png')} />
                        <div className="text-center same-stuff">
                            <h1 id= "ontapword"> ON TAP </h1>                            
                            <a href="./Home">
                                <img id= "smolbeer" src={require('../images/smolbeer.png')} />
                            </a>
                            <h4 id= "toplay"> click to play! </h4>                        
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default OnTap;