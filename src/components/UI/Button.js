import React from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'
import './Button.css'

const STYLE = ['btn--primary']
const SIZE = ['btn--medium','btn--large']
function Button(props) {
    const{to,children,buttonStyle,buttonSize}=props
    const ButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const ButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <div>
      <Router>
         <Link to={to} className="btn-mobile">
            <button className={`btn ${ButtonStyle} ${ButtonSize}`}>
                {children}
            </button>
        </Link>
      </Router>
      
    </div>
  )
}

export default Button
