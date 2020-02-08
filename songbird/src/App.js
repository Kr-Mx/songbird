import React from 'react';
import Header from './components/Header/Header'
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
function App(props) {
  return (
    <>
      <Header store={props.store}/>
      <main className="main">
        <Question/>
        <Answers birdsData={props.store.birdsData}/>
        <Description store={props.store}/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
