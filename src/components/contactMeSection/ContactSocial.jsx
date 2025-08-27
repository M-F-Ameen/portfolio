import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/M-F-Ameen"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/m.f.ameen/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
