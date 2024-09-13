import { Outlet } from 'react-router-dom'
import { Navbar ,ScrollToTopButton , Footer } from './components'

function Layout() {
  return (
    <>
     <Navbar/>
      <Outlet/>
      <Footer/>
      <ScrollToTopButton/>
     
    
    
    </>
  )
}

export default Layout