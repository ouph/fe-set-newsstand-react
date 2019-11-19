import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import NewsName from "./NewsName";

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186afcb295bbdde20077ff/newsstand-news-json.js")
      .then(res => res.json())
      .then(resJson => {
        setNewsData(resJson);
      });
  }, []);
  return (
    <div>
      <NewsName newsData={newsData}/>
    </div>
  )
}

ReactDom.render(<App/>, document.querySelector("#root"));