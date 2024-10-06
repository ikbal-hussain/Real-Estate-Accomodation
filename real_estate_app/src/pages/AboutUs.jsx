import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ikbal Hussain",
      role: "Team-Lead",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQFrJ3M9HVaH0Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707992302151?e=1733961600&v=beta&t=4mQ_aUvueBESDvqVnB9zrrcRjdn7x8yOsvgf3pS_v7Q",
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
        img: "https://ca.slack-edge.com/T07JTBXFQ5B-U07L01FLRED-009eef407316-512",
        social: {
          twitter: "#",
          facebook: "#",
          instagram: "#",
        },
      },
  ];

  return (
    <section className="aboutUs-section">
      <div className="center">
        <h1 className="aboutUs-title">Our Team</h1>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <h5>{member.role}</h5>
            <div className="social-icons">
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
