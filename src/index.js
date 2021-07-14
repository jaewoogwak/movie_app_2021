import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('potato')
);

// react application이 하나의 component만을 rendering 해야한다.
// component를 작성할 때 마다 import React from "react" 써주기
// 써주지 않으면 react는 jsx가 있는 component를 사용하는 것을 이해하지 못함!
// 컴포넌트는 HTML을 반환하는 함수다.
// 이런 컴포넌트들을 app에 넣어주면 된다
// new!!