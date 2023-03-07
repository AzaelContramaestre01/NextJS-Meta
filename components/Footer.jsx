'use client';

import {motion} from 'framer-motion';
import {socials} from '../constants';
import {footerVariants} from '../utils/motion';

import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Azael Contramaestre
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#2561AB] rounded-[32px] gap-12">
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] opacity-10 h-[2px] bg-white" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Front End Dev with love
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            © 2023 Azael Contramaestre
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#2561AB]"
              >
                <img src={social.url} alt="social" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
