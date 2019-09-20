import React, { Component } from 'react';

class About extends React.Component {
    render() {
        return (
            <section className="s-content s-content--narrow">
  <div className="row">
    <div className="s-content__header col-full">
      <h1 className="s-content__header-title">
        Learn More About Us.
      </h1>
    </div> {/* end s-content__header */}
    <div className="s-content__media col-full">
      <div className="s-content__post-thumb">
        <img src="images/thumbs/about/about-1000.jpg" srcSet="images/thumbs/about/about-2000.jpg 2000w, 
                           images/thumbs/about/about-1000.jpg 1000w, 
                           images/thumbs/about/about-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt />
      </div>
    </div> {/* end s-content__media */}
    <div className="col-full s-content__main">
      <p className="lead">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>
      <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
      </p>
      <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco.
      </p>
      <div className="row block-1-2 block-tab-full">
        <div className="col-block">
          <h3 className="quarter-top-margin">Who We Are.</h3>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>
        <div className="col-block">
          <h3 className="quarter-top-margin">Our Mission.</h3>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>
        <div className="col-block">
          <h3 className="quarter-top-margin">Our Vision.</h3>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>
        <div className="col-block">
          <h3 className="quarter-top-margin">Our Values.</h3>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>
      </div>
    </div> {/* end s-content__main */}
  </div> {/* end row */}
</section>

            );
    }
}

export default About;