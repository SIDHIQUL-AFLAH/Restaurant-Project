import React from 'react'
import img1 from './assets/chef-in-kitchen.png'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function About() {
  return (
    <div className='about-main-container'>
        <Navbar/>
        <div className="about-first-container">
            <div className="about-first-container-para">
                <div className="about-first-container-heading">
                    <h1>
                        <span>Our Story</span>
                        <br /> More than Great Food
                    </h1>
                </div>
                <p className="about-first-container-para-paragraph">
                    Every great meal begins with a story. Ours began with a simple belief: food has the power to bring people together.
                    <br />
                    <br />
                    This restaurant was born from a deep love for cooking and an even deeper love for sharing it with others. Long before we opened our doors, our kitchen was a place of laughter, late-night conversations, family traditions, and recipes passed down with care. We realized that the most meaningful moments in life often happen around a table, and we wanted to create a space where those moments could be shared with everyone.
                    <br />
                    <br />
                    We started this restaurant with the thought that good food tells a story—of culture, of passion, of patience. Each dish on our menu reflects our journey, our values, and our commitment to serving food we are proud of. We cook the way we would for our own family: with care, attention, and heart.
                </p>
            </div>
            <div className="about-first-container-image">
                <img src={img1} alt="" />
            </div>
        </div>


        <div className="about-second-container">
            <div className="about-second-container-heading">
                <h3>Heritage</h3>
                <h1>Serving Greatness Since 1989</h1>
            </div>
            <div className="about-second-container-menus">
                <div className="about-second-container-menus-card">
                    <div className="about-second-container-menus-cards">
                        <h3>Founded On Family Values</h3>
                        <p>Our story began around a family table, where food was more than a meal—it was a way to connect. Every recipe we serve is rooted in tradition, care, and togetherness, passed down through generations. We believe great food is made with patience, love, and respect for the people we serve.</p>
                    </div>
                    <div className="about-second-container-menus-cards">
                        <h3>A Little Taste of Tuscany</h3>
                        <p>Inspired by the heart of Tuscany, our dishes celebrate simple ingredients elevated with bold flavors. From slow-cooked sauces to freshly prepared meals, each plate reflects the warmth and charm of Italian countryside dining. It’s a taste of comfort, crafted to transport you with every bite.</p>
                    </div>
                    <div className="about-second-container-menus-cards">
                        <h3>Authentic Recipes Reimagined</h3>
                        <p>While we honor classic recipes, we’re not afraid to reinvent them. Our chefs blend time-tested techniques with modern creativity to bring you flavors that feel familiar yet exciting. The result is a menu that respects tradition while embracing innovation—crafted for today’s palate.</p>
                    </div>
                </div>
            </div>

        </div>


        <Footer/>

    </div>
  )
}

export default About