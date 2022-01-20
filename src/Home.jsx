import React from 'react';
import land from "./images/image.jpg"


const Home =() => {
  return (
    <>
    <section id="header" class="header">
    <div class= "container-fluid nav_bg">
            <div class= 'row'>
                <div class= "col-10 mx-auto">
                    <div class="mainText col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>Start editing your photos with <strong class="brand-name">PhotoEditor</strong></h1>
                        <h2 class="my-3 plainText" >Anytime anywhere at your own convinence</h2>
                        <div class= "mt-3">
                            <a href="./editor" class= "btn-get-started">Get Started</a>
                        </div>
                   </div>

                   <div class= 'col-lg-6 order-1 order-lg-2' >
                       <image src={land}/>
                   </div>
                </div>
            </div>
    </div>
    
    </section>
    </>
  )
}

 export default Home;

