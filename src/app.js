import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <div>
      <div>App!</div>
    </div>
  )
}

ReactDom.render(<App/>, document.querySelector("#root"));