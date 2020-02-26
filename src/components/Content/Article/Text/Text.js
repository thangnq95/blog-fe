import React, { Component } from 'react';

const text = (props) => {
    return (
        <div className="entry__text">
            <div className="entry__header">
                <div className="entry__date">
                    <a href="single-video.html">{props.date}</a>
                </div>
                <h1 className="entry__title"><a href="single-video.html">{props.date}</a></h1>
            </div>
            <div className="entry__excerpt">
                <p>{props.excerpt}</p>
            </div>
            <div className="entry__meta">
                <span className="entry__meta-links">
                    {Array(props.metaLinks).forEach(link => {
                        <a href="category.html">{link}</a>
                    })}
                </span>
            </div>
        </div>
    );
}

export default text;