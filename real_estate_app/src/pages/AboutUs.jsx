import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ikbal Hussain",
      role: "Team-Lead",
      img: "https://ca.slack-edge.com/T07JTBXFQ5B-U07KTHTERMH-2539a83bb815-512",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Farhan Ali",
      role: "Member",
      img: "https://ca.slack-edge.com/T07JTBXFQ5B-U07K8RT0Q7Q-449f882f03ce-512",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Pradyumna Jadhav",
      role: "Member",
      img: "https://ca.slack-edge.com/T07JTBXFQ5B-U07KGGANUJF-d183b2adb780-512",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
        name: "Deepak Dhyani",
        role: "Member",
        img: "https://media.licdn.com/dms/image/v2/D5635AQHz83vS7iWzfQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722964386189?e=1728554400&v=beta&t=uaXHsu6mbck0Xy87oz0w5hMsvZeksP0ZLoRKcOf2-zs",
        social: {
          twitter: "#",
          facebook: "#",
          instagram: "#",
        },
      },
  ];

  return (
    <section className="team">
      <div className="center">
        <h1>Our Team</h1>
      </div>

      <div className="team-content">
        {teamMembers.map((member, index) => (
          <div className="box" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <h5>{member.role}</h5>
            <div className="icons">
              <a href={member.social.twitter}>
                <i className="ri-twitter-fill"></i>
              </a>
              <a href={member.social.facebook}>
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a href={member.social.instagram}>
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;