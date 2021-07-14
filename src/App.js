import React from "react";


function Food({ fav, pic }) {
  return (
    <div>
      <h3>I lik~~~~~e {fav}</h3>
      <img src = {pic}/>
    </div>
  );
}
const foodILike = [
  {
    id : 1,
    name: "ramen",
    image : "https://assets.bonappetit.com/photos/5e3c7a3c866b940008106763/1:1/w_960,c_limit/HLY-Veggie-Ramen-16x9.jpg"
  },
  {
    id : 2,
    name: "chiken",
    image : "https://images.herzindagi.info/image/2019/Jan/chiken-benefits-for-health.jpg"
  },
  {
    id : 3,
    name: "kimbap",
    image : "https://www.seriouseats.com/thmb/mUcGNC5UTA0OSzGpmwWr-m2FxAI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg"
  },
  {
    id : 4,
    name: "!jjaj21321angmen",
    image : "https://cdn.mindgil.com/news/photo/202101/70530_6285_1006.jpg"
  }
];


function App() {
  return (
    <div>
      {
        // !!! dish는 object !!!
        foodILike.map((dish, index) => (
          <Food fav = {dish.name} pic = {dish.image} key ={index}/>
        )) 
      }

    </div>
  );
}

export default App;

// component에 정보를 보낼 수 있다
// component는 재사용 가능하다. 

// map은 array의 각 item에 function을 적용하고 array를 반환한다!