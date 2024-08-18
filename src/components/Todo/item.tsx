import { useTaskStore } from '../../store/tasks'

export function Item(){
    const { tasks, removeTask, editTask } = useTaskStore()

    return(
        <ul>
            { tasks.map( (item) => (
                <li key={item.id}>
                    <p>
                        <span>{item.text}</span>
                        <button onClick={ () => removeTask(item.id)}>Excluir</button>
                        <button
                            onClick={ () => editTask( item.id, prompt("Novo nome: ", item.text) ) || item.text}
                        > 
                            Editar
                        </button>
                    </p>
                </li>
            ))}
        </ul>
    )
}