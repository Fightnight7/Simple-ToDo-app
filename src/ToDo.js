import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    state = {
        list: [
            {
                'todo': 'clean the house'
            },
            {
                'todo': 'buy milk'
            }
        ],
        todo: ''
    };

    createNewToDoItem = () => {
        this.setState(({list, todo}) => ({
            list: [
                ...list,
                {
                    todo
                }
            ],
            todo: ''
        }));
    };

    handleInput = e => {
            this.setState({
                todo: e.target.value
            });
        };

    deleteItem = indexToDelete => {
        console.log(this.state.list)
        this.setState(({list}) => ({
            list: list.filter((todo, index) => index !== indexToDelete)
        }));
    };

    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">React To Do</h1>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">
                        {this.state.list.map((item, key) => {
                                return <ToDoItem
                                    key={key}
                                    item={item.todo}
                                    deleteItem={() => this.deleteItem(key)}
                                />
                            }
                        )}
                    </div>
                    <div>
                        <input type="text" value={this.state.todo} onChange={this.handleInput}/>
                        <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;
