import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(["Men's Jacket Recommendation", "Gangnam Restaurant", "Python Self-Study"])
  // let [like1, setLike1] = useState(0)
  // let [like2, setLike2] = useState(0)
  // let [like3, setLike3] = useState(0)
  let [like, setLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false);
  let [selectedTitle, setSelectedTitle] = useState("");

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
        <div className='sorting'><button onClick={()=>{
          let copy = [...title];
          copy.sort();  
          setTitle(copy);
        }}>Sorting Alphabetically</button></div>
      </div>

      {/* <div className="list">
        <h4>{ title[0] } <span onClick={()=>{ setLike(like + 1)}}>👍</span> {like} </h4>
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = "Women's Jacket Recomendation";
        setTitle(copy);
        }}>Change Title</button>
        <p>03/28/2023</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>03/28/2023</p>
      </div> */}
      {/* <div className="list">
        <h4 onClick={()=>{ setModal(!modal)}}>{ title[2] }</h4>
        <p>03/28/2023</p>
      </div> */}

        {
          title.map(function(t, i) {
            return (
              <div className="list" key={i}>
              <h4 onClick={()=>{
                setSelectedTitle(t)
                setModal(!modal)
              }}>
                {title[i]}
                <span onClick={()=>{
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy)
                }}>👍{like[i]}</span>
              </h4>
              <p>03/28/2023</p>
            </div>
            )
          })
        }
        
        
        {
          modal ? <Modal title={selectedTitle} setTitle={setTitle} /> : null
        }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
    <h4>{props.title}</h4>
    <p>Date</p>
    <p>Detail</p>
    <button onClick={()=>{
      // let copy = [...props.title];
      // copy[0] = "Women's Jacket Recomendation";
      // props.setTitle(copy);
    }} >Change Title</button>
  </div>
  ) 
}



export default App;
