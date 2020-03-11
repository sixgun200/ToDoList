import React, { useState } from 'react';
import { TodoItem } from '../App'

interface InputFormProps {
    tasks: TodoItem[];
    setTasks: (todos:TodoItem[]) => any;
}
 const InputForm: React.FC<InputFormProps> = ({ tasks, setTasks }) => {
    
    const [newTask, setNewTask] = React.useState<TodoItem>({taskItem: "", taskDone: false});

    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTask.taskItem.length){
            console.log(newTask);
            setTasks([newTask, ...tasks]);
            tasks.map((task:TodoItem) => console.log(task.taskItem, task.taskDone));
            setNewTask({taskItem: "", taskDone: false});
            console.log(newTask.taskItem, newTask.taskDone);
        }
    }

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)  => {
        setNewTask({...newTask, [e.target.name]: e.target.value});
        console.log(newTask.taskItem);
    }

    return (
        <form className="text-center mt-4 mb-3" onSubmit={onSubmitHandler}>
            <input value={newTask.taskItem} onChange={onChangeHandler} name="taskItem" type="text" />{" "}
            <button className="btn btn-primary" type="submit">Add New Todo Item</button>
        </form>
    )
}

export default InputForm;
