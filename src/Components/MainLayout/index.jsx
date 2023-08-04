import React from 'react'
import "./style.css"
import Header from '../Header'

const MainLayout = ({ children }) => {
  return (
    <div className='main__layout'>
      <Header />
      { children }
    </div>
  )
}

export default MainLayout;