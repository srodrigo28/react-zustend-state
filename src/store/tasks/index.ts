import { create } from "zustand";

type Task = {
    id: string | number;
    text: string
}

type TaskStore = { // metodos
    slogan: string;
    tasks: Task[];
    addTask: (text: string) => void;
    removeTask: (id: number | string) => void;
    editTask: ( id: number | string, text: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
    slogan: "App React TypeScript Zustend",
    tasks: [], // 1. função
    addTask: (text) => set((state) => ({ // 2. função
        tasks: [ ...state.tasks, { id: Date.now(), text: text} ]
    })),
    removeTask: (id) => set((state) => ({ // 3. função
        tasks: state.tasks.filter(task => task.id !== id)
    })),
    editTask: (id, text) => set((state) => ({
        tasks: state.tasks.map( task => task.id === id ? {...task, text: text} : task)
    }))
}))