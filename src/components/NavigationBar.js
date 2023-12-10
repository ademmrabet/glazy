import React from 'react'
import '../App.css'

function NavigationBar() {
  return (
    <div class="navbar">
        <div class="links">
        <div>Logo</div>
        <div><a href='#'>Home</a></div>
        <div><a href='#'>Products</a></div>
        <div>Login</div>
        <div>Cart</div>
        </div>
    </div>
  )
}

export default NavigationBar