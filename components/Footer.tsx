import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import { log } from "three/src/nodes/TSL.js";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      {/* background grid */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-green-400">your</span> digital
          presence to the <span className="text-green-400">next level</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:sharmatusharr112@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Tushar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;