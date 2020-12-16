import React, { useState } from 'react';


function ToDoList(props) {
    // const todo = props.toDoList; 
    const {toDoList, setToDoList, handleEdit} = props;

    // const [state, setstate] = useState(todo)
    function deleteList(id){
        // debugger;
        const todo = toDoList.filter((item)=>
            item.id !== id
        );
        setToDoList(todo);
    }

    function pushData(id){
        handleEdit(id);
        // const data = ToDoList.filter(())
    }
    // function handleClick() {
    //     deleteList(item.id);
    // }
    return (
        <div>
        {
            toDoList.map((item) => {
                return (
                    <div>
                        <p style={{display: 'inline-block'}}>{item.name}</p>
                        <p style={{display: 'inline-block'}}>{item.age}</p>
                        <button onClick={()=>pushData(item.id)}>Edit</button>
                        <button onClick={()=>deleteList(item.id)}>Del</button>
                    </div>
                );
            })     
        }
        </div>
    )
}
export default ToDoList;
