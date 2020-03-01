import React, { Component } from 'react';

import Article from '../Article/Article';

import lamp400 from '../../../assets/images/thumbs/masonry/lamp-400.jpg';
import lamp800 from '../../../assets/images/thumbs/masonry/lamp-400.jpg';
import shutterbug400 from '../../../assets/images/thumbs/masonry/shutterbug-400.jpg';
import shutterbug800 from '../../../assets/images/thumbs/masonry/shutterbug-800.jpg';
import gallery1400 from '../../../assets/images/thumbs/masonry/gallery/gallery-1-400.jpg';
import gallery1800 from '../../../assets/images/thumbs/masonry/gallery/gallery-1-800.jpg';
import gallery2400 from '../../../assets/images/thumbs/masonry/gallery/gallery-2-400.jpg';
import gallery2800 from '../../../assets/images/thumbs/masonry/gallery/gallery-2-800.jpg';
import gallery3400 from '../../../assets/images/thumbs/masonry/gallery/gallery-3-400.jpg';
import gallery3800 from '../../../assets/images/thumbs/masonry/gallery/gallery-3-800.jpg';

class Content extends React.Component {
    render() {
        return (
            <section className="s-content">
                <div className="row masonry-wrap">
                    <div className="masonry">
                        <div className="grid-sizer" />
                        <Article
                            articleType="format-standard"
                            thumbClassName=""
                            thumbHref="single-standard.html"
                            thumbHrefClassName="entry__thumb-link"
                            thumbImageSrc1={lamp400}
                            thumbImageSrc2={lamp800}
                            textDate="December 15, 2017"
                            textTitle="Just a Standard Format Post."
                            textExcerpt="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."
                            metaLinks={["Design", "Photography"]}
                        />
                        <Article
                            articleType="format-quote"
                            thumbClassName=""
                            quoteContent="Good design is making something intelligible and memorable. Great design is making something memorable and meaningful."
                            quoteCite="Dieter Rams"
                        />
                        <Article
                            articleType="format-video"
                            thumbClassName="video-image"
                            thumbHref="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0"
                            thumbHrefClassName="entry__thumb-link"
                            thumbImageSrc1={shutterbug400}
                            thumbImageSrc2={shutterbug800}
                            textDate="December 10, 2017"
                            textTitle="Key Benefits Of Family Photography."
                            textExcerpt="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."
                            metaLinks={["Family", "Photography"]}
                        />
                       
                    </div> {/* end masonry */}
                </div> {/* end masonry-wrap */}
                <div className="row">
                    <div className="col-full">
                        <nav className="pgn">
                            <ul>
                                <li><a className="pgn__prev" href="#0">Prev</a></li>
                                <li><a className="pgn__num" href="#0">1</a></li>
                                <li><span className="pgn__num current">2</span></li>
                                <li><a className="pgn__num" href="#0">3</a></li>
                                <li><a className="pgn__num" href="#0">4</a></li>
                                <li><a className="pgn__num" href="#0">5</a></li>
                                <li><span className="pgn__num dots">…</span></li>
                                <li><a className="pgn__num" href="#0">8</a></li>
                                <li><a className="pgn__next" href="#0">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;