import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mmkvStorage } from '../storage'

export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: number
  completedAt?: number
}

export interface SessionLog {
  taskId: string
  startedAt: number
  endedAt: number
  durationMs: number
}

interface TaskState {
  tasks: Task[]
  sessionLog: SessionLog[]

  addTask: (title: string) => void
  removeTask: (id: string) => void
  completeTask: (id: string) => void
  reorderTasks: (tasks: Task[]) => void
  logSession: (entry: Omit<SessionLog, 'endedAt' | 'durationMs'> & { endedAt: number }) => void
  resetDay: () => void
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [],
      sessionLog: [],

      addTask: (title) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now().toString(36),
              title,
              completed: false,
              createdAt: Date.now(),
            },
          ],
        })),

      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      completeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: true, completedAt: Date.now() } : t,
          ),
        })),

      reorderTasks: (tasks) => set({ tasks }),

      logSession: (entry) =>
        set((state) => ({
          sessionLog: [
            ...state.sessionLog,
            {
              ...entry,
              durationMs: entry.endedAt - entry.startedAt,
            },
          ],
        })),

      resetDay: () =>
        set((state) => ({
          tasks: state.tasks.filter((t) => !t.completed),
          sessionLog: [],
        })),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
)
