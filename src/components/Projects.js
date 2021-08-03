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
            <p className="description-text">This app allows users to interact with google maps and based on where they click, news from that area will populate into the news feed section. Users are able to search and view news without signing into a profile. Creating a profile with a valid email and password will allow users to save news articles. These saved articles will be added to the users profile page where they can view or delete previously saved articles.</p>
            <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/news-flow")}>Check out the code behind the project</a>
            <hr />
            <b>Live Application:</b> <a className="link" onClick={() => window.open("http://news-flow.herokuapp.com/")}>TRY THE DEPLOYED APP!</a>
        </>
        )
  
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "News-Flow.",
              },
            },
          });
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
                <p className="description-text">This app lets users input the name of a burger. WHEN a user submits a burger's name, the app will display the burger in the New and Ready to be Devoured!. WHEN the user clicks it, the burger will move to the devoured section. The devoured section has 2 uptions one lets the user return the burger to the New and Ready to be Devoured section the seccond option is to Destroy the Burger removing it from the Database.</p>
                <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/burger")}>Check out the code behind the project</a>
                <hr />
                <b>Live Application:</b> <a className="link" onClick={() => window.open("https://name-a-burger.herokuapp.com/")}>TRY THE DEPLOYED APP!</a>
            </>
            )
      
            PopupboxManager.open({content})
            PopupboxManager.update({
                content,
                config: {
                  titleBar: {
                    text: "Create a Burger.",
                  },
                },
              });
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
            <p className="description-text">Game & Gif is a website for when you just get away from the stress of the daily grind. We aren't here to change your life, we are here to supplement your downtime, and give a one stop page that allows you to explore the online world of games and gifs! 🎮</p>
            <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/Game-Meme")}>Check out the code behind the project</a>
            <hr />
            <b>Live Application:</b> <a className="link" onClick={() => window.open("https://tskading.github.io/Game-Meme/")}>TRY THE DEPLOYED APP!</a>
        </>
        )
  
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Game and Gif.",
              },
            },
          });
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
                <p className="description-text">This application is a calendar that lets the user save event information for each hour of the workday. The top of the page displays the current date. As time passes the color of the rows will change to indicate to the user that the event they have entered has passed, is current or is upcoming. </p>
                <b>Github:</b> <a className="link" onClick={() => window.open("https://github.com/goantonioUW/Daily-planner")}>Check out the code behind the project</a>
                <hr />
                <b>Live Application:</b> <a className="link" onClick={() => window.open("https://goantoniouw.github.io/Daily-planner/")}>TRY THE DEPLOYED APP!</a>
            </>
            )
      
            PopupboxManager.open({content})
            PopupboxManager.update({
                content,
                config: {
                  titleBar: {
                    text: "Daily Planner.",
                  },
                },
              });
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
        <div id="projects" className="portfolio-wrapper">
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