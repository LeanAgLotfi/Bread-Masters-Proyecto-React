import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="ContenedorLogo">
        <Link to={'/'}><img src="https://res.cloudinary.com/dsoa7ssat/image/upload/v1665593101/Panes/bread-masters_gvwrjv.png" alt="logo" /></Link>
    </div>
  )
}
