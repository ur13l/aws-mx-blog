import React from "react"
import "../styles/global.css"

/**
 * @function Title
 * @author Uriel Infante
 * @param {string} title
 * @param {string} subTitle
 * Title component, showing a subtitle over the real title
 */
const Title = ({title, subtitle}) => {
    return (
      <div>
        <h4>{subtitle}</h4>
        <h1>{title}</h1>
      </div>
    )
  }

export default Title
