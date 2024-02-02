import React from 'react'

export const Product = (props) => {
    const p1=150;
    const p4=200;
    const p5=100;
    const p6=300;
    
    const a=(q)=>{
        alert("aa")
       props.Function1(q.target.value);

    }
  return (
    <div class="fashion_section">
         <div id="electronic_main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <h1 class="fashion_taital">Electronic</h1>
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Laptop</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ {p1}</span></p>
                                 <div class="electronic_img"><img src="images/laptop-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#" >Buy Now</a> <button value={p1} onClick={a}>ADDD</button></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Mobile</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >${p4}</span></p>
                                 <div class="electronic_img"><img src="images/mobile-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a><button value={p4} onClick={a}>ADDD</button></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Computers</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/computer-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <h1 class="fashion_taital">Electronic</h1>
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Laptop</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/laptop-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Mobile</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/mobile-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Computers</h4>
                                 <p class="price_text">Start Price  <span
                                //   style="color: #262626;"
                                  >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/computer-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <h1 class="fashion_taital">Electronic</h1>
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Laptop</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/laptop-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Mobile</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/mobile-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Computers</h4>
                                 <p class="price_text">Start Price  <span 
                                //  style="color: #262626;"
                                 >$ 100</span></p>
                                 <div class="electronic_img"><img src="images/computer-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
            <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
            <i class="fa fa-angle-right"></i>
            </a>
         </div>
      </div>
  )
}
