import React from 'react';

const MyNewsTitle = (props) => {
  return(
    <div>
      <div >뉴스 스탠드 > 전체 언론사</div>
      <div>MY 뉴스</div>
      <div>
	      <button onClick={props.prevHandler}>←</button>
	      <button onClick={props.nextHandler}>→</button>
      </div>
    </div>
  )
};

export default MyNewsTitle;