import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My main interest is in Artificial Intelligence development, Data Science
        and Fullstack Development. Throughout my academic background, I have
        acquired skills in programming, algorithm design and data analysis, and
        I am continuously looking for opportunities to apply and expand this
        knowledge. I have worked with Java using Spring Boot and Python with
        Flask for backend development. Additionally, I possess knowledge in
        HTML, CSS, and some JavaScript, as well as brief experience with React.
        I am proficient in creating robust and scalable web applications, and I
        am particularly interested in leveraging my backend skills to develop
        efficient and high-performance systems. Moreover, my experience in data
        science includes working with various data analysis tools and libraries,
        such as pandas, NumPy, and Scikit-learn, which has enabled me to extract
        valuable insights from data and build predictive models. My passion for
        Artificial Intelligence drives me to explore machine learning and deep
        learning techniques, and I have hands-on experience with frameworks like
        TensorFlow and Keras. I am eager to contribute to innovative projects
        that involve complex problem-solving and require a multidisciplinary
        approach. My goal is to continuously enhance my expertise in AI, data
        science, and fullstack development, and to collaborate with like-minded
        professionals to create impactful solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
