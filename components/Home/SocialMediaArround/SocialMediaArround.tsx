import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";
import DiscordIcon from "../../Icons/DiscordIcon";
import TelegramIcon from "../../Icons/TelegramIcon";
const IconClickableWithAnimation = (props) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon
          className={
            "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
          }
        />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation
              Icon={GithubIcon}
              href={"https://github.com/topsecretagent008"}
            />
            {/* Linkedin icon */}
            {/* <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/lendon-bracewell-558563266/"} /> */}
            {/* Youtube Icon */}
            <IconClickableWithAnimation
              Icon={DiscordIcon}
              href={"https://discordapp.com/users/1172401787303624714"}
            />
            <IconClickableWithAnimation Icon={TelegramIcon} href={"https://t.me/super_r_star1114"} />
          </div>
          <div className="h-32 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 right-0 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-32 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a
              href="mailto:lendonbracewell1114@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" font-Header tracking-wide text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                lendonbracewell1114@gmail.com
              </span>
            </a>
          </motion.div>

          <div className="h-32 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
