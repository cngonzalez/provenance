import React from 'react'
import {Intro, ChooseParamour, MemoryChoice, MemoryDetail, Artwork, FinalGallery} from './screens'
import {useShallow} from 'zustand/react/shallow'
import {useGameStore} from './store'

const screens = {
  intro: <Intro />,
  'choose-paramour': <ChooseParamour />,
  'memory-choice': <MemoryChoice />,
  'memory-detail': <MemoryDetail />,
  artwork: <Artwork />,
  'final-gallery': <FinalGallery />,
}

function App() {
  const screen = useGameStore(useShallow((state) => state.currentScreen))

  return <div className="h-screen flex items-center justify-center">{screens[screen]}</div>
}

export default App
