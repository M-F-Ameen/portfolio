import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="weallinsurgent@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+20 1015807363" Image={FiPhone} />
      <SingleInfo
        text="10th of ramadan city, Egypt"
        Image={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;
