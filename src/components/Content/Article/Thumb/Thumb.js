import React, { Component } from 'react';

import image1  from '../../../../assets/images/thumbs/featured/featured-guitarman.jpg';

const thumb = (props) => {
    return (
        <div className={`entry__thumb ${props.className}`}>
            <a href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0" data-lity>
                <img src={image1} srcSet={`${image1} 1x, images/thumbs/masonry/shutterbug-800.jpg 2x`} alt />
            </a>
        </div>
    );
}

export default thumb;