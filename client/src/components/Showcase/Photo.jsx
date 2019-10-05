import React from 'react';

const Photo = ({
  imgUrl, text,
}) => (
  <>
    <div className="showcase-photo-box">
      <a href="https://www.yelp.com">
        <img
          alt="pictures from restaurant"
          className="photo-box-img"
          height="250"
          src={imgUrl}
          width="250"
        />
      </a>
    </div>
    <div className="photo-box-memo">
      <div className="media-block photo-box-memo_caption">
        <div className="media-avatar avatar">
          <div className="photo-box pb-30s">
            <a href="https://www.yelp.com">
              <img
                alt="John"
                className="photo-box-img"
                height="30"
                src="http://pbs.twimg.com/profile_images/1099856449918943232/hKv3Fddh.jpg"
                width="30"
              />
            </a>
          </div>
        </div>
        <div className="media-story">
          <span className="photo-desc">{text}</span>
          <span className="author">
            {' by '}
            <a className="username" href="https://www.yelp.com">John</a>
          </span>
        </div>
      </div>
    </div>
  </>
);
export default Photo;
