import React, { useState, useEffect, Fragment } from 'react'
import './style.css'

// reference: https://github.com/devilwjp/veaury_in_nuxtjs

export default function () {
  const [count, setCount] = useState(0)
  let timer
  useEffect(() => {
    timer = setInterval(() => setCount((prevState) => prevState + 1), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Fragment>
      <img
        src="https://github.com/devilwjp/VueReact/assets/38802722/dd7ccd14-4e02-4f4c-bf59-bc0f95088d82"
        style={{ margin: '50px auto 0', height: 100 }}
      />
      <div
        style={{ margin: '50px auto', width: 500, textAlign: 'center' }}
        className={'react-background'}
      >
        <b>The component should use client-side rendering.</b>
        <br />
        <b style={{ color: '#0066ff' }}>This component is React component!</b>
        <br />
        <b>count: {count}</b>
      </div>
    </Fragment>
  )
}
