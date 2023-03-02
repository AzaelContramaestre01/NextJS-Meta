'use client';

import {motion} from 'framer-motion';
import {TypingText} from '../components';

import styles from '../styles';
import {fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Metaversus"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[16px] text-center text-secondary-white"
      >
        <span className="font-bold text-white"> Lorem ipsum  </span>
        dolor sit amet consectetur adipisicing elit. Sed esse nihil sequi velit quaerat, totam amet eveniet harum! Iste, in illo rem sapiente, excepturi enim explicabo accusamus,
        <span className="font-bold text-white"> exercitationem </span>
        soluta provident reiciendis repellat porro eligendi delectus! Quasi vero tempore nulla neque repellendus reiciendis. Natus soluta facere doloremque.
        <span className="font-bold text-white"> Error dignissimos  </span>
        <span className="font-bold text-white">nulla eius? </span>
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="Arrow Down"
        className="mt-[28px] w-[18px] h-[18px] cursor-pointer object-contain"
      />
    </motion.div>
  </section>
);

export default About;
