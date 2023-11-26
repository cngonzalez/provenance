import React from 'react'
import {useGameStore} from '../store'

export const MemoryChoice = () => {
  const {setNextScreen, memoriesCompleted} = useGameStore((state) => state)
  const onClick = () => {
    setNextScreen()
  }

  return (
    <div onClick={onClick}>
      <h1>MemoryChoice: memory {memoriesCompleted}</h1>
    </div>
  )
}
