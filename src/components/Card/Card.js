import React from 'react';
import './Card.css';
import Image from "../../assets/bar.jpeg";
import Linkedin from "../../assets/icons8-linkedin.svg";
import Spotify from "../../assets/icons8-spotify.svg";
import Github from "../../assets/icons8-github.svg";

const cards = [
  {
    title: "Fiorella Paolino",
    subtitle: "BUENOS AIRES",
    job: "Full Stack Coder"
  }
];

const Card = () => {

  const skills = ['React', 'Node', 'Javascript', 'HTML', 'CSS', 'Python', 'Django', 'SQL'];

  const list = skills.map(skill => <li key={skill}>{skill}</li>)
  
        return (
          <div className="background">
          <div className="card">
            <div className="container">
              {cards.map(({ title, subtitle, job}) => (
                <div className="upper-container" key="{cards}">
                    <div className="img-box">
                      <img src={Image} alt="" className="img"/>
                    </div>
                    <h3><b>{title}</b></h3>
                    <h6>{subtitle}</h6>
                    <p>{job}</p>  
                    <button className="button"><a href="mailto:fiorellapaolino@gmail.com">REACH ME OUT</a></button>
                    <div className="container-social-icons">
                      <ul className="social-icons">
                          <li><a href="https://github.com/fiorellapaolino"><img src={Github} alt="" className="share github" /></a></li>
                          <li><a href="https://www.linkedin.com/in/fiorellapaolino/"><img src={Linkedin} alt="" className="share linkedin"/></a></li>
                          <li><a href="https://open.spotify.com/user/fiorellapaolino"><img src={Spotify} alt="" className="share spotify"/></a></li>
                      </ul>
                    </div>
                    <div className="skills">
                      <h6>Skills</h6>
                      <ul>
                      {list}
                      </ul>
                    </div>
                </div>
              ))}
            </div>
          </div>

          <footer id="pag">
            <div id="footer">2021 &copy; Made by Fiorella Cristal Paolino</div>
          </footer>
        </div>

        );
      }


export default Card;