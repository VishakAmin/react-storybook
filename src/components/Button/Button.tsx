import React, { ReactNode } from 'react'
//import './Button.css'
import * as styles from './Button.css'

interface props {
  children : ReactNode,
  variant : any[]
}

const Button = (props : props) => {
  const {variant = "primary", children, ...rest} = props
  return (
    <button className={`${styles[variant]} ${styles.button}`} {...rest}> 
      {children}
    </button>
  )
}

export default Button
