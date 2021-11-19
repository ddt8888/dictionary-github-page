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

// // 실제 제거까지 되는 단계
// import './App.css';
// import React, { Component } from 'react';
// import words from './Carddummy'
// import Button from './Button'

// class App extends Component {
//   state = {
//     words: words
//   }
//   handleRemove = (id, e) => {
//     const word = e.target.previousSibling.innerText
//     console.log(word)
//     console.log(id)
//     alert(`You want to delete word - ${word}?`)

//     const words = this.state.words.filter((w, index) => index !== id) // 제거하려는 단어의 id 와 일치하는 요소만 걸러냄 
//     this.setState({ words })
//   }
//   render() {
//     const { words } = this.state
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

// export default App;

// // 간단한 사진 앨범 만들기
// import './App.css'
// import React, { Component } from 'react'
// import images from './imageData'
// import Button from './Button'

// class App extends Component {
//   state = {
//     index: 0
//   }

//   // prev 버튼 클릭시 실행
//   decreaseIndex = () => {
//     const nextIndex = this.state.index - 1
//     this.setState({ index: (nextIndex < 0) ? images.length - 1 : nextIndex })
//   }

//   // next 버튼 클릭시 실행
//   increaseIndex = () => {
//     const nextIndex = this.state.index + 1
//     this.setState({ index: (nextIndex > images.length - 1) ? 0 : nextIndex })
//   }

//   render() {
//     const { index } = this.state
//     const { increaseIndex, decreaseIndex } = this
//     // 사진 선택
//     const path = images[index].src
//     const title = images[index].title
//     return (
//       <div className="App">
//         <div className="img-container">
//           <img src={path} alt={title}></img>
//         </div>

//         <div className="control-btns">
//           <Button handleClick={decreaseIndex}>Prev</Button>
//           <Button handleClick={increaseIndex}>Next</Button>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// // 토글 사이드바 만들기
// import './App.css'
// import React, { Component } from 'react'
// import Button from './Button'
// import Sidebar from './Sidebar'

// class App extends Component {
//   state = {
//     toggle: false,
//     menus: [
//       {
//         icon: '♜',
//         title: 'HOME'
//       },
//       {
//         icon: '♞',
//         title: 'ABOUT'
//       },
//       {
//         icon: '☻',
//         title: 'SETTING'
//       },
//       {
//         icon: '♜',
//         title: 'HOME'
//       },
//       {
//         icon: '♞',
//         title: 'ABOUT'
//       },
//       {
//         icon: '☻',
//         title: 'SETTING'
//       }
//     ]
//   }

//   // toggle Sidebar
//   toggleMenu = () => {
//     this.setState({ toggle: !this.state.toggle })
//   }

//   render() {
//     const { toggle, menus } = this.state

//     return (
//       <div className="App">
//         <Button handleClick={this.toggleMenu}>Toggle Sidebar</Button>

//         <Sidebar open={toggle}>
//           {/* children props */}
//           {menus.map((menu, id) => {
//             return <div className="menu" key={id}>{menu.icon} {menu.title} </div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }

// export default App;


// ID password 만들기
// import './App.css';
// import React, { Component } from 'react';
// import Button from './Button'

// class App extends Component {
//   state = {
//     id: '',
//     password: ''
//   }
//   //사용자 입력이 들어왔을때 실행
//   handleChange = (e) => {
//     const { name, value } = e.target
//     console.log(name, value)
//     this.setState({ [name]: value }) // 주석처리하면 사용자 입력이 되지 않음 
//   }
//   login = (e) => {
//     e.preventDefault() // 새로고침 방지 
//     console.log('login')
//   }
//   render() {
//     const {
//       id, password } = this.state
//     return (
//       <div className="App">
//         <form>
//           <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={this.handleChange}></input></label><br /><br />
//           <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={this.handleChange}></input></label>
//           <div className="login-btn"><Button handleClick={this.login}>Login</Button></div>
//         </form>
//       </div>
//     );
//   }
// }
// export default App;

// // // 간단한 사진 앨범 만들기
// import './App.css'
// import React, { Component } from 'react'
// import videos from './youtubeData'
// import Button from './Button'

