import React from "react"
import { Link } from "gatsby"

export const Button = ({ children, to }) => {
  return (
    <Link style={{ border: '1px solid red' }} to={to}>{children}</Link>
  )
}

export default Button