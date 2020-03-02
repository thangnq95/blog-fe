import React, { Component } from 'react';

import guitarman  from '../../../assets/images/thumbs/featured/featured-guitarman.jpg';
import watch  from '../../../assets/images/thumbs/featured/featured-watch.jpg';
import beetle  from '../../../assets/images/thumbs/featured/featured-beetle.jpg';
import user03  from '../../../assets/images/avatars/user-03.jpg';

class PageHeaderContent extends Component {

    render() {
        return (
            <div className="pageheader-content row">
                <div className="col-full">
                    <div className="featured">
                        <div className="featured__column featured__column--big">
                            <div className="entry" style={{ backgroundImage: `url(${guitarman})`}}>
                                <div className="entry__content">
                                    <span className="entry__category"><a href="#0">Music</a></span>
                                    <h1><a href="#0" >What Your Music Preference Says About You and Your Personality.</a></h1>
                                    <div className="entry__info">
                                        <a href="#0" className="entry__profile-pic">
                                            <img className="avatar" src={user03} alt="" />
                                        </a>
                                        <ul className="entry__meta">
                                            <li><a href="#0">John Doe</a></li>
                                            <li>December 29, 2017</li>
                                        </ul>
                                    </div>
                                </div> {/* end entry__content */}
                            </div> {/* end entry */}
                        </div> {/* end featured__big */}
                        <div className="featured__column featured__column--small">
                            <div className="entry" style={{ backgroundImage: `url(${watch})`}}>
                                <div className="entry__content">
                                    <span className="entry__category"><a href="#0">Management</a></span>
                                    <h1><a href="#0" >The Pomodoro Technique Really Works.</a></h1>
                                    <div className="entry__info">
                                        <a href="#0" className="entry__profile-pic">
                                            <img className="avatar" src="images/avatars/user-03.jpg" alt="" />
                                        </a>
                                        <ul className="entry__meta">
                                            <li><a href="#0">John Doe</a></li>
                                            <li>December 27, 2017</li>
                                        </ul>
                                    </div>
                                </div> {/* end entry__content */}
                            </div> {/* end entry */}
                            <div className="entry" style={{ backgroundImage: `url(${beetle})`}}>
                                <div className="entry__content">
                                    <span className="entry__category"><a href="#0">LifeStyle</a></span>
                                    <h1><a href="#0" >Throwback To The Good Old Days.</a></h1>
                                    <div className="entry__info">
                                        <a href="#0" className="entry__profile-pic">
                                            <img className="avatar" src="images/avatars/user-03.jpg" alt="" />
                                        </a>
                                        <ul className="entry__meta">
                                            <li><a href="#0">John Doe</a></li>
                                            <li>December 21, 2017</li>
                                        </ul>
                                    </div>
                                </div> {/* end entry__content */}
                            </div> {/* end entry */}
                        </div> {/* end featured__small */}
                    </div> {/* end featured */}
                </div> {/* end col-full */}
            </div>
        );
    }
}

export default PageHeaderContent;