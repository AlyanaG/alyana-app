import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
        <h1 className="main-heading">Welcome to Classique Co.</h1>
        <img className="brand-image" src="https://th.bing.com/th/id/OIG.Do4HnpWgHSbiYaOjrFL1?pid=ImgGn" alt="Handbags and Wallets"/>
  
        <section>
          <h2>About Us</h2>
          <p>
            Classique Co. is your go-to destination for premium handbags and wallets. We curate the
            finest collection of women's accessories, combining style, elegance, and functionality.
          </p>
          <p>
            Explore our wide range of handpicked products designed to complement your fashion
            statement. Whether you're looking for a chic handbag or a sophisticated wallet, we have
            something for every taste.
          </p>
        </section>

        <footer className="social-footer">
        <h2>Connect with us</h2>
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />
          </a>
        </div>
      </footer>
        
      </div>
    );
  };

export default About;