import React, { Component } from 'react';

class Article extends React.Component {
  render() {
    let thumb = null;
    let text = null;
    switch (this.props.articleType) {
      case "format-standard":
      case "format-video": {
        thumb = (
          <div className={`entry__thumb ${this.props.thumbClassName}`}>
            <a href={this.props.thumbHref} className={this.props.thumbHrefClassName}>
              <img src={this.props.thumbImageSrc1} srcSet={`${this.props.thumbImageSrc1} 1x, ${this.props.thumbImageSrc2} 2x`} alt="" />
            </a>
          </div>
        );
        text = (
          <div className="entry__text">
            <div className="entry__header">
              <div className="entry__date">
                <a href="single-video.html">{this.props.textDate}</a>
              </div>
              <h1 className="entry__title"><a href={this.props.thumbHref}>{this.props.textTitle}</a></h1>
            </div>
            <div className="entry__excerpt">
              <p>{this.props.textExcerpt}</p>
            </div>
            <div className="entry__meta">
              <span className="entry__meta-links">
                {this.props.metaLinks.map(link => (
                  <a href="category.html">{link}</a>
                ))}
              </span>
            </div>
          </div>
        );
        break;
      }
      case "format-quote": {
        thumb = (
          <div className={`entry__thumb ${this.props.thumbClassName}`}>
            <blockquote>
              <p>{this.props.quoteContent}</p>
              <cite>{this.props.quoteCite}</cite>
            </blockquote>
          </div>
        );
        break;
      }
      case "format-gallery": {
        thumb = (
          <div className={`entry__thumb ${this.props.thumbClassName}`}>
            <div className="slider__slides">
              {
                this.props.sliderImages.map((item, index) => (
                  <div key={index} className="slider__slide">
                    {
                      <img src={item[400]} srcSet={`${item[400]} 1x, ${item[800]} 2x`} alt="" />
                    }
                  </div>
                ))
              }
            </div>
          </div >
        );
        text = (
          <div className="entry__text">
            <div className="entry__header">
              <div className="entry__date">
                <a href="single-video.html">{this.props.textDate}</a>
              </div>
              <h1 className="entry__title"><a href={this.props.thumbHref}>{this.props.textTitle}</a></h1>
            </div>
            <div className="entry__excerpt">
              <p>{this.props.textExcerpt}</p>
            </div>
            <div className="entry__meta">
              <span className="entry__meta-links">
                {this.props.metaLinks.map(link => (
                  <a href="category.html">{link}</a>
                ))}
              </span>
            </div>
          </div>
        );
        break;
      }
    }
    return (
      <article className={`masonry__brick entry ${this.props.articleType}`} data-aos="fade-up">
        {thumb}
        {text}
      </article>
    );
  }
}

export default Article;