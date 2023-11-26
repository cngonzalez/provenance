import React from 'react'
import {useGameStore} from '../store'

export const Artwork = () => {
  const {setNextScreen, incrementMemoriesCompleted} = useGameStore((state) => state)
  const onClick = () => {
    incrementMemoriesCompleted()
    setNextScreen()
  }

  return (
    <div onClick={onClick}>
      <h1>Artwork</h1>
    </div>
  )
}
