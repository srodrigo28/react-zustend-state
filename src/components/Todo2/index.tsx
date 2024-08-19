import { FormEvent, useState } from "react";
import { Item } from "./item";
import './todo.css'
import { useTaskStore } from "../../store/tasks2";

export function Todo2(){
    const [newTask, setNewTask] = useState('');
    const { tasks, addTask, slogan} = useTaskStore();
    // const store = useTaskStore();

    const handleAddTask = (e: FormEvent) =>{
        e.preventDefault();

        addTask(newTask)
        setNewTask('')
    }
    return(
        <>
            <h2>{slogan}</h2>
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