// class App extends Component {
//   state = {
//     index: 0
//   }

//   // prev 버튼 클릭시 실행
//   decreaseIndex = () => {
//     const nextIndex = this.state.index - 1
//     this.setState({ index: (nextIndex < 0) ? videos.length - 1 : nextIndex })
//   }

//   // next 버튼 클릭시 실행
//   increaseIndex = () => {
//     const nextIndex = this.state.index + 1
//     this.setState({ index: (nextIndex > videos.length - 1) ? 0 : nextIndex })
//   }

//   render() {
//     const { index } = this.state
//     const { increaseIndex, decreaseIndex } = this
//     // 사진 선택
//     const path = videos[index].src
//     const title = videos[index].title
//     return (
//       <div className="App">
//         <div className="img-container">
//           <embed className="video" src={path} alt={title}></embed>
//         </div>

//         <div className="control-btns">
//           <Button handleClick={decreaseIndex}>Prev</Button>
//           <Button handleClick={increaseIndex}>Next</Button>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// // 연습과제 2(https://syleemomo.tistory.com/59)
// import './App.css'
// import React, { Component } from 'react'
// import Button from './Button'
// import loginData from './LoginData'

// class App extends Component {
//   state = {
//     isLogin: false,
//     id: '',
//     password: ''
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({ [name]: value })
//   }

//   login = (e) => {
//     e.preventDefault() // 새로고침 방지
//     const { id, password } = this.state
//     // 사용자 정보와 일치하는지 검사하는 로직
//     if (id === loginData.USER_ID && password === loginData.USER_PASSWORD) {
//       this.setState({ isLogin: true })
//     } else {
//       alert('You failed to login!')
//     }
//   }

//   componentDidMount() {
//     // 서버에서 사용자 정보 가져오기

//   }

//   render() {
//     const { isLogin, id, password } = this.state
//     const loginForm = (
//       <form>
//         <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={this.handleChange}></input></label><br /><br />
//         <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={this.handleChange}></input></label>
//         <div className="login-btn"><Button handleClick={this.login}>Login</Button></div>
//       </form>
//     )
//     const homePage = (
//       <h1>Home Page</h1>
//     )
//     return (
//       <div className="App">
//         {isLogin ? homePage : loginForm}
//       </div>
//     )
//   }
// }

// export default App

// // 사용자가 선택한 다수의 이미지 보여주기
// import './App.css';
// import React, { Component } from 'react';
// import Button from './Button'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       files: []
//     }
//     this.fileInput = React.createRef() // ref 생성하기 
//   }
//   isValid = (type) => {
//     return type === 'image'
//   }

//   handleChange = (e) => {
//     const files = e.target.files
//     const uploadedFiles = []

//     for (let file of files) {
//       if (this.isValid(file.type.split('/')[0])) {
//         console.log(file.name)

//         const name = file.name
//         const imgSrc = URL.createObjectURL(file)
//         uploadedFiles.push({ name, imgSrc })
//       } else {
//         alert(`file [${file.name}] type is not valid !`)
//       }
//     }
//     this.setState({ files: uploadedFiles })
//   }
//   openFileWindow = () => {
//     this.fileInput.current.click() // ref 사용하기
//   }

//   render() {
//     const { files } = this.state

//     return (
//       <div className="App">
//         {files.length !== 0 && files.map((file, id) => {
//           return (
//             <div key={id}>
//               <h3>{file.name}</h3>
//               <img src={file.imgSrc} alt={file.name} width="70px" height="100px"></img>
//             </div>
//           )
//         })}
//         <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
//         <Button handleClick={this.openFileWindow}>Upload</Button>
//       </div>
//     );
//   }
// }

// export default App;


// import './App.css';
// import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Home, About, NotFound, Post } from './pages';
// import Menu from './Menu'
// import Sidebar from './Sidebar'
// import Button from './Button'

// class App extends Component {
//   homeMenu = [ // 객체에서 멤버변수
//     { url: "/", name: "Home" },
//     { url: "about", name: "About" },
//     { url: "posts", name: "Post" }
//   ]
//   state = {
//     open: false
//   }

//   // Sidebar on/off handler
//   showSidebar = () => {
//     this.setState({ open: !this.state.open })
//   }

