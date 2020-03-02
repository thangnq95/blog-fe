import React from 'react';

import ExtraArticle from './Article/Article';

import wheel150 from '../../assets/images/thumbs/small/wheel-150.jpg';

class Extra extends React.Component {
    render() {
        let arrayArticle = [0, 1, 2, 3, 4];
        let arrayTag = ["Salad", "Recipe", "Places", "Tips", "Friends", "Travel", "Exercise", "Reading", "Running", "Reading", "Self-Help", "Reading"];
        return (
            <section className="s-extra">
                <div className="row top">
                    <div className="col-eight md-six tab-full popular">
                        <h3>Popular Posts</h3>
                        <div className="block-1-2 block-m-full popular__posts">
                            {
                                arrayArticle.map((item, index) => (
                                    <ExtraArticle
                                        key={index}
                                        thumbLink="#0"
                                        thumbImageSrc={wheel150}
                                        title="Visiting Theme Parks Improves Your Health."
                                        author=" John Doe"
                                        date=" Dec 19, 2017" />
                                ))
                            }
                        </div> {/* end popular_posts */}
                    </div> {/* end popular */}
                    <div className="col-four md-six tab-full about">
                        <h3>About Philosophy</h3>
                        <p>
                            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
      </p>
                        <ul className="about__social">
                            <li>
                                <a href="#0"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            </li>
                            <li>
                                <a href="#0"><i className="fa fa-twitter" aria-hidden="true" /></a>
                            </li>
                            <li>
                                <a href="#0"><i className="fa fa-instagram" aria-hidden="true" /></a>
                            </li>
                            <li>
                                <a href="#0"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                            </li>
                        </ul> {/* end header__social */}
                    </div> {/* end about */}
                </div> {/* end row */}
                <div className="row bottom tags-wrap">
                    <div className="col-full tags">
                        <h3>Tags</h3>
                        <div className="tagcloud">
                            {
                                arrayTag.map((item, i) => (
                                    <a key={i} href="#0">{item}</a>
                                ))
                            }
                        </div> {/* end tagcloud */}
                    </div> {/* end tags */}
                </div> {/* end tags-wrap */}
            </section>

        );
    }
}

export default Extra;