import React, {Fragment} from 'react';

const NewsName = ({newsData, clickHandler, selectedItemId}) => {
  const titles = newsData.map(
    v => <li key={v.id}
               onClick={() => clickHandler(v.id)}
               style={selectedItemId === v.id ? {color: '#03cf5d'} : {}}>
          {v.company}
        </li>
  );
  return (
    <Fragment>
      <ul>
        {titles}
      </ul>
    </Fragment>
  );
};

export default NewsName;