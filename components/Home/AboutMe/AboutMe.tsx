import React, { useState, useEffect, CSSProperties } from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

export interface MyCustomCSS extends CSSProperties {
  "--i": number;
}

export const useCurrentDateTime = (timeZone) => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
    month: "",
  });

  useEffect(() => {
    const fetchCurrentDateTime = async () => {
      try {
        const formatter = new Intl.DateTimeFormat([], {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: timeZone,
        });
        const currentDate = formatter.format(new Date());
        const currentTime = formatter
          .formatToParts(new Date())
          .find((part) => part.type === "hour").value;
        const currentMonth = formatter
          .formatToParts(new Date())
          .find((part) => part.type === "month").value;

        setCurrentDateTime({
          date: currentDate,
          time: currentTime,
          month: currentMonth,
        });
      } catch (error) {
        console.error("Error fetching current DateTime:", error);
      }
    };

    fetchCurrentDateTime();
  }, [timeZone]);

  return currentDateTime;
};

export default function AboutMe(props) {
  const technologies = [
    [
      "Solidity",
      "Next.js",
      "Ether.js",
      "Express",
      "Angular",
      "Adobe XD",
      "Django",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "BlickChain",
      "Python",
      "Rust",
    ],
    [
      "Rust",
      "React",
      "Figma",
      "web3.js",
      "Node.js",
      "Python",
      "TypeScript",
      "Framer Motion",
      "C++",
      "NFT",
      "Django",
    ],
  ];

  const { date, time, month } = useCurrentDateTime("Europe/Luxembourg");

  console.log("time", time.toString());
  console.log("time", month.toString());

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
                Hello! My name is Lendon Bracewell and I enjoy solving problems
                and creating codes that live on the internet.
                <br className="md:block hidden" />
                As a{" "}
                <span className="text-AAsecondary">
                  senior fullstack developer
                </span>
                , I have full experience in building{" "}
                <span className="text-AAsecondary">
                  BlockChain and Web apps, designs
                </span>
                .
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                For 8 years of experience about fullstack development, could
                provide excellent{" "}
                <span className="text-AAsecondary">programming skills,</span>{" "}
                effective{" "}
                <span className="text-AAsecondary">communication skills</span>{" "}
                and high quality product.
              </span>
              <br className="md:block hidden" />
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary">
                  {" "}
                  a huge manufacturing company
                </span>
                ,<span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">
                  export-import companies
                </span>
                , also
                <span className="text-AAsecondary"> freelancing</span> and
                Passion and enthusiasm of development, push me to levelup &
                teach myself. <br className="md:block hidden" />
                Experienced in Desktop & Web Development with blockchain
                Development.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with
                recently:
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              {Number(time.toString()) > 8 && Number(time.toString()) < 19 ? (
                <Img
                  src={"/img/image.png"}
                  className={"rounded-lg w-full h-full bg-white"}
                  alt="My Image Not Found"
                />
              ) : (
                <Img
                  src={"/img/image.png"}
                  className={"rounded-lg w-full h-full bg-black"}
                  alt="My Image Not Found"
                />
              )}
            </div>

            <div className="hidden md:flex flex-col w-full  absolute bottom-0">
              <div className="relative px-3 flex-none justify-center w-full block">
                <div className="coin mx-auto">
                  <img
                    className="z-[3] top-24 right-0  3xs:right-5 2xs:right-8 md:right-20  object-cover absolute coin-img"
                    src="/tokenImage/stack (8).png"
                    alt="stack (8) pannel"
                    width={80}
                    height={80}
                    style={{ "--i": 1 } as MyCustomCSS}
                  />
                  <img
                    className="z-[3] top-0 right-10 3.5xs:right-16 3xs:right-24 2xs:right-28 md:right-48 object-cover absolute"
                    src="/tokenImage/stack (2).png"
                    alt="stack (2) pannel"
                    width={50}
                    height={50}
                    style={{ "--i": 2 } as MyCustomCSS}
                  />
                  <img
                    className="z-[3] top-32 right-36 3.5xs:right-40 3xs:right-52 2xs:right-56 md:right-72 object-cover absolute"
                    src="/tokenImage/stack (3).png"
                    alt="stack (3) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 3 } as MyCustomCSS}
                  />
                  <img
                    className="z-[3] top-60 right-14 3.5xs:right-20 3xs:right-28 2xs:right-32 md:right-48  object-cover absolute"
                    src="/tokenImage/stack (4).png"
                    alt="stack (4) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 4 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-40 right-40  object-cover absolute"
                    src="/tokenImage/stack (5).png"
                    alt="stack (5) pannel"
                    width={70}
                    height={70}
                    style={{ "--i": 5 } as MyCustomCSS}
                  />
                  <img
                    className="z-[3] top-3 right-20  object-cover absolute"
                    src="/tokenImage/stack (6).png"
                    alt="stack (6) pannel"
                    width={70}
                    height={70}
                    style={{ "--i": 6 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-24 right-52 object-cover absolute"
                    src="/tokenImage/stack (7).png"
                    alt="stack (7) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 7 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-44 right-60  object-cover absolute"
                    src="/tokenImage/stack (9).png"
                    alt="stack (9) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 8 } as MyCustomCSS}
                  />
                  <img
                    className="z-[3] top-56 right-68  object-cover absolute"
                    src="/tokenImage/stack (10).png"
                    alt="stack (10) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 9 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-52 right-10  object-cover absolute"
                    src="/tokenImage/stack (11).png"
                    alt="stack (11) pannel"
                    width={70}
                    height={70}
                    style={{ "--i": 10 } as MyCustomCSS}
                  />
                  <img
                    className="z-[3] top-4 right-64  object-cover absolute"
                    src="/tokenImage/stack (12).png"
                    alt="stack (12) pannel"
                    width={50}
                    height={50}
                    style={{ "--i": 11 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-6 right-80  object-cover absolute"
                    src="/tokenImage/stack (13).png"
                    alt="stack (13) pannel"
                    width={70}
                    height={70}
                    style={{ "--i": 12 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-10 right-0  object-cover absolute"
                    src="/tokenImage/stack (14).png"
                    alt="stack (14) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 13 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-28 right-4  object-cover absolute"
                    src="/tokenImage/stack (16).png"
                    alt="stack (16) pannel"
                    width={60}
                    height={60}
                    style={{ "--i": 14 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-56 right-28  object-cover absolute"
                    src="/tokenImage/stack (18).png"
                    alt="stack (18) pannel"
                    width={70}
                    height={70}
                    style={{ "--i": 15 } as MyCustomCSS}
                  />

                  <img
                    className="z-[3] top-10 right-36  object-cover absolute"
                    src="/tokenImage/stack (19).png"
                    alt="stack (19) pannel"
                    width={50}
                    height={50}
                    style={{ "--i": 16 } as MyCustomCSS}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/image.png"}
                className={"rounded-lg w-full h-full"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
