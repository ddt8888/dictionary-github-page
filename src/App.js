// import './App.css'
// import React, { Component } from 'react'

// 타이머 출력

// class App extends Component {
//   state = {
//     count: 0
//   }
//   increaseCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   // 초기에 웹화면이 렌더링 되었을 때 타이머를 설정
//   componentDidMount() {
//     this.countID = setInterval(this.increaseCount, 1000)
//   }
//   // 사용자가 웹화면을 벗어나면 타이머를 해제함
//   componentWillUnmount() {
//     clearInterval(this.countID)
//   }
//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <h1>Increase automatically !</h1>
//         <h2>{count}</h2>
//       </div>
//     )
//   }
// }

// export default App;


// 버튼 만들기
// import './App.css'
// import React, { Component } from "react"
// import Button from './Button'

// class App extends Component {
//   handleClick = () => alert('clicked button')
//   render() {
//     return (
//       // 여기서 size는 props 개념(=> Button.js 로 넘어간다.)
//       <div>
//         <Button size='small' color='blue' width='fullWidth'>Add Todo</Button>
//         <p></p>
//         <Button size='medium' color='tomato'>
//           <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
//           Add Todo
//         </Button>
//         <p></p>
//         <Button size='large' color='grey' handleClick={this.handleClick} disabled={true}>Add Todo</Button>
//       </div>

//     )
//   }
// }

// export default App

// 블로그 연습과제 1
// import './App.css'
// import { Component } from "react"
// import Nav from './Nav'

// class App extends Component {
//   state = {
//     menus: [
//       {
//         siteTitle: '구글',
//         siteUrl: 'https://www.google.com'
//       },
//       {
//         siteTitle: '네이버',
//         siteUrl: 'https://www.naver.com'
//       },
//       {
//         siteTitle: '사전 검색 서비스',
//         siteUrl: 'https://ddt8888.github.io/dictionary-front/'
//       }
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         <Nav menus={this.state.menus}></Nav>
//       </div>
//     );
//   }
// }


// import './App.css'
// import React, { Component } from "react"
// import Modal from './Modal'
// import Button from './Button'

// class App extends Component {
//   state = {
//     open: false
//   }
//   // 이벤트 핸들러 함수
//   // Modal window를 열기만 하는 버튼
//   openModal = () => {
//     this.setState({ open: true })
//   }
//   // Modal window를 닫기만 하는 버튼
//   closeModal = () => {
//     this.setState({ open: false })
//   }

//   // Modal window를 On/Off하는 버튼
//   // openModal = () => {
//   //   this.setState({ open: !this.state.open })
//   // }
//   render() {
//     const { open } = this.state
//     const { openModal, closeModal } = this
//     return (
//       <>
//         <Button handleClick={openModal}>할 일 추가</Button>
//         <Modal open={open}>
//           <div className="header">할 일을 추가하시겠습니까?</div>
//           <hr></hr>
//           <div className="body">
//             <label>할 일 이름 : <input type="text"></input></label><br></br>
//             <label>할 일 설명 : <input type="text"></input></label>
//           </div>
//           <hr></hr>
//           <div className="footer">
//             <Button>추가</Button>
//             <Button handleClick={closeModal}>닫기</Button>
//           </div>
//         </Modal>
//       </>
//     );
//   }
// }


// import './App.css'
// import React, { Component } from "react"
// import Modal from './Modal'
// import Button from './Button'

// class App extends Component {
//   state = {
//     open: false,
//     remove: ''
//   }
//   // 이벤트 핸들러 함수
//   // Modal window를 열기만 하는 버튼
//   openModal = () => {
//     this.setState({ open: true })
//     this.setState({ remove: !this.state.remove })
//   }
//   // Modal window를 닫기만 하는 버튼
//   closeModal = () => {
//     this.setState({ open: false })
//   }

//   removeModal = () => {
//     this.setState({ open: false })
//     this.setState({ remove: 'removed successfully !' })
//   }

//   // Modal window를 On/Off하는 버튼
//   // openModal = () => {
//   //   this.setState({ open: !this.state.open })
//   // }
//   render() {
//     const { open, remove } = this.state
//     const { openModal, closeModal, removeModal } = this
//     return (
//       <>
//         <Button handleClick={openModal}>Remove Todo</Button>
//         <h1>{remove}</h1>
//         <Modal open={open}>
//           <div className="header">Do you want to remove this todo ?</div>
//           <hr></hr>
//           <div className="body">If you remove this todo, you cannot see this gain later !!</div>
//           <hr></hr>
//           <div className="footer">
//             <Button handleClick={removeModal}>Remove</Button>
//             <Button handleClick={closeModal}>Close</Button>
//           </div>
//         </Modal>
//       </>
//     );
//   }
// }

