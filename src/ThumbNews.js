import React, {Fragment} from 'react';

const ThumbNews = ({url = '', text = ''}) => {
  return(
    <Fragment>
      <div>
        <img src={url} />
        <span>{text}</span>
      </div>
    </Fragment>
  )
};

export default ThumbNews;