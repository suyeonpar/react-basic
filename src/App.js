import { useState } from 'react';
import './App.css';
//import Content from './components/Content';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Notpages from './pages/Notpages';
//import Styled from './components/Styled';

function App() {

  let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"]);
  let [desc, setDesc] = useState(["할인카드 조회 서비스", "모바일 오더", "모바일 기프트카드", "이용가이드"]);
  let [good, setGood] = useState(10)
  
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/*" element={<Notpages/>}/>
    </Routes>
    </>


    // <>
    // <div className="App">
    //   <Nav />
    //   {/* <h3 className={Name} style={{color: "orange", backgroundColor: "skyblue"}}>Hellow React {Name}</h3> */}
    //   <div className='content'>
    //     <Content arrayNum="0" />
    //     <Content arrayNum="1" />
    //     <Content arrayNum="2" />
    //     <Content arrayNum="3" />
    //   </div>
    //   <div className='content'>
    //     <Content title={title[0]} desc={desc[0]} arrayNum="0" />
    //     <Content title={title[1]} desc={desc[1]} arrayNum="1" />
    //     <Content title={title[2]} desc={desc[2]} arrayNum="2" />
    //     <Content title={title[3]} desc={desc[3]} arrayNum="3" />
    //   </div>
    //   <Styled />
    // </div>
    // </>
  );
}

export default App;
