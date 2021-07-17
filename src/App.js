import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading : true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false})
    }, 5000)
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>{isLoading ? "Loading" : "We are ready"}</div>
    );
  }
}
export default App;

// component에 정보를 보낼 수 있다
// component는 재사용 가능하다. 

// map은 array의 각 item에 function을 적용하고 array를 반환한다!
// !!!

// git push -u origin master

// react는 자동으로 모든 class componenet의  render method를 실행하려고 함.

// function -> class
// class App 에서는 state를 사용할 수 있다.
// state는 변하는 데이터. 
// state is object !
// component의 data를 동적으로 바꿀 수 있다.

// User call 'setState' then React refresh 'state' and call 'render function'
// setState를 사용해야 state를 새로 가져오고 render function을 호출한다
// 즉 setState를 사용하지 않으면 새로운 state와 render function이 호출되지 않음

// state에 의존하지 않아야 한다.
// 그래서 current를 사용!
// 또한 current를

//component life cycle