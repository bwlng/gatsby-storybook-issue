import React from "react"
import { Link } from "gatsby"

export const Button = ({ children, to }) => {
  return (
    <Link to={to}>{children}</Link>
  )
}

export default Button