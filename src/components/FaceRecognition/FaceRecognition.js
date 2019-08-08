import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id ='inputimage' src={props.imageUrl} alt='' width='50%' height='50%' />
                <div className='bounding-box' style={{top:props.box.topRow, left:props.box.leftCol, bottom:props.box.bottomRow,right:props.box.rightCol}}>
                </div>     
            </div>           
        </div>    
    );
}

export default FaceRecognition;