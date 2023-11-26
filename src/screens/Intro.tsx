import React from 'react'
import {useGameStore} from '../store'

export const Intro = () => {
  const {setNextScreen} = useGameStore((state) => state)
  const onClick = () => {
    setNextScreen()
  }
  return (
    <div onClick={onClick}>
      <h1>Intro hello</h1>
    </div>
  )
}
