import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            age: '',
            isAdd: true,
            idEdit: '',
        }
    }
    handleEdit = () =>{
        const {setToDoList, toDoList} = this.props;
        const {idEdit, userName, age} = this.state;
        this.setState({
            isAdd: true
        })
        const newObj = {
            id: idEdit,
            name: userName,
            age: age,
        };
        toDoList.map((todo)=>{
            if(todo.id === newObj.id){
                todo.name = newObj.name;
                todo.age = newObj.age;
            };
        })
        debugger;

        setToDoList([...toDoList]);
    }

    handleClick = () => {
        const {setToDoList, toDoList, _headerRef} = this.props;
        const {userName, age} = this.state;
        const newToDo = {
            id: toDoList.length + 1,
            userName,
            age
        }
        setToDoList([...toDoList, newToDo]);
        this.setState({
            userName: '', 
            age: ''
        })
    }

    inputChange = (e) => {
        const {name, value} = e.target;
        // this.setState({
        //     [name]: value
        // });
        if(name === "userName"){
            this.setState({userName : value})
        }else{
            this.setState({age : value})
        }
    }

    changeInputValue = (new_todo) =>{
        const item = new_todo[0];
        // this.setState({
        //     [value]: new_todo
        // });
        
        this.setState({
            userName : item.name,
            age: item.age,
            isAdd: false,
            idEdit: item.id,
        })
    }


    render() {
        const {userName, age, isAdd} = this.state;
        return (
            <div>
                <input name="userName" onChange={this.inputChange} defaultValue={userName} />
                <input name="age" onChange={this.inputChange} defaultValue={age} />
                
                <button onClick={isAdd ? this.handleClick : this.handleEdit}>{isAdd ? 'Add' : 'Edit'}</button>
            </div>
        )
    }
}
export default Header;
