import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import './App.css'
import Branding from '../assets/Branding.svg'
import Gambar1 from "../assets/Gambar1.png"
import Gambar2 from "../assets/Gambar2.png"
import Gambar3 from "../assets/Gambar3.png"
import Gambar4 from "../assets/Gambar4.png"
import Gambar5 from "../assets/Gambar5.png"
import Gambar6 from "../assets/Gambar6.png"

// Bagian ke 2
import GambarBagian2ke1 from "../assets/GambarBagian2ke1.png"
import GambarBagian2ke2 from "../assets/GambarBagian2ke2.png"
import GambarBagian2ke3 from "../assets/GambarBagian2ke3.png"


// Bagian ke 3
import GambarBagian3KE1 from "../assets/GambarBagian3KE1.png"
import LogoF from "../assets/LogoF.svg"
import GambarBagian3KE2 from "../assets/GambarBagian3KE2.png"
import LogoSegitiga from "../assets/LogoSegitiga.png"



// Bagian ke 4
import Gambar1Bagian4ke1 from "../assets/Gambar1Bagian4ke1.png"
import Gambar2Bagian4ke2 from "../assets/Gambar2Bagian4ke2.png"
import Gambar3Bagian4ke3 from "../assets/Gambar3Bagian4ke3.png"


// Bagian ke 5
import Gambar41 from "../assets/Gambar41.png"
import Gambar51 from "../assets/Gambar51.png"
import Gambar61 from "../assets/Gambar61.png"

//Bagian ke 6
import Gambar71 from "../assets/Gambar71.png"
import Gambar81 from "../assets/Gambar81.png"
import Gambar91 from "../assets/Gambar91.png"

//Bagian ke 7
import Gambar101 from "../assets/Gambar101.png"
import Gambar111 from "../assets/Gambar111.png"
import Gambar121 from "../assets/Gambar121.png"

//Bagian ke 8
import Gambar131 from "../assets/Gambar131.png"
import Gambar141 from "../assets/Gambar141.png"
import Gambar151 from "../assets/Gambar151.png"

//Bagian ke 9
import Gambar161 from "../assets/Gambar161.png"
import Gambar171 from "../assets/Gambar171.png"

//Bagian ke 10
import Gambar181 from "../assets/Gambar181.png"
import Gambar191 from "../assets/Gambar191.png"

//Bagian ke 11
import Gambar201 from "../assets/Gambar201.png"
import Gambar211 from "../assets/Gambar211.png"
import Gambar221 from "../assets/Gambar221.png"
import Gambar231 from "../assets/Gambar231.png"
import Gambar241 from "../assets/Gambar241.png"

import Gambar251 from "../assets/Gambar251.jpeg"
import Gambar261 from "../assets/Gambar261.jpeg"


import Gambar271 from "../assets/Gambar271.jpeg"


