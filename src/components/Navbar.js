import React, {useEffect} from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import {MdContactPhone, MdHome} from 'react-icons/md'
import {GiOpenBook} from 'react-icons/gi'
import {FaPaintBrush, FaCode} from 'react-icons/fa'
import {Link} from 'gatsby'

const Navbar = () => {
    const tl = gsap.timeline({paused: true});
    useEffect(() =>{

        tl.to('nav, .btnBox', .5,{
            width: '100%',
            ease: 'expo.Out'
        }).from('li', .25, {
            opacity: 0,
            x: -125,
            stagger: .25
        })
        tl.from('.close', .05,{
            display: 'none',
            delay: .1
        }).to('.open', .05,{
            display: 'none',
            delay: -.1
        })

    })
    return (
        <Wrap>
            <div className="btnBox">
                <button className="close aniButton" onClick={() => tl.reverse()}>close</button>
                <button className="open aniButton" onClick={() => tl.play()}>menu</button>
            </div>
            <nav>
                <ul>
                        <li>
                           <Link to="/"><button className=" link whipstitch "><span><MdHome size="40px"/></span></button></Link>
                        </li>                   
                        <li>
                           <Link to="/code"><button className=" link whipstitch2 "><span><FaCode size="40px"/></span></button></Link>
                        </li>                   
                        <li>
                           <Link to="/design"><button className=" link whipstitch3 "><span><FaPaintBrush size="40px"/></span></button></Link>
                        </li>                   
                        <li>
                           <Link to="/blog"><button className=" link whipstitch4 "><span><GiOpenBook size="40px" style={{color: 'orange'}}/></span></button></Link>
                        </li>                   
                        <li>
                           <Link to="/contact"><button className=" link whipstitch5 "><span><MdContactPhone size="40px" style={{color: 'green'}}/></span></button></Link>
                        </li>                   
                </ul>
            </nav>
        </Wrap>
    )
}

const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1;
width: 17.5vw;
height: 100vh;
padding:0px 0px;

nav{
    width: 0%;
    height: 100%;
    background: rgba(0,0,0,1);
  
}
.btnBox{
    width: 0%;
    height: 50px;
    background: rgba(0,0,0,1);
    margin: 0 auto;
}
ul{
    height: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
    margin: 0; 
}
li{
    margin-top: -50px;
}

.aniButton{
    font-size: 2.25rem;
    color: white;
    background: transparent;
    z-index: 4;
    border: none;
    padding: 5px 10px;
}
.link{
    border: none;
	cursor: pointer;
	padding: 25px 0px;
	position: relative;
    transition: all 0.3s;
    background: transparent;
	color: #fff;
	height: 70px;
	min-width: 100px;
    font-size: 16px;
    overflow: hidden;
    backface-visibility: hidden;
}
.link span {
	display: inline-block;
	width: 100%;
	height: 100%;
	transition: all 0.3s;
	backface-visibility: hidden;
}

.link:before {
	position: absolute;
	height: 100%;
	width: 100%;
	line-height: 2.5;
	font-size: 180%;
    transition: all 0.3s;
    /* left: 0;
    top: -100%; */
    left: -100%;
	top: 0;
}

.link:hover span {
    /* transform: translateY(300%); */
    transform: translateX(200%);
}

.link:hover:before {
    /* top: 0; */
    left: 0;
}

.whipstitch:before{
    content: "home";
}
.whipstitch2:before{
    content: "code";
}
.whipstitch3:before{
    content: "design";
}
.whipstitch4:before{
    content: "blog";
}
.whipstitch5:before{
    content: "contact";
}
`
export default Navbar
