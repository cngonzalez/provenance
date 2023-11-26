import React from 'react'
import {useGameStore} from '../store'

export const MemoryDetail = () => {
  const {setNextScreen} = useGameStore((state) => state)
  const onClick = () => {
    setNextScreen()
  }

  return (
    <div onClick={onClick}>
      <h1>MemoryDetail</h1>
    </div>
  )
}
