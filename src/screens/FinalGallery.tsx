import React from 'react'
import {useGameStore} from '../store'

export const FinalGallery = () => {
  const {reset} = useGameStore((state) => state)
  const onClick = () => {
    reset()
  }
  return (
    <div onClick={onClick}>
      <h1>Final Gallery</h1>
    </div>
  )
}
