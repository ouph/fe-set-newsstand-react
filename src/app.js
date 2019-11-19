import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import NewsName from "./NewsName";
import MyNewsTitle from "./MyNewsTitle";

function App() {
  const limit = 6;
  const [offset, setOffset] = useState(0);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186afcb295bbdde20077ff/newsstand-news-json.js")
      .then(res => res.json())
      .then(resJson => {
        const paging = offset <= limit ? offset : parseInt(offset / limit);
        const data = resJson.slice(paging * limit, (paging + 1) * limit);
        setNewsData(data);
      });
  }, [offset]);

  const prevHandler = () => {
    const val = offset === 0 ? 0 : offset - 1;
    setOffset(val);
  };

  const nextHandler = () => {
    const val = offset + 1;
    setOffset(val);
  };

  return (
    <div>
      <MyNewsTitle prevHandler={prevHandler} nextHandler={nextHandler}/>
      <NewsName newsData={newsData}/>
    </div>
  )
}

ReactDom.render(<App/>, document.querySelector("#root"));