//   render() {
//     const { open } = this.state
//     const { homeMenu } = this
//     return (
//       <div className="App">
//         <Button handleClick={this.showSidebar}>Menu</Button>
//         <Sidebar open={open}>
//           <Menu menus={homeMenu}></Menu>
//         </Sidebar>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/about" element={<About />} />
//           <Route exact path="/posts" element={<Post />}>
//             <Route path=":postId" element={<Post />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     );
//   }
// }

// export default App;

// // 버튼을 누를때마다 카운드 1씩 증가 - 클래스형
// import './App.css'
// import React, { Component } from 'react'
// import Button from './Button'

// class App extends Component {
//   state = {
//     count: 0
//   }

//   increaseCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <div className="App">
//         <h1>Count : {count}</h1>
//         <Button handleClick={this.increaseCount}>Counting Star</Button>
//       </div>
//     )
//   }
// }

// export default App;

// // 버튼을 누를때마다 카운드 1씩 증가 (2) - 함수형
// import './App.css'
// import React, { useState } from 'react'
// import Button from './Button'

// function App() {
//   const [count, setCount] = useState(0)

//   const increaseCount = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <Button handleClick={increaseCount}>Counting Star</Button>
//     </div>
//   )

// }

// export default App;

// // 이름바꾸기 버튼 만들기 + 새 할 일 추가 버튼 만들기 - 클래스형
// import './App.css'
// import React, { Component } from 'react'
// import Button from './Button'

// class App extends Component {
//   state = {
//     user: {
//       name: 'kimsang',
//       age: 27,
//       fruits: ["mandarine", "melon", "shinemusket"]
//     },
//     todos: [
//       { title: 'cleaning', done: false, description: 'cleaning my living room' },
//       { title: 'learning', done: false, description: 'learing react on tomorrow morning' },
//       { title: 'drinking', done: false, description: 'drinking soju with close friends' }
//     ]
//   }

//   changeName = () => {
//     const newUser = { ...this.state.user, name: 'new name' }
//     this.setState({ user: newUser })
//   }

//   addNewTodo = () => {
//     const newTodo = {
//       title: 'checking', done: true, description: 'checking my state of score'
//     }
//     const todos = [...this.state.todos, newTodo]
//     this.setState({ todos })
//   }

//   render() {
//     const { user, todos } = this.state
//     const { changeName, addNewTodo } = this
//     return (
//       <div className="App">
//         <h1>User Information</h1>
//         <h2>{user.name} ({user.age})</h2>
//         <h3>favorite fruits: {user.fruits.join(", ")}</h3>
//         <Button handleClick={changeName}>Change Name</Button>

//         <h1>Todo List</h1>
//         {todos.map((todo, id) => {
//           return (
//             <div key={id}>
//               <h2>{todo.title} - ({todo.done ? "finished" : "not yet done"})</h2>
//               <p>{todo.description}</p>
//             </div>
//           )
//         })}
//         <Button handleClick={addNewTodo}>Add Todo</Button>
//       </div>
//     )
//   }
// }

// export default App;

// // 이름바꾸기 버튼 만들기 + 새 할 일 추가 버튼 만들기 - 함수형
// import './App.css';
// import React, { useState } from 'react';
// import Button from './Button'

// function App() {
//   const [user, setUser] = useState({
//     name: 'syleemomo',
//     age: 23,
//     fruits: ["apple", "banana", "orange"]
//   })
//   const [todos, setTodos] = useState([
//     { title: 'cleaning', done: false, description: 'cleaning my living room' },
//     { title: 'learning', done: false, description: 'learing react on tomorrow morning' },
//     { title: 'drinking', done: false, description: 'drinking soju with close friends' }
//   ])
//   const changeName = () => {
//     const newUser = { ...user, name: "new name" }
//     setUser(newUser)
//   }
//   const addNewTodo = () => {
//     const newTodo = { title: 'checking', done: true, description: 'checking my state of score' }
//     const newTodos = [...todos, newTodo]
//     setTodos(newTodos)
//   }

