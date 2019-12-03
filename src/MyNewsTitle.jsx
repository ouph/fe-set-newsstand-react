import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {DataContext} from "./pageReducer";

const TitleWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  height: 40px;
`;
const Div = styled.div`
  display: inline-block;
  height: 100%;
  padding-left: 15px;
`;
const Title = styled.div`
  margin: 0;
  display: inline-block;
  line-height: 2.9em;
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
const SubTitle_type1 = styled(Title)`
  margin-left: 5px;
  color: #808080;
  cursor: pointer;
  &::before {
    content: "\\003e";
    display: inline-block;
    margin-right: 10px;
  }
  &::after {
    content: "";
    width: 1px;
    height: 15px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;
    background-color: #d4d4d4;
  }
`;
const SubTitle_type2 = styled(Title)`
  width: 400px;
  cursor: pointer;
`;
const Button = styled.button`
  height: 100%;
  padding: 0 20px;
  border: 0;
  border-left: 1px solid #d4d4d4;
  background-color: transparent;
  cursor: pointer;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    display: inline-block;
    border-top: 3px solid #bbb;
    border-left: 3px solid #bbb;
  }
`;
const LeftButton = styled(Button)`
  &::before {
    margin-right: -5px;
    transform: rotate(-45deg);
  }
`;
const RightButton = styled(Button)`
  &::before {
    margin-left: -5px;
    transform: rotate(135deg)
  }
`;
const Icon = styled.i`
  margin-right: 10px;
  cursor: pointer;
`;
const MoveBtn = styled.div`
  float: right;
`;
const MyNewsTitle = () => {
  const {dispatch} = useContext(DataContext);
	const clickHandler = (type) => dispatch({type: type});
  return(
    <TitleWrap>
      <Div>
        <Title>뉴스 스탠드</Title>
        <Link to="/src/app.html/Card">
          <SubTitle_type1 onClick={clickHandler.bind(null, 'Card')}>전체 언론사</SubTitle_type1>
        </Link>
      </Div>
      <Div>
        <Link to="/src/app.html">
          <SubTitle_type2 onClick={clickHandler.bind(null, 'List')}>MY 뉴스</SubTitle_type2>
        </Link>
      </Div>
      <Div>
        <Link to="/src/app.html">
          <Icon onClick={clickHandler.bind(null, 'List')}>LIST</Icon>
        </Link>
        <Link to="/src/app.html/Card">
          <Icon onClick={clickHandler.bind(null, 'Card')}>CARD</Icon>
        </Link>
      </Div>
      <MoveBtn>
        <LeftButton onClick={clickHandler.bind(null, 'goToPrev')}/>
        <RightButton onClick={clickHandler.bind(null, 'goToNext')}/>
      </MoveBtn>
    </TitleWrap>
  )
};

export default MyNewsTitle;