import React, { Component } from 'react';

const text = (props) => {
    return (
        <div className="entry__text">
            <div className="entry__header">
                <div className="entry__date">
                    <a href="single-video.html">December 10, 2017</a>
                </div>
                <h1 className="entry__title"><a href="single-video.html">Key Benefits Of Family Photography.</a></h1>
            </div>
            <div className="entry__excerpt">
                <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
</p>
            </div>
            <div className="entry__meta">
                <span className="entry__meta-links">
                    <a href="category.html">Family</a>
                    <a href="category.html">Photography</a>
                </span>
            </div>
        </div>
    );
}

export default text;