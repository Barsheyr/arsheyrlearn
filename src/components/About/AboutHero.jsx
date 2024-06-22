import React from "react";
import { AboutCards } from "../../data";

const AboutHero = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-5">
        <h1 className="text-4xl font-semibold text-grey15">
          About Skillbridge
        </h1>
        <p className="font-normal text-base text-grey35">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <div className="w-[100%] h-0.5 bg-gray-300 mt-20"></div>

      {/* Achievement */}

      <div className="py-20">
        {AboutCards.map((AboutCard) => {
          const {
            id,
            title,
            description,
            cardOneT,
            cardOneP,
            cardTwoT,
            cardTwoP,
            cardThreeT,
            cardThreeP,
            cardFourP,
            cardFourT,
            cardOnePic,
            cardTwoPic,
            cardThreePic,
            cardFourPic,
          } = AboutCard;

          return (
            <div key={id}>
              <div className="lg:items-center items-start justify-between">
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl text-grey15 font-semibold">
                    {title}
                  </h1>
                  <p className="font-normal text-base lg:pr-[20%] text-grey35">
                    {description}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 py-20">
                  <div className="bg-white99 p-10 rounded-lg space-y-5">
                    <div>
                      <img src={cardOnePic} alt="" />
                    </div>
                    <h3 className="text-grey15 font-medium text-2xl">
                      {cardOneT}
                    </h3>
                    <p> {cardOneP} </p>
                  </div>
                  <div className="bg-white99 p-10 rounded-lg space-y-5">
                    <div>
                      <img src={cardTwoPic} alt="" />
                    </div>
                    <h3 className="text-grey15 font-medium text-2xl">
                      {cardTwoT}
                    </h3>
                    <p> {cardTwoP} </p>
                  </div>
                  <div className="bg-white99 p-10 rounded-lg space-y-5">
                    <div>
                      <img src={cardThreePic} alt="" />
                    </div>
                    <h3 className="text-grey15 font-medium text-2xl">
                      {cardThreeT}
                    </h3>
                    <p> {cardThreeP} </p>
                  </div>
                  <div className="bg-white99 p-10 rounded-lg space-y-5">
                    <div>
                      <img src={cardFourPic} alt="" />
                    </div>
                    <h3 className="text-grey15 font-medium text-2xl">
                      {cardFourT}
                    </h3>
                    <p> {cardFourP} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* call to action */}
      <div className="bg-white99 p-20 rounded-lg">
        <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">
              <span className="text-primary"> Together </span> let's shape the
              future <br /> of digital innovation
            </h1>
            <p className="font-normal text-base lg:pr-[20%] text-grey35">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <div className="btn border-none bg-primary text-white mt-5 hover:bg-orange70">
            <p>Join Now </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
