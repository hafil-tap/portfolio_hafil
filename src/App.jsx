import React from "react";
import './App.css'
function App(){

  return(
    <>
    <header >
      <title>Frontend Developer</title>
      <h3>Name:Hafil</h3>
      <h3>Frontend Developer</h3>
    </header>

    <section className="about">
      <p>Hello,My name is Mohammed Hafil i love to code and currently i doing my Btech under Kalvium</p>
    </section>

    <section className="Project">
      <ul>
<a>Project 1</a><br></br>
<a>Project 2</a>

      </ul>
    </section>


    <footer>
      <div className="foo">

      <h3>Contactes</h3>
      <h4>Emial:mohammed.hafil@kalvium.com</h4>
      <h4>Mobile No:9988044561</h4> 
      </div>
    </footer>
    </>

  )
}
export default App;