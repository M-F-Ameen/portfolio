import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center md:left-[-90px]" // Adjust the margin-left value as needed
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#231557" />
            <stop offset="29%" stopColor="#44107A" />
            <stop offset="67%" stopColor="#FF1361" />
            <stop offset="100%" stopColor="#FFF800" />
          </linearGradient>
        </defs>
      </svg>
      {/* Rotating Hexagon */}
      <div className="absolute -z-10 flex justify-center items-center">
        <PiHexagonThin
          className="md:h-[90%] sm:h-[120%] min-h-[430px] w-auto blur-sm animate-[spin_30s_linear_infinite]"
          style={{ fill: "url(#gradient)" }}
        />
      </div>

      {/* Hexagon Container - Allows the head to pop out */}
      <div className=" w-[320px] h-[360px] overflow-visible hexagon-container ">
        {/* Hexagon Clip Area */}
        <div className="hexagon ">
          {/* Image Positioned Absolutely to Pop Out */}
          <img
            src="/images/mypic-two.png"
            alt="Mohamed Farag"
            className=" top-[-50px] left-1/2 transform -translate-x-1/2 w-[110%] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
