import React from 'react';

class Article extends React.Component {
    render() {
        return (
            <article className="col-block popular__post">
                <a href={this.props.thumbLink} className="popular__thumb">
                    <img src={this.props.thumbImageSrc} alt="" />
                </a>
                <h5><a href={this.props.thumbLink}></a>{this.props.title}</h5>
                <section className="popular__meta">
                    <span className="popular__author"><span>By </span> <a href="#0">{this.props.author}</a></span>
                    <span className="popular__date"><span>on </span> <time dateTime={this.props.date}>{this.props.date}</time></span>
                </section>
            </article>

        );
    }
}

export default Article;