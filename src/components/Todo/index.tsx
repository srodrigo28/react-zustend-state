import { FormEvent, useState } from "react";
import { Item } from "./item";
import './todo.css'
import { useTaskStore } from "../../store/tasks";

export function Todo(){
    const [newTask, setNewTask] = useState('');
    const { tasks, addTask} = useTaskStore();
    // const store = useTaskStore();

    const handleAddTask = (e: FormEvent) =>{
        e.preventDefault();

        addTask(newTask)

        setNewTask('')
    }
    return(
        <>
            <form onSubmit={handleAddTask}>
                <p>Você tem {tasks.length} tarefas em aberto</p>
                <input 
                value={newTask} onChange={ e => setNewTask( e.target.value )}
                type="text" placeholder="item para adicionar" />
                <button type="submit">Adicionar</button>
            </form>
            <Item />
        </>
    )
}