import React from 'react'
import newsflow from '../images/news-flow-screenshot.gif';
import burger from '../images/burger.png';
import gameGif from '../images/gameAndGif.png';
import dailyPlanner from '../images/dailyPlanner.png';
// Fontawesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// React PopUpBox
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {

    // NewsFlow
    const openPopupboxNewsFlow = () => {
        const content = (
            <>
            <img className="project-popupbox" src={newsflow} alt="News by location project..." />
            <p>This is the description of the project</p>
            <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/news-flow")}>Check out the code behind the project</a>
            <hr />
            <b>Live Application:</b> <a className="link" onClick={() => window.open("http://news-flow.herokuapp.com/")}>TRY THE DEPLOYED APP!</a>
        </>
        )
  
        PopupboxManager.open({content})
    }

    const popupboxConfigNewsFlow = {
        titleBar:{
            enable: true,
            text: "NewsFlow Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

        // Burger App
        const openPopupboxBurger = () => {
            const content = (
                <>
                <img className="project-popupbox" src={burger} alt="App that allows you to create a burger and store it in a DB..." />
                <p>This is the description of the project</p>
                <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/burger")}>Check out the code behind the project</a>
                <hr />
                <b>Live Application:</b> <a className="link" onClick={() => window.open("https://name-a-burger.herokuapp.com/")}>TRY THE DEPLOYED APP!</a>
            </>
            )
      
            PopupboxManager.open({content})
        }
    
        const popupboxConfigBurger = {
            titleBar:{
                enable: true,
                text: "Create a Burger."
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

        
            // GameGif App
    const openPopupboxGameGif = () => {
        const content = (
            <>
            <img className="project-popupbox" src={gameGif} alt="App for gaming and fun..." />
            <p>This is the description of the project</p>
            <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/Game-Meme")}>Check out the code behind the project</a>
            <hr />
            <b>Live Application:</b> <a className="link" onClick={() => window.open("https://tskading.github.io/Game-Meme/")}>TRY THE DEPLOYED APP!</a>
        </>
        )
  
        PopupboxManager.open({content})
    }

    const popupboxConfigGameGif = {
        titleBar:{
            enable: true,
            text: "Game and Gif."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


        // Daily Planner
        const openPopupboxDailyPlanner = () => {
            const content = (
                <>
                <img className="project-popupbox" src={dailyPlanner} alt="App for creating a daily schedule..." />
                <p>This is the description of the project</p>
                <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/Daily-planner")}>Check out the code behind the project</a>
                <hr />
                <b>Live Application:</b> <a className="link" onClick={() => window.open("https://goantoniouw.github.io/Daily-planner/")}>TRY THE DEPLOYED APP!</a>
            </>
            )
      
            PopupboxManager.open({content})
        }
    
        const popupboxConfigDailyPlanner = {
            titleBar:{
                enable: true,
                text: "Daily Planner."
            },
            fadeIn: true,
            fadeInSpeed: 500
        }
    



    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row align-items-center">
                    <div className="project-pic-box col-sm" onClick={openPopupboxNewsFlow}>
                        <img className="project-pics" src={newsflow} alt="News by location project..."  />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearch} />
                    </div>

                    <div className="project-pic-box col-sm" onClick={openPopupboxBurger}>
                        <img className="project-pics" src={burger} alt="App that allows you to create a burger and store it in a DB..."  />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearch} />
                    </div>

                    <div className="project-pic-box col-sm" onClick={openPopupboxGameGif}>
                        <img className="project-pics" src={gameGif} alt="App for gaming and fun..."  />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearch} />
                    </div>
                    <div className="project-pic-box col-sm" onClick={openPopupboxDailyPlanner}>
                        <img className="project-pics daily-planner" src={dailyPlanner} alt="App for creating a daily schedule..."  />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearch} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNewsFlow} />
            <PopupboxContainer {...popupboxConfigBurger} />
            <PopupboxContainer {...popupboxConfigGameGif} />
            <PopupboxContainer {...popupboxConfigDailyPlanner} />

        </div>
    
    )
}

export default Projects