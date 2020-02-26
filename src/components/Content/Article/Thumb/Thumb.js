import React, { Component } from 'react';

const thumb = (props) => {
    return (
        <div className={`entry__thumb ${props.className}`}>
            <a href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0" data-lity>
                <img src="images/thumbs/masonry/shutterbug-400.jpg" srcSet="images/thumbs/masonry/shutterbug-400.jpg 1x, images/thumbs/masonry/shutterbug-800.jpg 2x" alt />
            </a>
        </div>
    );
}

export default thumb;