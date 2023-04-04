import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(["Men's Jacket Recommendation", "Gangnam Restaurant", "Python Self-Study"])
  let [like, setLike] = useState([43, 33, 2])
  let [modal, setModal] = useState(false);
  let [selectedTitle, setSelectedTitle] = useState(0);
  let [input, setInput] = useState('')
  let [date, setDate] = useState(['03/12/2023', '03/30/2023', '03/31/2023'])

  const addPost = () => {
    const currentDate = new Date().toLocaleDateString();
    const newTitle = [...title, input]
    const newLike = [...like, 0];
    const newDate = [...date, currentDate]
    setTitle(newTitle);
    setLike(newLike);
    setDate(newDate)
  }

  const deletePost = (index) => {
    let copyTitle = [...title];
    copyTitle.splice(index, 1);
    let copyLike = [...like];
    copyLike.splice(index, 1);
    let copyDate = [...date];
    copyDate.splice(index, 1)
    setTitle(copyTitle)
    setLike(copyLike);
    setDate(copyDate);
  }




  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
        <div className='sorting'><button onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}>Sorting Alphabetically</button></div>
      </div>

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {
              setSelectedTitle(i)
              setModal(!modal)
            }}>
              {title[i]}
              <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
              }}>👍{like[i]}</span>
            </h4>
            <p>{date[i]}</p>
            <button onClick={() => {
              setSelectedTitle(i);
              deletePost(i);
            }}>Delete</button>

          </div>
        )
      })
      }

      <input onChange={(e) => {
        setInput(e.target.value);
      }}></input>

      <button onClick={() => {
        if (input) {
          addPost()
          // setInput()
          // let copy = [...title];
          // copy.unshift(input)
          // setTitle(copy)
        }
      }}>Create</button>

      {
        modal ?
          (<Modal
            selectedTitle={selectedTitle}
            setTitle={setTitle}
            title={title}
            like={like}
            setLike={setLike}
          />) : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title[props.selectedTitle]}</h4>
      <p>Date</p>
      <p>Detail</p>

      {/* <button onClick={()=>{
      // let copy = [...props.title];
      // copy[0] = "Women's Jacket Recomendation";
      // props.setTitle(copy);
    }} >Change Title</button> */}
    </div>
  )
}



export default App;
