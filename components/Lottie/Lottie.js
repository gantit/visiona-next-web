import { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'

import styles from './Lottie.module.scss'

class Lottie extends Component {
  constructor() {
    super()
    this.animationLoaded = this.animationLoaded.bind(this)
    this.setElement = this.setElement.bind(this)
    this.element = null
  }

  componentDidUpdate() {
    this.attachAnimation()
  }

  componentWillUnmount() {
    if (this.animation) {
      try {
        this.animation.destroy()
      } catch (err) {
        console.log('destroy error')
      }
      this.animation = null
    }
    if (this.element) {
      this.element = null
    }
  }

  setElement(elem) {
    this.element = elem
    this.attachAnimation()
  }

  setSegment(init, end) {
    if (this.animation) {
      this.animation.setSegment(init, end)
    }
  }

  setSpeed(speed) {
    if (this.animation) {
      this.animation.setSpeed(speed)
    }
  }

  setDirection(dir) {
    if (this.animation) {
      this.animation.setDirection(dir)
    }
  }

  getCurrentFrame() {
    if (this.animation) {
      return this.animation.currentRawFrame
    }
    return 0
  }

  getFirstFrame() {
    if (this.animation) {
      return this.animation.firstFrame
    }
    return 0
  }

  animationLoaded() {
    const { animationLoaded } = this.props
    if (animationLoaded) {
      animationLoaded()
    }
  }

  goToAndPlay(num, isFrame) {
    if (this.animation) {
      this.animation.goToAndPlay(num, isFrame)
    }
  }

  goToAndStop(num, isFrame) {
    if (this.animation) {
      this.animation.goToAndStop(num, isFrame)
    }
  }

  playSegments(segments, forceFlag) {
    if (this.animation) {
      this.animation.playSegments(segments, forceFlag)
    }
  }

  resetSegments(flag) {
    if (this.animation) {
      this.animation.resetSegments(flag)
    }
  }

  play() {
    if (this.animation) {
      this.animation.play()
    }
  }

  stop() {
    if (this.animation) {
      this.animation.stop()
    }
  }

  loop(value) {
    if (this.animation) {
      this.animation.loop = value
    }
  }

  attachAnimation() {
    const {
      animationData,
      path,
      renderer,
      autoplay,
      loop,
      rendererSettings
    } = this.props
    if (!this.animation && this.element && (animationData || path)) {
      try {
        const params = {
          container: this.element,
          renderer: renderer || 'svg',
          autoplay,
          loop,
          rendererSettings: {
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid slice',
            hideOnTransparent: true,
            className: 'lootieItem'
          }
        }
        if (animationData) {
          params.animationData = animationData
        } else if (path) {
          params.path = path
        }
        if (rendererSettings) {
          params.rendererSettings = {
            ...params.rendererSettings,
            ...rendererSettings
          }
        }
        this.animation = lottie.loadAnimation(params)
        this.animation.addEventListener('DOMLoaded', this.animationLoaded)
      } catch (err) {
        this.element.innerHTML = ''
      }
    }
  }

  render() {
    const {
      animationData,
      animationLoaded,
      autoplay,
      children,
      loop,
      path,
      renderer,
      rendererSettings,
      ...rest
    } = this.props
    const element = <span className={styles.icon} />
    const cloned = cloneElement(children || element, {
      ref: this.setElement,
      ...rest
    })
    return cloned
  }
}

Lottie.defaultProps = {
  animationLoaded: null,
  autoplay: false,
  children: null,
  loop: false,
  path: null,
  renderer: null,
  rendererSettings: null
}

Lottie.propTypes = {
  animationData: PropTypes.shape({}).isRequired,
  animationLoaded: PropTypes.func,
  autoplay: PropTypes.bool,
  children: PropTypes.node,
  loop: PropTypes.bool,
  path: PropTypes.string,
  renderer: PropTypes.string,
  rendererSettings: PropTypes.shape({})
}

export default Lottie
