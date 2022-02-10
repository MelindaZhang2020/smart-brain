import React from 'react';
import 'tachyons';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from'./brain.png'
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
                <div className="tilt" style={{ height: '100px', width: '100px' }}>
                    <h1><img style={{paddingTop:'15px'}}alt='brain' src={brain}/></h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;