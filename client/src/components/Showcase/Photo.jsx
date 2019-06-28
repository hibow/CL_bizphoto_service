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
                src="https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg"
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
