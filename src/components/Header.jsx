import "../style/Header.css"
import {
    AiOutlineTwitter,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiFillFacebook,
  } from "react-icons/ai/";

const Header = () => {
    const social_links = [
        {
          icon: AiOutlineTwitter,
          href_link: "https://twitter.com/saran_pariyar1",
        },
        {
          icon: AiFillLinkedin,
          href_link: "https://www.linkedin.com/in/saran-pariyar-5078b5217/",
        },
        {
          icon: AiFillInstagram,
          href_link: "https://www.instagram.com/saran_pariyar1/",
        },
        {
          icon: AiFillGithub,
          href_link: "https://github.com/Saran-pariyar",
        },
        {
          icon: AiFillFacebook,
          href_link :"https://www.facebook.com/saran.pariyar.50"
        }
      ];
  return (
    <div className="header">
      <div className="header-container">
        <a href="/" className="left-section font1-5">Home</a>
        <p className="middle-section font1-5">Saran Pariyar</p>
        <div className="right-section font1-5">
        <p className="find-me-text">Find me : </p>
          {social_links.map((element, index) => {
            const Item_icon = element.icon;
            return (
              <a
                href={element.href_link}
                target="_blank"
                className="social-links "
                key={index}
              >
                <Item_icon className="social-icons " />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Header