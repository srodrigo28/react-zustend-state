import { useTaskStore } from '../../store/tasks'

export function Item(){
    const { tasks, removeTask } = useTaskStore()

    return(
        <ul>
            { tasks.map( (item) => (
                <li key={item.id}>
                    <p>
                        <span>{item.id}</span> - 
                        <span>{item.text}</span>
                        <button onClick={ () => removeTask(item.id)}>excluir</button>
                    </p>
                </li>
            ))}
        </ul>
    )
}