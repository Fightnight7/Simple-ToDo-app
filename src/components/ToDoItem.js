import React from 'react';
import './ToDoItem.css';

const ToDoItem = (props) => {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{props.item}</p>
                <button className="ToDoItem-Delete"
                     onClick={props.deleteItem}>-
                </button>
            </div>
        );
};

export default ToDoItem;
