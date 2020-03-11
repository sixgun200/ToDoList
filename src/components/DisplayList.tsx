import React, { useState } from 'react';
import { TodoItem } from '../App';
import styles from './DisplayList.module.css';

interface InputFormProps {
    tasks: TodoItem[];
    setTasks: (todos:TodoItem[]) => any;
}

const DisplayList: React.FC<InputFormProps> = ({ tasks, setTasks }) => {

    const onClickHandler = (Index: number) => {
        setTasks(tasks.map((todo: TodoItem, i: number) => {
            if (i === Index) {
                return {
                    ...todo,
                    taskDone: !todo.taskDone
                }
            }
            return todo;
        }))
    }

    const onClickDelete = (Index:number) => {
        setTasks(tasks.filter((task, i) => {
            if (i!==Index) return task;
        }));
    }

    return (
        <div className="row justify-content-center">
        <ul className="list-group col-6 list-group-flush text-center">
            {tasks.map((todo: TodoItem, i: number) => (
                <li className={todo.taskDone ? `${styles.strikeThru} list-group-item`: `${styles.normalFont} list-group-item`} key={i}> 
                    {todo.taskItem}{" "}
                    <input type="checkbox" value={todo.taskItem} onClick={() => onClickHandler(i)} />{"  "}
                    <button className="btn btn-danger" onClick={() => onClickDelete(i)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default DisplayList;
