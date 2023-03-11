import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Error404 = () => {
  return (
    <>
    <Header/>
      <main>
  <section className="hero_single general">
    <div className="wrapper">
      <div className="container">
        <form>
          <img src="/img/404.svg" alt className="img-fluid" />
      
        </form>
      </div>
    </div>
  </section>
  {/* /hero_single */}
</main>

    <Footer/>
    
    </>
  )
}

export default Error404