//   return (
//     <div className="App">
//       <h1>User Information</h1>
//       <h2>{user.name} ({user.age})</h2>
//       <h3>favorite food: {user.fruits.join(" ")}</h3>
//       <Button handleClick={changeName}>Change Name</Button>

//       <h1>Todo List</h1>
//       {todos.map((todo, id) => {
//         return (
//           <div key={id}>
//             <h2>{todo.title} - ({todo.done ? "finished" : "not yet done"})</h2>
//             <p>{todo.description}</p> </div>
//         )
//       })}
//       <Button handleClick={addNewTodo}>Add Todo</Button>
//     </div>
//   );
// }

// export default App;

// //effect hook 연습 (Button 누를떄 마다 count)
// import './App.css';
// import React, { useEffect, useState } from 'react';
// import Button from './Button'

// function App() {
//   const [count, setCount] = useState(0)

//   const increaseCount = () => {
//     setCount(count + 1)
//   }

//   // componentDidMount, componentDidUpdate 와 유사함
//   useEffect(() => {
//     document.title = `You clicked ${count} times`
//   })

//   return (
//     <div className="App">
//       <h1>Count: {count}</h1>
//       <Button handleClick={increaseCount}>Increase Number</Button>
//     </div>
//   )
// }

// export default App;

// // count 초마다 1씩 증가
// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const increaseCount = () => {
//     setCount(count + 1)
//   }
//   useEffect(() => {
//     const timerID = setInterval(increaseCount, 1000)
//     return () => {
//       clearInterval(timerID)
//     }
//   })

//   return (
//     <div className="App">
//       <h1>Increase Count automatically !</h1>
//       <h2>Count: {count}</h2>
//     </div>
//   );
// }

// export default App;

// // count 초마다 1씩 증가 + 초마다 랜덤 숫자 출력
// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() { // 1초마다 자동으로 숫자를 카운팅하는 로직 
//   const [count, setCount] = useState(0);
//   const increaseCount = () => {
//     setCount(count + 1)
//   }
//   useEffect(() => {
//     const timerID = setInterval(increaseCount, 1000)
//     return () => {
//       clearInterval(timerID)
//     }
//   }) // 1초마다 자동으로 랜덤한 숫자를 보여주는 로직 

//   const [number, setNumber] = useState(0)
//   const pickRandomNumber = () => {
//     const randNum = Math.floor(Math.random() * 100)
//     setNumber(randNum)
//   }
//   useEffect(() => {
//     const timerID = setInterval(pickRandomNumber, 1000)
//     return () => {
//       clearInterval(timerID)
//     }
//   })
//   return (
//     <div className="App">
//       <h1>Increase Count automatically !</h1>
//       <h2>Count: {count}</h2> <br />
//       <h1>Pick Random Number !</h1>
//       <h2>Random Numbr: {number}</h2>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import useRandomNumber from './useRandomNumber';
// import animals from './animalData'
// import words from './dictionaryData'

// function App() {
//   // 이미지 갤러리 로직 
//   const randIndex = useRandomNumber(0, animals.length - 1)
//   const animal = animals[randIndex]

//   // 플래쉬 카드 로직 
//   const randIndex2 = useRandomNumber(0, words.length - 1)
//   const dic = words[randIndex2]

//   return (
//     <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
//       <h1>Image Gallary</h1>
//       <img src={animal.src} alt={animal.title} />
//       <h2>{animal.title}</h2> <br />

//       <h1>Plash Card</h1>
//       <h2>{dic.word}</h2>
//       <h3>{dic.meaning}</h3>
//     </div>
//   )
// }

// export default App;


// 컴포넌트 마운트와 해제시에만 Effect Hook 실행하기
import './App.css';
import React, { useState, useEffect } from 'react';

function App() { // 카운팅을 처리하는 로직 
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('useEffect - Count')
  }); // 서버에서 데이터를 가져오는 로직 
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
      .then(res => res.json())
      .then(result => {
        const { data: { movies } } = result
        console.log(movies)
        console.log('useEffect - Movies')
        setMovies(movies)
      })
  })

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me </button> <br /><br />
      {movies.map((movie, id) => {
        return (
          <div key={id}>{movie.title}</div>
        )
      })}
    </div>
  );
}

export default App;