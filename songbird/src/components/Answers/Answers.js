import React from "react";

export default function Answers(props){
let answersList = props.birdsData[0]
  .map(item=>{return <li className='main__answers-item' key={item.id} >{item.name}</li>});
  return (
<ul className='main__answers'>

  {answersList}
</ul>
  )
};