import React, {Fragment} from 'react';

const Articles = ({newslist = []}) => {
  const articles = newslist.map((v, i) => <li key={i}>{v}</li>);
  return(
    <Fragment>
      <div>
        {articles}
      </div>
    </Fragment>
  )
};

export default Articles;