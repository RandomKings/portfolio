import { motion } from "framer-motion";
import { styles } from "../styles";
import myImage from "../assets/me/myImage.jpg";

const Hero = () => {
  return (
    <section className={`relative w-full h-[54rem] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pranav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm passionate about crafting innovative <br className="sm:block hidden" />
            web applications and enhancing user experiences.
          </p>
        </div>
      </div>

      <div className="absolute bottom-40 flex w-full justify-center items-center"
      style={{
        marginBottom: "50px", // Adjust this value to control height
      }}
      >
        
        <div
          className="w-64 h-64 md:w-64 md:h-64 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-blue-500"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
            boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.5)", // Blue glow effect
          }}
        >
          <img
            src={myImage}
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
