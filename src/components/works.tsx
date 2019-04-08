import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'redux-react-hook'
import * as actions from '../actions/works'
import * as THREE from 'three'
// import * as CSS2D from 'three/examples/js/renderers/CSS2DRenderer'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.requestGetWorks())
    if (glroot && glroot.current) {
      glroot.current.appendChild(Renderer())
    }
  }, [])

  const glroot = useRef<HTMLDivElement>(null)

  const Renderer = () => {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    return renderer.domElement
  }

  return (
    <div >
      <div ref={glroot}>
        <div>hoge</div>
      </div>
    </div>
  )
}
