import React, { useState } from 'react'

function Content(props){
  console.log(props)

  let [title, setTitle] = useState(["내 제휴", "편하고 여유있게", "간편하고 편리하게", "스마트 줄서기"]);
  let [desc, setDesc] = useState(["할인카드 조회 서비스", "모바일 오더", "모바일 기프트카드", "이용가이드"]);
  let [good, setGood] = useState(0);

    function goodFun(){
        setGood(good+1)
    }
    function Change(){
        let copy = [...title];
        let change = [...desc];

        copy[0] = "쌍둥이 아기판다77"
        change[0] = "멘트 바뀜"

        setTitle(copy);
        setDesc(change);
    }

    let [modalChk, setModalChk] = useState(false);
    function Modal(){
        // setModalChk(true);
        // if(modalChk == true){
        //     setModalChk(false)
        // } if문

        // if(modalChk == false){
        //     setModalChk(true)
        // }else{
        //     setModalChk(false)
        // } if else문

        // (modalChk === false ? setModalChk(true) : setModalChk(false)) 삼항 연산자

        setModalChk(!modalChk);
        // ! = 반대의미 ex)모달이 커졌을때 & 꺼졌을때  총 3가지 틀린것은 없음 익숙하고 편한걸로 사용하면 된다
    }
  return(
    <>
    <div className='content-item' onClick={Modal}>
      <img src="https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/08/24/thum1.jpg" alt='연습' />
      <h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
      <p>{desc[props.arrayNum]}</p>
      <p onClick={goodFun}>👍 {good}</p>
      <button onClick={Change}>수정</button>
    </div>
    {
        //(modalChk === true && <div className='window' onClick={Modal}></div>)
        (modalChk === true ? <div className='window' onClick={Modal}></div> : null)
        //위에랑 같은 의미
    }
    </>
  )
}

export default Content