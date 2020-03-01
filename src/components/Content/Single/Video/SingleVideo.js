import React, { Component } from 'react';

import Comments from '../../../Comments/Comments';
import FormAddComment from '../../../Comments/FormAddComment/FormAddComment';

class SingleVideo extends React.Component {
  render() {
    return (
      <section className="s-content s-content--narrow s-content--no-padding-bottom">
        <article className="row format-video">
          <div className="s-content__header col-full">
            <h1 className="s-content__header-title">
              This Is A Video Post Format.
      </h1>
            <ul className="s-content__header-meta">
              <li className="date">December 16, 2017</li>
              <li className="cat">
                In
          <a href="#0">Lifestyle</a>
                <a href="#0">Travel</a>
              </li>
            </ul>
          </div> {/* end s-content__header */}
          <div className="s-content__media col-full">
            <div className="video-container">
              <iframe src="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0" width={640} height={360} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
            </div>
          </div> {/* end s-content__media */}
          <div className="col-full s-content__main">
            <p className="lead">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>
            <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
      </p>
            <p>
              <img src="images/wheel-1000.jpg" srcSet="images/wheel-2000.jpg 2000w, images/wheel-1000.jpg 1000w, images/wheel-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt />
            </p>
            <h2>Large Heading</h2>
            <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>
            <blockquote><p>This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.</p></blockquote>
            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
            <h3>Smaller Heading</h3>
            <p>Dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
      </p><pre><code>{"\n"}{"      "}code {"{"}{"\n"}{"          "}font-size: 1.4rem;{"\n"}{"          "}margin: 0 .2rem;{"\n"}{"          "}padding: .2rem .6rem;{"\n"}{"          "}white-space: nowrap;{"\n"}{"          "}background: #F1F1F1;{"\n"}{"          "}border: 1px solid #E1E1E1;{"\n"}{"          "}border-radius: 3px;{"\n"}{"      "}{"}"}{"\n"}{"  "}</code></pre>
            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
            <ul>
              <li>Donec nulla non metus auctor fringilla.
          <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </li>
              <li>Donec nulla non metus auctor fringilla.</li>
              <li>Donec nulla non metus auctor fringilla.</li>
            </ul>
            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
            <p className="s-content__tags">
              <span>Post Tags</span>
              <span className="s-content__tag-list">
                <a href="#0">orci</a>
                <a href="#0">lectus</a>
                <a href="#0">varius</a>
                <a href="#0">turpis</a>
              </span>
            </p> {/* end s-content__tags */}
            <div className="s-content__author">
              <img src="images/avatars/user-03.jpg" alt />
              <div className="s-content__author-about">
                <h4 className="s-content__author-name">
                  <a href="#0">Jonathan Doe</a>
                </h4>
                <p>Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
                <ul className="s-content__author-social">
                  <li><a href="#0">Facebook</a></li>
                  <li><a href="#0">Twitter</a></li>
                  <li><a href="#0">GooglePlus</a></li>
                  <li><a href="#0">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="s-content__pagenav">
              <div className="s-content__nav">
                <div className="s-content__prev">
                  <a href="#0" rel="prev">
                    <span>Previous Post</span>
                    Tips on Minimalist Design
            </a>
                </div>
                <div className="s-content__next">
                  <a href="#0" rel="next">
                    <span>Next Post</span>
                    Less Is More
            </a>
                </div>
              </div>
            </div> {/* end s-content__pagenav */}
          </div> {/* end s-content__main */}
        </article>
        {/* comments
    ================================================== */}
        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
              <h3 className="h2">5 Comments</h3>
              {/* commentlist */}
              {<Comments />}
              {/* respond
                ================================================== */}
              <div className="respond">
                <h3 className="h2">Add Comment</h3>
                <FormAddComment />
              </div> {/* end respond */}
            </div> {/* end col-full */}
          </div> {/* end row comments */}
        </div> {/* end comments-wrap */}
      </section>



    );
  }
}

export default SingleVideo;