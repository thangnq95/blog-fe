import React, { Component } from 'react';

import Text from './Text/Text';
import Thumb from './Thumb/Thumb';

class Article extends React.Component {
  render() {
    return (
      <article className="masonry__brick entry format-video" data-aos="fade-up">
        <Thumb className="video-image" ></Thumb>
        <Text></Text>
      </article>

    );
  }
}

export default Article;