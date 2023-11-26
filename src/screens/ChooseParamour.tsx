import React from 'react'
import {useGameStore} from '../store'

export const ChooseParamour = () => {
  const {setNextScreen} = useGameStore((state) => state)
  const onClick = () => {
    setNextScreen()
  }
  return (
    <div onClick={onClick}>
      <h1>Choose Paramour</h1>
    </div>
  )
}
