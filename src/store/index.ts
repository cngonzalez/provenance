import {create} from 'zustand'
import {SCREENS} from '../constants'

type Screen = typeof SCREENS[number]
interface GameStore {
  currentScreen: Screen
  setNextScreen: () => void
  memoriesCompleted: number
  incrementMemoriesCompleted: () => void
  reset: () => void
}

export const useGameStore = create<GameStore>()((set, get) => ({
  currentScreen: SCREENS[0],
  setNextScreen: () => {
    const {currentScreen, memoriesCompleted} = get()

    //go through the loop when needed
    if (currentScreen === 'artwork' && memoriesCompleted < 5) {
      set({currentScreen: 'memory-choice'})
      return
    }

    //progress
    const currentIndex = SCREENS.indexOf(currentScreen)
    const nextIndex = currentIndex + 1
    set({currentScreen: SCREENS[nextIndex]})
  },
  memoriesCompleted: 0,
  incrementMemoriesCompleted: () => {
    set((state) => ({memoriesCompleted: state.memoriesCompleted + 1}))
  },
  reset: () => {
    set({currentScreen: SCREENS[0], memoriesCompleted: 0})
  },
}))
