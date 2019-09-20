import React, { Component } from 'react';

class StyleGuide extends React.Component {
    render() {
        return (
          <section id="styles" className="s-styles">
  <div className="row narrow section-intro add-bottom text-center">
    <div className="col-twelve tab-full">
      <h1>Style Guide.</h1>
      <p className="lead">Lorem ipsum Officia elit ad tempor dolore est ex incididunt incididunt occaecat culpa deserunt sunt labore in cillum ullamco magna in Excepteur consequat in reprehenderit proident mollit incididunt officia commodo.
        Duis ea officia sed dolor pariatur enim dolore dolore quis incididunt nulla exercitation commodo veniam et ea incididunt.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-six tab-full">
      <h3>Paragraph and Image</h3>
      <p>
        <a href="#"><img width={120} height={120} className="pull-left" alt="sample-image" src="images/sample-image.jpg" /></a>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum.Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque posuere nunc justo tempus leo. </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentumodio, ac blandit ante orci ut diam.	
      </p>
      <p>A <a href="#">link</a>,
        <abbr title="this really isn't a very good description">abbrebation</abbr>,
        <strong>strong text</strong>,
        <em>em text</em>,
        <del>deleted text</del>, and
        <mark>this is a mark text.</mark>
        <code>.code</code>
      </p>
    </div>
    <div className="col-six tab-full">
      <h3>Drop Caps</h3>
      <p className="drop-cap">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu	posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque.
      </p>
      <h3>Small Print</h3>
      <p>Buy one widget, get one free!
        <small>(While supplies last. Offer expires on the vernal equinox. Not valid in Ohio.)</small>
      </p>
    </div>
  </div> {/* end row */}
  <div className="row">
    <div className="col-six tab-full">
      <h3>Pull Quotes</h3>
      <aside className="pull-quote">
        <blockquote>
          <p>It is a paradisematic country, in which roasted parts of
            sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a small line of blind text by the name
            of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        </blockquote>
      </aside>
    </div>
    <div className="col-six tab-full">
      <h3>Block Quotes</h3>
      <blockquote cite="http://where-i-got-my-info-from.com">
        <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
          to do what you believe is great work. And the only way to do great work is to love what you do.
          If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
        </p>
        <cite>
          <a href="#">Steve Jobs</a>
        </cite>
      </blockquote>
      <blockquote>
        <p>Good design is as little design as possible.</p>
        <cite>Dieter Rams</cite>
      </blockquote>
    </div>
  </div> {/* end row */}
  <div className="row half-bottom">
    <div className="col-six tab-full">
      <h3>Example Lists</h3>
      <ol>
        <li>Here is an example</li>
        <li>of an ordered list.</li>
        <li>A parent list item.
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </li>
        <li>A list item.</li>
      </ol>
      <ul className="disc">
        <li>Here is an example</li>
        <li>of an unordered list.</li>
      </ul>
      <h3>Definition Lists</h3>
      <h5>a) Multi-line Definitions (default) </h5>
      <dl>
        <dt><strong>This is a term</strong></dt>
        <dd>this is the definition of that term, which both live in a <code>dl</code>.</dd>
        <dt><strong>Another Term</strong></dt>
        <dd>And it gets a definition too, which is this line</dd>
        <dd>This is a 2<sup>nd</sup> definition for a single term. A <code>dt</code> may be followed by multiple <code>dd</code>s.</dd>
      </dl>
    </div>
    <div className="col-six tab-full">
      <h3>Buttons</h3>
      <p>
        <a className="btn btn--primary full-width" href="#0">Primary Button</a>
        <a className="btn full-width" href="#0">Default Button</a>
        <a className="btn btn--stroke full-width" href="#0">Stroke Button</a>
      </p>
      <h3>Code Block</h3>
      <pre><code>{"\n"}{"      "}code {"{"}{"\n"}{"          "}font-size: 1.4rem;{"\n"}{"          "}margin: 0 .2rem;{"\n"}{"          "}padding: .2rem .6rem;{"\n"}{"          "}white-space: nowrap;{"\n"}{"          "}background: #F1F1F1;{"\n"}{"          "}border: 1px solid #E1E1E1;{"\t"}{"\n"}{"          "}border-radius: 3px;{"\n"}{"      "}{"}"}{"\n"}{"  "}</code></pre>
    </div>
  </div> {/* end row */}
  <div className="row half-bottom">
    <div className="col-six tab-full">
      <h1>H1 Heading</h1>
      <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
        Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>
      <h2>H2 Heading</h2>
      <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
        Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>
      <h3>H3 Heading</h3>
      <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
        Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>
    </div>
    <div className="col-six tab-full">
      <h4>H4 Heading</h4>
      <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
        Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>
      <h5>H5 Heading</h5>
      <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
        Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>
      <h6>H6 Heading</h6>
      <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
        Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>
    </div>
  </div>
  <div className="row half-bottom">
    <div className="col-twelve">
      <h3>Stats Tabs</h3>
      <ul className="stats-tabs">
        <li><a href="#">1,234 <em>Sasuke</em></a></li>
        <li><a href="#">567 <em>Hinata</em></a></li>
        <li><a href="#">23,456 <em>Naruto</em></a></li>
        <li><a href="#">3,456 <em>Kiba</em></a></li>
        <li><a href="#">456 <em>Shikamaru</em></a></li>
        <li><a href="#">26 <em>Sakura</em></a></li>
      </ul>
    </div>
  </div> {/* end row */}
  <div className="row half-bottom">
    <div className="col-six tab-full">
      <h3 className="add-bottom">Responsive Image</h3>
      <p><img src="images/wheel-500.jpg" srcSet="images/wheel-1000.jpg 1000w, 
                images/wheel-500.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px" alt /></p>
    </div>
    <div className="col-six tab-full">
      <h3 className="add-bottom">Responsive video</h3>
      <div className="video-container">
        <iframe src="https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39" width={500} height={281} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen /> 
      </div>
    </div>
  </div> {/* end row */}
  <div className="row add-bottom">
    <div className="col-twelve">
      <h3>Tables</h3>
      <p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.</p>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Naruto Uzumaki</td>
              <td>16</td>
              <td>Male</td>
              <td>Konoha</td>
            </tr>
            <tr>
              <td>Sakura Haruno</td>
              <td>16</td>
              <td>Female</td>
              <td>Konoha</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div> {/* end row */}
  <div className="row">
    <div className="col-six tab-full">
      <h3 className="add-bottom">Form Styles</h3>
      <form>
        <div>
          <label htmlFor="sampleInput">Your email</label>
          <input className="full-width" type="email" placeholder="test@mailbox.com" id="sampleInput" />
        </div>
        <div>
          <label htmlFor="sampleRecipientInput">Reason for contacting</label>
          <div className="cl-custom-select">
            <select className="full-width" id="sampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Report</option>
              <option value="Option 3">Others</option>
            </select>
          </div>
        </div>
        <label htmlFor="exampleMessage">Message</label>
        <textarea className="full-width" placeholder="Your message" id="exampleMessage" defaultValue={""} />
        <label className="add-bottom">
          <input type="checkbox" />
          <span className="label-text">Send a copy to yourself</span>
        </label>
        <input className="btn--primary full-width" type="submit" defaultValue="Submit" />
      </form>
    </div>
    <div className="col-six tab-full">
      <h3 className="add-bottom">Alert Boxes</h3>
      <div className="alert-box alert-box--error hideit">
        <p>Error Message. Your Message Goes Here.</p>
        <i className="fa fa-times alert-box__close" />
      </div> {/* end error */}
      <div className="alert-box alert-box--success hideit">
        <p>Success Message. Your Message Goes Here.</p>
        <i className="fa fa-times alert-box__close" />
      </div> {/* end success */}
      <div className="alert-box alert-box--info hideit">
        <p>Info Message. Your Message Goes Here.</p>
        <i className="fa fa-times alert-box__close" />
      </div> {/* end info */}
      <div className="alert-box alert-box--notice hideit">
        <p>Notice Message. Your Message Goes Here.</p>
        <i className="fa fa-times alert-box__close" />
      </div> {/* end notice */}
    </div>
  </div> {/* end row */}
</section>


            );
    }
}

export default StyleGuide;