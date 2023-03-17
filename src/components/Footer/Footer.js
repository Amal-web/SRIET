import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.mainContent}>
        <div className={classes.collegeName}>
          <p>Sri Ranganathar Institute Of Engineering and Technology</p>
          <p>Athipalayam</p>
          <p>Thudiyalur to Kovilpalayam Road</p>
          <p>Coimbatore - 641111</p>
          <p>
            Website -{" "}
            <a href="https://www.sriet.ac.in/" target="_blank" rel="noreferrer">
              www.sriet.ac.in
            </a>
          </p>
        </div>
        <div className={classes.right}>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className={classes.socialMediaIcon}>
        <a href="https://www.instagram.com/srietdigitalmaker/" target="_Blank" rel="noreferrer"><InstagramIcon className={classes.icons}/></a>  
        <a href="https://www.youtube.com/@sriet1049" target="_Blank" rel="noreferrer"><YouTubeIcon className={classes.icons}/></a>
        <a href="https://www.google.com/maps/place/Sri+Ranganathar+Institute+of+Engineering+and+Technology+(SRIET)/@11.1290157,76.983988,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8f73f6b6e1159:0xf4abd9e6f1a60e7!8m2!3d11.1290104!4d76.9861767!16s%2Fg%2F1tj99flz" target="_Blank" rel="noreferrer"><LocationOnIcon className={classes.icons}/></a>
        <a href="https://www.facebook.com/sriet.admin" target="_Blank" rel="noreferrer"><FacebookRoundedIcon className={classes.icons}/></a>

      </div>
    </div>
  );
};

export default Footer;
