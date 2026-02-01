import React from 'react'
import Navbar from './Components/Navbar'
import video from './assets/video-2.mp4'
import image_1 from './assets/Schezwan-Paneer.jpg'
import image_2 from './assets/Crispy_Honey_Shrimp.png'
import image_3 from './assets/asian-food.jpg'
import image_4 from './assets/footer-img-1.jpeg'
import image_5 from './assets/logo-png.png'
import image_6 from './assets/logo-png.png'

import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer'






function Home() {
  return (
    <div>
        <div className="home-main-container">

            <div className="video-background">
                <div className="home-head-container">
                    <Navbar/>
                    <div className="home-video-container">
                        <video autoPlay loop muted playsInline>
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className="home-video-heading">
                            <h3 className='prefix'>Indulge In Luxury &</h3><h2>Fine Dining, Like You've</h2><h3 className='suffix'>Never Seen Before</h3>
                        </div>
                        <div className="home-video-button">
                            <button className='home-btn-menu'><a href="#">Our Menu</a></button>
                            <button className='home-btn-reservation'><a href="#">Reservation</a></button>

                        </div>
                    </div>
                </div>
        
            </div>


            <div className="home-second-container">
                <div className="home-second-container-img">
                    <img src={image_1} alt="" className="home-img-1"></img>
                </div>
                <div className="home-second-container-details">
                    <h3>Epicuriosity: Monarque Dining</h3>
                    <h2>Serving premium flavours that's worth savouring</h2>
                </div>
            </div>


            <div className="home-third-container">
                <div className="home-third-container-deatils">
                    <h2>Welcome to Monarque Dining</h2>
                    <p>If you’re searching for the best restaurant in Kochi Vytilla or the best restaurant in Dubai, you’ve come to the right place. At Grand Entree, we offer an unforgettable dining experience that transports you to mythical destinations through our multicultural cuisine. Our talented chefs prepare an incredible variety of delicacies that tantalize your taste buds and leave you craving more. <br />
                    Envision indulging in exceptional flavours within an intimate and comfortable environment, where you don’t have to share the moment with anyone else. Whether you are organizing a private gathering, a celebration, or simply relishing a peaceful meal, our chef service is tailored to leave a lasting impression. Our skilled chefs will curate a dining experience that is both distinctive and unforgettable. <br />
                    At Grand Entree, we take great pride in being a culinary heaven located in both Kochi Vytilla and Dubai. We are committed to transforming every meal into a remarkable occasion, featuring dishes that highlight diverse and rich flavours from around the globe. Our mission is to provide you with the finest of both worlds—genuine, exotic cuisine served in a private and customized atmosphere.
                    So, whether you’re looking to indulge in a gourmet meal, impress your guests, or simply enjoy a delicious feast, Grand Entree is here to make it happen. Join us and experience the magic of dining at the best restaurant in Kochi Vytilla or the best restaurant in Dubai. We invite you to sit back, relax, and let our chefs take you on a culinary journey you’ll never forget.</p>
                </div>
                <div className="home-third-container-img">
                    <img src={image_2} alt="" />
                </div>

            </div>


            <div className="home-fourth-container">
                <div className="home-fourth-container-img">
                    <img src="" alt="" />
                </div>
                <div className="home-fourth-container-header">
                    <h2>Our Menu</h2>
                </div>

            </div>

            <div className="home-fifth-container">
                <div className="home-fifth-container-menu">
                    <div className="home-fifth-container-menu-header">
                        <h1 class="section-title">Europe and Beyond</h1>
                        <h2 class="sub-title">In Our North East</h2>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Louisiana Pasta Escalope</h3>
                        <span class="price">₹410</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>New Orleans Shrimps</h3>
                        <span class="price">₹480</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Baked Crab</h3>
                        <span class="price">₹450</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>French Onion Chicken Soup</h3>
                        <span class="price">₹210</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Tellicherry Chicken Soup</h3>
                        <span class="price">₹160</span>
                    </div>
                    
                    <div className="home-fifth-container-menu-item">
                        <h3>Thukpa Chicken Noodles Soup</h3>
                        <span class="price">₹210</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Manchow Chicken Noodles Soup</h3>
                        <span class="price">₹190</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Talumein Chicken Soup</h3>
                        <span class="price">₹200</span>
                    </div>
                    
                    <div className="home-fifth-container-menu-item">
                        <h3>Tom Kha Chicken Soup</h3>
                        <span class="price">₹210</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>West Lake Lamb Soup</h3>
                        <span class="price">₹220</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Seafood Gumbo Soup</h3>
                        <span class="price">₹260</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Tom Yum Prawns Soup</h3>
                        <span class="price">₹230</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Malabar Seafood Soup</h3>
                        <span class="price">₹245</span>
                    </div>



                </div>




                <div className="home-fifth-container-menu">
                    <div className="home-fifth-container-menu-header">
                        <h1 class="section-title">Traditional South</h1>
                        {/* <h2 class="sub-title">In Our North East</h2> */}
                    </div>

                    {/* <div className="home-fifth-container-menu-item">
                        <h3>Louisiana Pasta Escalope</h3>
                        <span class="price">₹410</span>
                    </div> */}

                    <div className="home-fifth-container-menu-item">
                        <h3>Dum Crab</h3>
                        <span class="price">₹450</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Veg Mango Curry</h3>
                        <span class="price">₹200</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Kappa Crab</h3>
                        <span class="price">₹400</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Alleppy Veg Curry</h3>
                        <span class="price">₹240</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Fish Chuttidichathu</h3>
                        <span class="price">ASPS</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Koonthal Pepper Roast</h3>
                        <span class="price">₹390</span>
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Neelagiri Veg Curry</h3>
                        <span class="price">₹250</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Kairali Fish Vattichathu</h3>
                        <span class="price">ASPS</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Sea Food Bucket (Full/Half)</h3>
                        <span class="price">₹2200/1200</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Soya Chunks Pepper Fry</h3>
                        <span class="price">₹150</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Chicken Perattu</h3>
                        <span class="price">₹350</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Sea Food Platter (Full/Half)</h3>
                        <span class="price">₹2100/1100</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Soya Chunks Mango Curry</h3>
                        <span class="price">₹230</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Malabar Chicken Curry</h3>
                        <span class="price">₹340</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Chicken Cheriyulli Thoran</h3>
                        <span class="price">₹360</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Mushroom Varattiyathu</h3>
                        <span class="price">₹250</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Alleppy Chicken</h3>
                        <span class="price">₹340</span> 
                    </div>

                    <div className="home-fifth-container-menu-item">
                        <h3>Masala Fried Chicken</h3>
                        <span class="price">₹340</span> 
                    </div>

                </div>




            </div>


            <div className="home-sixth-container">
                <div className="home-sixth-container-img">
                    <img src={image_4} alt="" />
                    <div className="home-sixth-container-img-header">
                        <h2>Make an Online Reservation</h2>
                        <div className="home-sixth-container-img-para"> 
                            <a href="#" className="home-sixth-container-link">Reserve Table</a>
                        </div>
                    </div>
                </div>
            </div>

{/* /////////////////////////////////////////////////////////////  */}

            {/* <div className="home-seventh-container">
                <div className="home-seventh-container-logo">
                    <img src={image_6} alt="" />
                </div>
                <div className="home-seventh-container-menus">
                    <ul className="home-seventh-container-menu-list">
                        <li className="nav-list"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-list"><a href="/about" className="nav-link">About</a></li>
                        <li className="nav-list"><a href="/menu" className="nav-link">Menu</a></li>
                        <li className="nav-list"><a href="" className="nav-link">Reservation</a></li>
                        <li className="nav-list"><a href="" className="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div className="home-seventh-container-socials">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-snapchat"></i>
                </div>
            </div> */}



{/* ////////////////////////////////////////////////////////////////////////// */}



                <div>
                    <Footer/>
                </div>


        </div>



    </div>
  )
}

export default Home