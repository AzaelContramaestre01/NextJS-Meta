'use client';

import {motion} from 'framer-motion';
import styles from '../styles';

import {fadeIn, staggerContainer, zoomIn} from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variant={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variant={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[28px] text-[22px] leading-[36px] text-white sm:leading-[40px]">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-secondary-white">
            Founder | wtf
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[22px] text-[18px] sm:leading-[40px] leading-[40px] text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam pariatur asperiores sunt voluptates nobis sit amet excepturi suscipit laudantium, ratione nostrum, tenetur expedita. Asperiores alias beatae sint iusto quas.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img src="/planet-09.png" alt="planet09" className="w-full rounded-[32px] lg:h-[610px] min-h-[210px] h-auto object-cover" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
