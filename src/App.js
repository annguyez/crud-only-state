import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ToDoList from "./components/todo/toDoList";
import { useRef, useState } from 'react';

function App() {

  const init_toDoList = [
    {
      'id': 1,
      'name': 'A',
      'age': 18
    },
    {
      'id': 2,
      'name': 'B',
      'age': 18
    },
    {
      'id': 3,
      'name': 'C',
      'age': 180
    }
  ] 
  const [toDoList, setToDoList] = useState(init_toDoList);
  const headerRef = useRef();
  let _headerRef;
  const handleEdit = (id) => {
    //debugger;
    
    const new_todo = toDoList.filter((todo)=>
      todo.id  === id);
    
    _headerRef.changeInputValue(new_todo);
  }
  
  const setHeaderRef = (ref) => {
    _headerRef = ref;
  }
    
  return (
    <div className="App">
        <Header setToDoList={setToDoList} toDoList={toDoList} ref={setHeaderRef} />
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} handleEdit={handleEdit}/>
        <Footer />
    </div>
  );
}

export default App;
