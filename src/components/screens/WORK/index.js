import React from 'react';
import './style.scss';
import Thumbnail from './thumbnail';
import WorkItems from './work_items';

const Work = (props) => {
  return (
    <div id={props.mobile ? 'workM' : 'work'}>
      <div id="workText">

        <h1>Sojung (she/her)</h1>

        <div id="stars">
          <span id="--i1">☆</span>
          <span id="--i2">.</span>
          <span id="--i3">。</span>
          <span id="--i4">.</span>
          <span id="--i5">:</span>
          <span id="--i6">*</span>
          <span id="--i7">・</span>
          <span id="--i8">°</span>
          <span id="--i9">☆</span>
          <span id="--i10">.</span>
          <span id="--i11">。</span>
          <span id="--i12">.</span>
          <span id="--i13">:</span>
          <span id="--i14">*</span>
          <span id="--i15">・</span>
          <span id="--i16">°</span>
          <span id="--i17">☆</span>
          <span id="--i18">.</span>
          <span id="--i19">。</span>
          <span id="--i20">.</span>
          <span id="--i21">:</span>
          <span id="--i22">*</span>
          <span id="--i23">・</span>
          <span id="--i24">°</span>
          <span id="--i25">☆</span>
          <span id="--i26">.</span>
          <span id="--i27">。</span>
          <span id="--i28">.</span>
          <span id="--i29">:</span>
          <span id="--i30">*</span>
          <span id="--i31">・</span>
          <span id="--i32">°</span>
          <span id="--i33">☆</span>
        </div>

        <p id="description">
          Hi, I’m an <b>experience designer</b> studying <b>design and decision science @ CMU.</b> I’m passionate about...
        </p>

        <div id="starList">
          <div>
            <p className="star">☆</p>
            <p>storytelling for immersion</p>
          </div>
          <div>
            <p className="star">☆</p>
            <p>human behavior, social relationships, and culture</p>
          </div>
          <div className="star">
            <p className="star">☆</p>
            <p>inclusive and accessible designs</p>
          </div>
        </div>

        <p>Previously, a Graphic Design Intern @&nbsp;
          <a
            id="caci"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.caci.com/"
          >CACI International ←
          </a>
        </p>
      </div>

      <div id="thumbnails">
        {WorkItems.map((item) => {
          return (
            <Thumbnail data={item} key={item.name} mobile={props.mobile} />
          );
        })}
      </div>

    </div>
  );
};

export default Work;
