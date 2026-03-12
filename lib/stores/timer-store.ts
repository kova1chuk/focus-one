import { create } from 'zustand'

interface TimerState {
  currentIndex: number
  isRunning: boolean
  startedAt: number | null
  elapsedMs: number

  setCurrentIndex: (index: number) => void
  startTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
  tick: () => void
}

export const useTimerStore = create<TimerState>()((set, get) => ({
  currentIndex: 0,
  isRunning: false,
  startedAt: null,
  elapsedMs: 0,

  setCurrentIndex: (index) => set({ currentIndex: index }),

  startTimer: () =>
    set({
      isRunning: true,
      startedAt: Date.now(),
    }),

  stopTimer: () => {
    const { startedAt, elapsedMs } = get()
    const additional = startedAt ? Date.now() - startedAt : 0
    set({
      isRunning: false,
      startedAt: null,
      elapsedMs: elapsedMs + additional,
    })
  },

  resetTimer: () =>
    set({
      isRunning: false,
      startedAt: null,
      elapsedMs: 0,
    }),

  tick: () => {
    const { isRunning, startedAt, elapsedMs } = get()
    if (!isRunning || !startedAt) return
    const now = Date.now()
    set({
      elapsedMs: elapsedMs + (now - startedAt),
      startedAt: now,
    })
  },
}))
