import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai/";

const Header = () => {
  const  social_links = [
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
      href_link: "https://www.facebook.com/saran.pariyar.50",
    },
  ];

  return (
    <div className="text-white bg-neutral-900 text-xl p-2">
      <div className="flex place-content-around">
        <p>Saran pariyar</p>
        <div className="flex self-center font1-5">
          <p className="hidden find-me-text sm:block">Find me : </p>
          {social_links.map((element, index) => {
            const ItemIcon = element.icon;
            return (
              <a
                href={element.href_link}
                target="_blank"
                className="sm:text-2xl mx-1"
                key={index}
                rel="noreferrer"
              >
                < ItemIcon  />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Header;
