import React, { Component } from 'react';

import Text from './Text/Text';
import Thumb from './Thumb/Thumb';

class Article extends React.Component {
  render() {
    return (
      <article className={`masonry__brick entry ${this.props.articleType}`} data-aos="fade-up">
        <Thumb className="video-image" ></Thumb>
        <Text date="December 10, 20171"
          title="Key Benefits Of Family Photography."
          excerpt="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."
          metaLinks={["Family", "Photography"]} />
      </article>

    );
  }
}

export default Article;