function Utama() {

  useEffect(() => {

    gsap.fromTo('.divgambar', { opacity: 0 }, { delay: 1, opacity: 1, duration: 1, })

    gsap.fromTo('.divgambar2', { opacity: 0 }, { opacity: 1, delay: 1, duration: 1 })

    gsap.fromTo(".containerAtas", { opacity: 0 }, { delay: 0.5, opacity: 1 })

    gsap.to(".TextBranding", { y: -10, opacity: 1, delay: 0.5 })

    gsap.to(".TextPresenting", { y: -10, opacity: 1, delay: 0.5 })



    gsap.to(".BuyTemplate", { y: -10, opacity: 1, delay: 0.5, duration: 0.5 })
    gsap.to(".ExplorePages", { y: -10, opacity: 1, delay: 0.5, duration: 0.5 })




    gsap.to(".animasitext", {
      opacity: 1, y: -10, duration: 0.5, delay: 0.2, scrollTrigger: {
        trigger: ".animasitext",
        start: "100px center",
        end: "500px center",

      }
    })



    gsap.fromTo(".divgambarBagian2", { opacity: 0, y: 50 }, {
      opacity: 1, stagger: 0.4, y: 0, delay: 0.5, duration: 0.5, scrollTrigger: {
        trigger: ".divgambarBagian2",
      }
    })


    gsap.fromTo(".wrapper", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 1, scrollTrigger: {
        trigger: ".wrapper",
      }
    })

    gsap.fromTo(".wrapper2", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".wrapper2",
      }
    })


    gsap.fromTo(".divtitlee", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 1, scrollTrigger: {
        trigger: ".divtitlee",
      }
    })




    gsap.fromTo(".BuyTem", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".BuyTem",
      }
    })

    gsap.fromTo(".AllDivGambar", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".AllDivGambar",
      }
    })


    gsap.fromTo(".AllDivGambar2", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".AllDivGambar2",
      }
    })

    gsap.fromTo(".AllDivGambar3", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".AllDivGambar3",
      }
    })

    gsap.fromTo(".AllDivGambar4", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".AllDivGambar4",
      }
    })

    gsap.fromTo(".AllDivGambar5", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".AllDivGambar5",
      }
    })

    gsap.fromTo(".AllDivGambar6", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".AllDivGambar6",
      }
    })




    gsap.fromTo(".divUntility", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 1, scrollTrigger: {
        trigger: ".divUntility",
      }
    })


    gsap.fromTo(".Titlepart111", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 0.7, scrollTrigger: {
        trigger: ".Titlepart111",
      }
    })




    gsap.fromTo(".wrapper123", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 1, scrollTrigger: {
        trigger: ".wrapper123",
      }
    })




    gsap.fromTo(".contact-section", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 1, scrollTrigger: {
        trigger: ".contact-section",
      }
    })






    gsap.fromTo(".pages", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, stagger: 0.4, duration: 1, scrollTrigger: {
        trigger: ".pages",
      }
    })



    gsap.fromTo(".pagess1", { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, delay: 1, duration: 1, scrollTrigger: {
        trigger: ".pagess1",
      }
    })











  }, [])



  return (
    <>

      <div className='ALLDIV'>

        <div className='AlLDIVCONTAINER'>


          {/* CONTAINER */}

          <div className='containerAtas'>


            <div className='divBranding'>
              <a href="/">
                <img style={{ width: 250 }} src={Branding} alt="Branding" />
              </a>
            </div>



            <div style={{ display: "flex", gap: "400px" }}>

              <div style={{ display: "flex", gap: 35 }}>
                <a href='/' className='alltext'>Home</a>
                <a href='/' className='alltext'>About</a>
                <a href='/' className='alltext'>Blog</a>
                <a href='/' className='alltext'>Pages</a>
                <a href='/' className='alltext'>Cart</a>
              </div>

              <div>

                <p  className='contactus'> <a className='linkCS'  href='/'>Contact us</a></p>

              </div>


            </div>

          </div>

          {/* AKHIR CONTAINER */}


          {/* ISI KE SATU */}

          <div>

            <div style={{ display: "flex", }}>

              <div style={{ marginRight: "100px" }}>

                <p className='TextBranding'>Brandingfolio X
                  Webflow Template</p>

                <p className='TextPresenting'>Presenting Brandingfolio X, the ultimate Branding <br /> Agency Webflow Template.</p>

                <div style={{ display: "flex", gap: "20px" }}>

                  <p className='BuyTemplate'>Buy template</p>

                  <p className='ExplorePages'>Explore pages</p>
                </div>

              </div>


              <div style={{ display: "flex", gap: "20px" }}>
                <div className='divgambar' >

                  <img className='Gambar' src={Gambar1} alt='gambar1' />

                  <img className='Gambar' src={Gambar2} alt='gambar2' />

                  <img className='Gambar' src={Gambar3} alt='gambar3' />


                </div>

                <div className='divgambar2' >

                  <img className='Gambar' src={Gambar4} alt='gambar4' />

                  <img className='Gambar' src={Gambar5} alt='gambar5' />

                  <img className='Gambar' src={Gambar6} alt='gambar6' />

                </div>
              </div>






            </div>



          </div>


          {/* AKHIR ISI KE SATU */}




          {/* ISI KE DUA */}
          <div>

            <div className='animasitext'>

              <div className='divtext2'>
                <p>What is included in</p>
                <p style={{ marginTop: "-75px" }}>Brandingfolio X</p>
              </div>

              <div className='divtext2part2'>

                <p> <b>Brandingfolio X Webflow</b> Template includes over <b>19</b></p>
                <p style={{ marginTop: "-10px" }}><b>pages</b> in total, with more than <b>35 sections</b>.</p>

              </div>


            </div>

            <div className='divsemuagambar' style={{ display: "flex", justifyContent: "center", gap: 50, marginLeft: -50 }}>


              <div className='divgambarBagian2'>
                <img className="GambarBagian2" src={GambarBagian2ke1} alt="gambarBagian2ke1" />
                <div className="textBox">
                  <p className='textnya'>19+ Pages</p>
                </div>
              </div>

              <div className='divgambarBagian2'>
                <img className="GambarBagian2" src={GambarBagian2ke2} alt="gambarBagian2ke2" />
                <div className="textBox">
                  <p className='textnya'>35+ Sections</p>
                </div>
              </div>


              <div className='divgambarBagian2'>
                <img className="GambarBagian2" src={GambarBagian2ke3} alt="gambarBagian2ke3" />
                <div className="textBox">
                  <p className='textnya'>25+ Styles & Symbols</p>
                </div>
              </div>


            </div>




            <div>



              <div className="wrapper">
                <div className="textBox2">
                  <img src={LogoF} alt='logoF' />
                  <p style={{ fontSize: 30, fontWeight: "bold" }}>Figma file included</p>
                  <p>Send us an email to<br />
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">brandingfoliox@brixtemplates.com</a> with your<br />
                    purchase receipt, and we will send you the editable<br />
                    Figma file for the Brandingfolio X template.
                  </p>

                  <div style={{ maxWidth: 185 }}>
                    <p className='RequestFigmaFile'>Request figma file</p>
                  </div>

                </div>
                <img className="imageBox" src={GambarBagian3KE1} alt="GambarBagian3KE1" />
              </div>





              <div className="wrapper2">
                <div className="textBox2">

                  <img style={{ marginLeft: -30 }} className="imageBox" src={GambarBagian3KE2} alt="GambarBagian3KE2" />



                </div>

                <div style={{ marginRight: 100 }}>

                  <img style={{ width: 100 }} src={LogoSegitiga} alt='LogoSegitiga' />
                  <p style={{ fontSize: 30, fontWeight: "bold" }}>Looking for more<br /> amazing Webflow<br /> Templates?</p>
                  <p>Take a look at our collection of 100+<br /> premium Webflow Templates at BRIX<br /> Templates.
                  </p>

                  <div style={{ maxWidth: 185 }}>
                    <p className='BrowserTem'>Browser templates</p>
                  </div>
                </div>

              </div>



              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className='BuyTem'>Buy template</p>
              </div>

            </div>







          </div>
          {/* AKHIR ISI KE DUA */}







          <div className='AllDIVMAIN' style={{ marginLeft: -50 }}>




            <div className='divtitlee' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <p style={{ fontSize: 65, fontWeight: "bold" }}>Main pages</p>
              <p style={{ marginTop: -50 }}>Take a look at the main pages included in the Brandingfolio X Template</p>
            </div>




            <div className='AllDivGambar' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar1Bagian4ke1} alt="gambar1Bagian4ke1" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Home V1</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar2Bagian4ke2} alt="gambar2Bagian4ke2" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Home V2</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar3Bagian4ke3} alt="gambar3Bagian4ke3" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Home V3</p>
                </div>
              </div>








            </div>

            <div className='AllDivGambar2' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar41} alt="gambar1Bagian4ke1" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>About</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar51} alt="gambar2Bagian4ke2" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Blog V1</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar61} alt="gambar3Bagian4ke3" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Blog V2</p>
                </div>
              </div>

            </div>



            <div className='AllDivGambar3' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar71} alt="gambar1Bagian4ke1" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Blog V3</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img style={{ width: 310 }} className="GambarBagian2" src={Gambar81} alt="gambar2Bagian4ke2" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Blog post</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar91} alt="gambar3Bagian4ke3" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Blog category</p>
                </div>
              </div>

            </div>


            <div className='AllDivGambar4' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar101} alt="gambar1Bagian4ke1" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Team member</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar111} alt="gambar2Bagian4ke2" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Portfolio</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar121} alt="gambar3Bagian4ke3" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Portfolio single</p>
                </div>
              </div>

            </div>



            <div className='AllDivGambar5' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar131} alt="gambar1Bagian4ke1" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Packages</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar141} alt="gambar2Bagian4ke2" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Packages single</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar151} alt="gambar3Bagian4ke3" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Contact V1</p>
                </div>
              </div>

            </div>


            <div className='AllDivGambar6' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar161} alt="gambar1Bagian4ke1" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Contact V2</p>
                </div>
              </div>

              <div className='divgambarBagian11'>
                <img className="GambarBagian2" src={Gambar171} alt="gambar2Bagian4ke2" />
                <div style={{ backgroundColor: "white" }} className="textBox">
                  <p className='textnya'>Contact V3</p>
                </div>
              </div>


            </div>



            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className='BuyTem'>Buy template</p>
            </div>





          </div>

          <div className='divUntility' style={{ marginTop: 300 }}>

            <p className='untility'>Utility pages</p>

            <p className='TakeLook'>Take a look at the utility pages included in the Brandingfolio X Template.</p>

          </div>


          <div className='AllDivGambar6' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: 30 }}>


            <div className='divgambarBagian11'>
              <img className="GambarBagian2" src={Gambar181} alt="gambar1Bagian4ke1" />
              <div style={{ backgroundColor: "white" }} className="textBox">
                <p className='textnya'>404 Not found</p>
              </div>
            </div>

            <div className='divgambarBagian11'>
              <img className="GambarBagian2" src={Gambar191} alt="gambar2Bagian4ke2" />
              <div style={{ backgroundColor: "white" }} className="textBox">
                <p className='textnya'>Password protected</p>
              </div>
            </div>





          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 250, marginTop: -50 }}>
            <p className='BuyTem'>Buy template</p>
          </div>


          <div className='AllDIVMAIN' style={{ marginLeft: -50 }}>



            <div className='Titlepart111'>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "lightgray",
                fontFamily: "'Helvetica Neue', Arial, sans-serif"
              }}>
                <div style={{
                  textAlign: 'center',
                }}>
                  <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                  }}>
                    <span style={{ color: '#333' }}>The Brandingfolio</span>
                    <span style={{ color: '#333' }}>X</span>
                    <span style={{ color: '#333' }}>Webflow</span>
                  </h1>

                  <p style={{
                    fontSize: '3.5rem',
                    color: '#333',

                    marginTop: -40
                  }}>
                    Template also comes with.
                  </p>

                  <p style={{
                    fontSize: '3.5rem',
                    color: '#333',
                    marginTop: -55
                  }}>
                    more surprises...
                  </p>
                </div>
              </div>

            </div>


            <div className="wrapper123">
              <div className="textBox2">
                <p style={{ fontSize: 30, fontWeight: "bold" }}>3 Headers and Footers</p>
                <p>With a total of 3 different headers and footers, you<br />
                  can easily customize the Brandingfolio X Webflow<br />
                  Template to fit your company needs<br /> and requirements.</p>

                <div style={{ maxWidth: 140 }}>
                  <p style={{ backgroundColor: "black", color: "white", padding: 10 }} className='RequestFigmaFile'>Buy template</p>
                </div>

              </div>
              <img className="imageBox" src={Gambar201} alt="GambarBagian3KE1" />
            </div>



            <div className="wrapper123">
              <div className="textBox2">

                <img style={{ marginLeft: -30 }} className="imageBox" src={Gambar211} alt="GambarBagian3KE2" />



              </div>

              <div style={{ marginRight: 100 }}>


                <p style={{ fontSize: 30, fontWeight: "bold", marginLeft: 100 }}>3 Notification Bars</p>
                <p style={{ marginLeft: 100 }}>If you are looking to get more sales, use one of our 3<br />
                  notification bars included in the Brandingfolio X<br />
                  Webflow Template, and start promoting your <br />
                  products or services.</p>

                <div style={{ maxWidth: 140, marginLeft: 100 }}>
                  <p style={{ backgroundColor: "black", color: "white", padding: 10 }} className='BrowserTem'>Buy template</p>
                </div>
              </div>

            </div>


            <div className="wrapper123">
              <div className="textBox2">

                <p style={{ fontSize: 30, fontWeight: "bold" }}>Custom Icon Set</p>
                <p>The Brandingfolio X Webflow Template includes 3<br />
                  sets of custom icons (rounded, square and filled), so<br />
                  you can easily use more icon fonts in your template.</p>

                <p>No matter if you are looking to add another social<br />
                  media icon in the footer, or change the cart icon in<br />
                  the header, we got you covered.</p>



                <div style={{ maxWidth: 185, display: "flex", gap: 30 }}>

                  <p style={{ backgroundColor: "black", color: "white", padding: 10 }} className='RequestFigmaFile'>Buy template</p>

                  <p className='RequestFigmaFile'>Download icon set</p>
                </div>

              </div>
              <img className="imageBox" src={Gambar221} alt="GambarBagian3KE1" />
            </div>


            <div className="wrapper123">
              <div className="textBox2">

                <img style={{ marginLeft: -30 }} className="imageBox" src={Gambar231} alt="GambarBagian3KE2" />



              </div>

              <div style={{ marginLeft: 100 }}>


                <p style={{ fontSize: 30, fontWeight: "bold" }}>Social Media Assets</p>
                <p>Our Brandingfolio X Webflow Template Figma file<br /> includes a collection of social media covers that<br /> match with the Webflow Template design (for<br /> Facebook, Twitter and LinkedIn), so you can easily edit, customize, and use them for your own social media profiles.</p>

                <div style={{ maxWidth: 120 }}>
                  <p style={{ backgroundColor: "black", color: "white", padding: 10 }} className='BrowserTem'>Buy template</p>
                </div>
              </div>

            </div>


            <div className="wrapper123">
              <div className="textBox2">

                <p style={{ fontSize: 30, fontWeight: "bold", }}>Email Signature</p>
                <p> Our Brandingfolio X Webflow Template Figma file<br /> includes 2 custom email signature templates that<br /> match with the Webflow template, and you can use<br /> them to impress your customers with an amazing<br /> email signature.</p>
                <div style={{ maxWidth: 120 }}>
                  <p style={{ backgroundColor: "black", color: "white", padding: 10 }} className='BrowserTem'>Buy template</p>
                </div>

              </div>
              <img className="imageBox" src={Gambar241} alt="GambarBagian3KE1" />
            </div>

          </div>

          <div className='wrapper123' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 50, marginTop: 300 }}>


            <img style={{ width: 550 }} className="imageBoxx" src={Gambar251} alt="GambarBagian3KE1" />
            <img style={{ width: 570 }} className="imageBoxx" src={Gambar261} alt="GambarBagian3KE1" />

          </div>


          <div style={{ marginTop: 300, marginLeft: -51, backgroundColor: "black" }}>

            {/* <div>

              <div className="contact-section">

                <div className="text-container">
                  <h2 >Contact us today!</h2>
                  <p>
                    Nunc tortor aliquam nec sed nunc convallis tincidunt quam<br/>
                    felis volutpat ut consequat turpis risus lacus hendrerit.
                  </p>
                </div>

                <div className="button-container">

                  <img style={{width:400}} src={Gambar271} alt='Gambar271' />
                  <button className="contact-button">Contact us</button>
                  <button className="projects-button">Our projects</button>

                </div>

              </div>
            </div> */}






            <div className="contact-section">
              <div className="left-text">
                <h2 >Contact us today!</h2>
                <p>
                  Nunc tortor aliquam nec sed nunc convallis tincidunt quam<br />
                  felis volutpat ut consequat turpis risus lacus hendrerit.
                </p>
              </div>

              <div className="right-image">
                <img className="background-image" src={Gambar271} alt="Gambar271" />
                <div className="overlay-buttons">
                  <button style={{ backgroundColor: "black", color: "white" }} className="contact-button">Contact us</button>
                  <button style={{ color: 'black', backgroundColor: "white", }} className="projects-button">Our projects</button>
                </div>
              </div>
            </div>




            <div style={{ color: "white", marginTop: 50, }}>





              {/* 
              <div style={{ display: "flex", marginLeft: 95 }} className='footer-bot'>
                <div className='layout1-footer'>

                  <div className='divBranding'>
                    <a href="/">
                      <img className='imagebro' style={{ width: 300 }} src={Branding} alt="Branding" />
                    </a>
                  </div>

                  <p >
                    Copyright © Brandingfolio X | Designed by <br />{' '}
                    <a style={{ color: "white" }} href='#'>BRIX Templates</a> - Powered by <a style={{ color: "white" }} href='#'>Webflow</a>
                  </p>
                  <h4>Subscribe to our newsletter</h4>

                  <label  >
                    <input style={{padding:10}} type="email" placeholder="Enter your email address"  />
                    <button style={{backgroundColor:"white",padding:10}}>Subscribe</button>
                  </label>

                </div> */}

              {/* <div className='layout2-footer'>
                  <h4>Pages</h4>
                  <div className='pages-footer'>
                    <div>
                      <ul>
                        <li>
                          <a href='#'>Preview</a>
                        </li>
                        <li>
                          <a href='#'>Home V1</a>
                        </li>
                        <li>
                          <a href='#'>Home V2</a>
                        </li>
                        <li>
                          <a href='#'>Home V3</a>
                        </li>
                        <li>
                          <a href='#'>About</a>
                        </li>
                        <li>
                          <a href='#'>Blog V1</a>
                        </li>
                        <li>
                          <a href='#'>Blog V2</a>
                        </li>
                        <li>
                          <a href='#'>Blog V3</a>
                        </li>
                        <li>
                          <a href='#'>Blog post</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href='#'>Blog category</a>
                        </li>
                        <li>
                          <a href='#'>Packages</a>
                        </li>
                        <li>
                          <a href='#'>Packages single</a>
                        </li>
                        <li>
                          <a href='#'>Contact v1</a>
                        </li>
                        <li>
                          <a href='#'>Contact v2</a>
                        </li>
                        <li>
                          <a href='#'>Contact v3</a>
                        </li>
                        <li>
                          <a href='#'>Portfolio</a>
                        </li>
                        <li>
                          <a href='#'>Portfolio Single</a>
                        </li>
                        <li>
                          <a href='#'>Team member</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}

              {/* <div className='layout3-footer'>
                  <h4>Utility pages</h4>
                  <ul>
                    <li>
                      <a href='#'>Blog category</a>
                    </li>
                    <li>
                      <a href='#'>Packages</a>
                    </li>
                    <li>
                      <a href='#'>Packages single</a>
                    </li>
                    <li>
                      <a href='#'>Contact v1</a>
                    </li>
                    <li>
                      <a href='#'>Contact v2</a>
                    </li>
                    <li>
                      <a href='#'>Contact v3</a>
                    </li>
                    <li>
                      <a href='#'>Portfolio</a>
                    </li>
                    <li>
                      <a href='#'>Portfolio Single</a>
                    </li>
                    <li>
                      <a href='#'>Team member</a>
                    </li>
                  </ul>
                </div> */}

              {/* <div className='layout4-footer'>
                  <h4>Follow us</h4>
                  <ul>
                    <li>
                      <a href='#'><img src="Facebook.svg" alt="" />Facebook</a>
                    </li>
                    <li>
                      <a href='#'><img src="Twitter.svg" alt="" />Twitter</a>
                    </li>
                    <li>
                      <a href='#'><img src="Instagram.svg" alt="" />Instagram</a>
                    </li>
                    <li>
                      <a href='#'> <img src="Linkdin.svg" alt="" />LinkedIn</a>
                    </li>
                    <li>
                      <a href='#'><img src="Youtube.svg" alt="" />Youtube</a>
                    </li>
                  </ul>
                </div> */}


              {/* </div> */}







            </div>


            <footer className="footer">

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", justifyContent: "space-evenly" }}>

                <div className='pagess1'>

                  <div className="footer-header">
                    <div className='divBranding'>
                      <a href="/">
                        <img className='imagebro' style={{ width: 300 }} src={Branding} alt="Branding" />
                      </a>
                    </div>
                  </div>

                  <p className="copyright">
                    Copyright © Brandingfolio X | Designed by<br /> <a style={{ color: "white" }} href="#" target="_blank" rel="noopener noreferrer">BRIX Templates</a> - Powered by
                    <a style={{ color: "white" }} href="#" target="_blank" rel="noopener noreferrer">Webflow</a>
                  </p>
                  <div className="newsletter">
                    <h3>Subscribe to our newsletter</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </div>


                </div>




                <div className="footer-links">

                  <div className="pages">
                    <h4>Pages</h4>
                    <ul >
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Preview</a>   </li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Home V1</a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Home V2</a>  </li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Home V3</a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>About</a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Blog V1</a>  </li>
                      <li className='ALLANIMATION'>  <a className='linknya' href='#'>Blog V2</a> </li>
                      <li className='ALLANIMATION'>  <a className='linknya' href='#'>Blog V3</a> </li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Blog post</a> </li>
                    </ul>
                  </div>



                  <div style={{ marginTop: 30 }} className="pages">

                    <ul>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Blog category </a> </li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Packages </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Packages single </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Contact v1 </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Contact v2 </a></li>
                      <li className='ALLANIMATION'>  <a className='linknya' href='#'>Contact v3 </a></li>
                      <li className='ALLANIMATION'>  <a className='linknya' href='#'>Portfolio </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Portfolio Single </a></li>
                      <li className='ALLANIMATION'>  <a className='linknya' href='#'>Team member </a></li>
                    </ul>
                  </div>



                  <div className="pages">
                    <h4>Utility pages</h4>
                    <ul>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Style guide </a> </li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Start here </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>404 Not found </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Password protected </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Licenses</a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Changelog</a></li>
                    </ul>
                  </div>

                  <div className="pages">
                    <h4>Follow us</h4>
                    <ul>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Facebook </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Twitter </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Instagram </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>LinkedIn </a></li>
                      <li className='ALLANIMATION'> <a className='linknya' href='#'>Youtube </a></li>
                    </ul>
                  </div>
                </div>

              </div>



            </footer>


          </div>



        </div>
      </div>
    </>
  )
}

export default Utama;
