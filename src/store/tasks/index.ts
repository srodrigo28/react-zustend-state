import { create } from "zustand";

type Task = {
    id: string | number;
    text: string
}

type TaskStore = { // metodos
    tasks: Task[];
    addTask: (text: string) => void;
    removeTask: (id: number | string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (text) => set((state) => ({
        tasks:[ 
            ...state.tasks,
            { id: Date.now(), text: text}
         ]
    })),
    removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
    }))
}))