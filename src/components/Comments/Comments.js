import React, { Component } from 'react';


class Comments extends Component {

    render() {
        return (
            <ol className="commentlist">
                <li className="depth-1 comment">
                    <div className="comment__avatar">
                        <img width={50} height={50} className="avatar" src="images/avatars/user-01.jpg" alt />
                    </div>
                    <div className="comment__content">
                        <div className="comment__info">
                            <cite>Itachi Uchiha</cite>
                            <div className="comment__meta">
                                <time className="comment__time">Dec 16, 2017 @ 23:05</time>
                                <a className="reply" href="#0">Reply</a>
                            </div>
                        </div>
                        <div className="comment__text">
                            <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
               facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                        </div>
                    </div>
                </li>
                <li className="thread-alt depth-1 comment">
                    <div className="comment__avatar">
                        <img width={50} height={50} className="avatar" src="images/avatars/user-04.jpg" alt />
                    </div>
                    <div className="comment__content">
                        <div className="comment__info">
                            <cite>John Doe</cite>
                            <div className="comment__meta">
                                <time className="comment__time">Dec 16, 2017 @ 24:05</time>
                                <a className="reply" href="#0">Reply</a>
                            </div>
                        </div>
                        <div className="comment__text">
                            <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                              urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
               tantas semper delicatissimi.</p>
                        </div>
                    </div>
                    <ul className="children">
                        <li className="depth-2 comment">
                            <div className="comment__avatar">
                                <img width={50} height={50} className="avatar" src="images/avatars/user-03.jpg" alt />
                            </div>
                            <div className="comment__content">
                                <div className="comment__info">
                                    <cite>Kakashi Hatake</cite>
                                    <div className="comment__meta">
                                        <time className="comment__time">Dec 16, 2017 @ 25:05</time>
                                        <a className="reply" href="#0">Reply</a>
                                    </div>
                                </div>
                                <div className="comment__text">
                                    <p>Duis sed odio sit amet nibh vulputate
                                      cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                   cursus a sit amet mauris</p>
                                </div>
                            </div>
                            <ul className="children">
                                <li className="depth-3 comment">
                                    <div className="comment__avatar">
                                        <img width={50} height={50} className="avatar" src="images/avatars/user-04.jpg" alt />
                                    </div>
                                    <div className="comment__content">
                                        <div className="comment__info">
                                            <cite>John Doe</cite>
                                            <div className="comment__meta">
                                                <time className="comment__time">Dec 16, 2017 @ 25:15</time>
                                                <a className="reply" href="#0">Reply</a>
                                            </div>
                                        </div>
                                        <div className="comment__text">
                                            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                       etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="depth-1 comment">
                    <div className="comment__avatar">
                        <img width={50} height={50} className="avatar" src="images/avatars/user-02.jpg" alt />
                    </div>
                    <div className="comment__content">
                        <div className="comment__info">
                            <cite>Shikamaru Nara</cite>
                            <div className="comment__meta">
                                <time className="comment-time">Dec 16, 2017 @ 25:15</time>
                                <a className="reply" href="#">Reply</a>
                            </div>
                        </div>
                        <div className="comment__text">
                            <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                        </div>
                    </div>
                </li>
            </ol>

        );
    }
}

export default Comments;