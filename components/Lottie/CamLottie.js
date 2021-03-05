import React, { useState, useEffect } from 'react'
import Lottie from './lottie'
import animationData from './cam.json'

const CamLottie = ({ animate, children }) => {
  const [element, setElement] = useState(null)
  const [isPlay, setPlay] = useState(null)

  useEffect(() => {
    if (animate && element) {
      element.goToAndPlay(0)
    } else if (!animate && element) {
      element.goToAndStop(0)
    }
  }, [animate, element])

  const checkAnimation = () => {
    if (animate) {
      element.goToAndPlay(0)
    } else {
      element.goToAndStop(0)
    }
  }

  const control = () => {
    if (isPlay) {
      element.play()
    } else {
      element.pause()
    }
    setPlay(!isPlay)
  }

  return (
    <Lottie
      ref={(elem) => setElement(elem)}
      animationLoaded={checkAnimation}
      animationData={animationData}
      loop
      renderer="canvas"
      onClick={() => control()}
    >
      {children}
    </Lottie>
  )
}

export default CamLottie