// 요소 참조 (ref) 연습
// import './App.css'
// import React, { Component } from "react"
// import CustomInput from './Custominput'

// class App extends Component {

//   render() {
//     return (
//       <CustomInput></CustomInput>
//     )
//   }
// }

// 요소 참조(ref) 예제
// import './App.css';
// import { Component } from 'react';
// import Upload from './Upload';

// class App extends Component {
//   render() {
//     return (
//       <Upload>
//       </Upload>
//     );
//   }
// }

// import './App.css';
// import React, { Component } from 'react';
// import Button from './Button';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.fileInput = React.createRef() // ref 생성
//   }
//   openFileUploadWindow = () => {
//     console.log(this.fileInput.current)
//     this.fileInput.current.click() // ref 사용
//   }
//   render() {
//     return (
//       <div>
//         <h1>File Upload</h1>
//         <Button handleClick={this.openFileUploadWindow}>Upload</Button>
//         <input type="file" style={{ visibility: 'hidden' }} ref={this.fileInput}></input>
//       </div>
//     );
//   }
// }

// Card(Component 만들어서 하기)
// import './App.css';
// import Card from './Card';
// // import Button from './Button';
// import { Component } from 'react';
// import dic from './dummyData';

// class App extends Component { 
//     state = {
//       count: 0 
//     }
//     increaseCount = () => {
//       this.setState({count: this.state.count +1})
//     }
//     //초기에 웹화면이 렌더링되었을때 타이머를 설정함
//     componentDidMount(){
//       this.countID = setInterval(this.increaseCount, 1000)
//     }

//     //사용자가 웹화면을 벗어나면 타이머를 해체함
//     componentWillUnmount() {
//       clearInterval(this.countID)
//     }
//     render() {
//       const {count} = this.state
//       console.log(dic)
//       const word_picked = dic[count%dic.length]

//       return (
//           <Card word_picked={word_picked}>

//         </Card>
//       )

//     }
//   }

// alert 만들기
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.showAlert = this.showAlert.bind(this)
//   // }
//   // showAlert() {
//   //   console.log(this)
//   //   alert('this is alert message !')
//   // }
//   // 화살표 함수 사용한 코드
//   showAlert = () => {
//     console.log(this)
//     alert('this is alert message !')
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Show alert !</h1>
//         <button type="button" onClick={this.showAlert}>Show</button>
//       </div>
//     )
//   }
// }

// // 버튼 하나로 배경색 바꾸기
// import './App.css';
// import React, { Component } from 'react';
// class App extends Component {
//   state = { toggle: true }
//   toggleScreenMode = () => {
//     this.setState({ toggle: !this.state.toggle })
//   }
//   render() {
//     const { toggle } = this.state
//     return (
//       <div className={`normal ${toggle ? "" : "dark"}`}>
//         <h1>Change screen mode</h1>
//         <button type="button" onClick={this.toggleScreenMode}>{toggle ? "DARK" : "NORMAL"}</button>
//       </div>
//     );
//   }
// }


// // delete 버튼을 눌렀을때 제거할지 alert은 뜨지만 실제로 삭제되지 않는 단계
// import './App.css';
// import React, { Component } from 'react';
// import words from './Carddummy'
// import Button from './Button'

// class App extends Component {
//   handleRemove = (id, e) => {
//     const word = e.target.previousSibling.innerText
//     console.log(word)
//     console.log(id)
//     alert(`You want to delete word - ${word}?`)
//   }
//   render() {
//     const wordStyle = {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//     return (
//       <div>
//         <h1 style={{ textAlign: 'center' }}>Word List</h1>
//         {words.map((w, id) => {
//           return (
//             <div key={id} style={wordStyle}>
//               <h2>{w.word}</h2>
//               <Button size="small" type="button" handleClick={(e) => this.handleRemove(id, e)}>DELETE</Button>
//             </div>
//           )
//         })}
//       </div>
//     );
//   }
// }

// 실제 제거까지 되는 단계
import './App.css';
import React, { Component } from 'react';
import words from './Carddummy'
import Button from './Button'

class App extends Component {
  state = {
    words: words
  }
  handleRemove = (id, e) => {
    const word = e.target.previousSibling.innerText
    console.log(word)
    console.log(id)
    alert(`You want to delete word - ${word}?`)

    const words = this.state.words.filter((w, index) => index !== id) // 제거하려는 단어의 id 와 일치하는 요소만 걸러냄 
    this.setState({ words })
  }
  render() {
    const { words } = this.state
    const wordStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Word List</h1>
        {words.map((w, id) => {
          return (
            <div key={id} style={wordStyle}>
              <h2>{w.word}</h2>
              <Button size="small" type="button" handleClick={(e) => this.handleRemove(id, e)}>DELETE</Button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;