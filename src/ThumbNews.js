import React, {Fragment} from 'react';
import styled from 'styled-components';

const ThumbWrap = styled.div`
  width: 220px;
  position: relative;
  display: inline-block;
`;
const ThumbImage = styled.img`
  width: 100%;
`;
const ThumbText = styled.span`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  color: #fff;
  box-sizing: border-box;
  background: rgba(0,0,0,0.4);
`;

const ThumbNews = ({url = '', text = ''}) => {
  return(
    <Fragment>
      <ThumbWrap>
        <ThumbImage src={url} />
        <ThumbText>{text}</ThumbText>
      </ThumbWrap>
    </Fragment>
  )
};

export default ThumbNews;