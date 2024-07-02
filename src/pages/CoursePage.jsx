import React from "react";
import { useParams } from "react-router-dom";
import { singlePages } from "../data";
import { coursePages } from "../data";
import { GoClock } from "react-icons/go";

const CoursePage = () => {
  const { id } = useParams();

  const singlePage = singlePages.find((singlePage) => {
    return singlePage.id === parseInt(id);
  });

  const {
    title,
    image,
    num1,
    num2,
    num3,
    num4,
    num5,
    OneCardT,
    TwoCardT,
    ThreeCardT,
    FourCardT,
    FiveCardT,
    OneCardP1,
    OneCardP2,
    OneCardP3,
    TwoCardP1,
    TwoCardP2,
    TwoCardP3,
    ThreeCardP1,
    ThreeCardP2,
    ThreeCardP3,
    FourCardP1,
    FourCardP2,
    FourCardP3,
    FiveCardP1,
    FiveCardP2,
    FiveCardP3,
    time41,
    time42,
    time43,
    time51,
    time52,
    time53,
    lesson1,
    lesson2,
    lesson3,
    time1,
    time2,
    time3,
  } = singlePage;
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 gap-5 items-center py-10">
        <h1 className="text-4xl font-semibold text-grey15">{title}</h1>
        <p className="font-normal text-base text-grey35">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          adipisci blanditiis atque voluptas ad nobis, laboriosam et quia hic a
          facilis saepe provident aspernatur porro non. Quos vel delectus
          similique cumque voluptate sunt corporis consequatur neque eligendi
          repudiandae, perspiciatis aut, quod quae aspernatur tempora ad error
          veniam corrupti eum reiciendis?
        </p>
      </div>
      <img src={image} alt="" />

      {/* card */}
      <div className="grid lg:grid-cols-2 gap-10 py-20">
        {/* 1 */}
        <div className="bg-white99 p-10 space-y-10">
          <h3 className="text-5xl font-bold text-right"> {num1} </h3>
          <h1 className="text-2xl"> {OneCardT} </h1>
          {/* first text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium"> {OneCardP1} </p>
              <p className="text-sm text-grey35"> {lesson1} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time1}</div>
            </div>
          </div>
          {/* second text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium"> {OneCardP2} </p>
              <p className="text-sm text-grey35"> {lesson2} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time2}</div>
            </div>
          </div>

          {/* third text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium"> {OneCardP3} </p>
              <p className="text-sm text-grey35"> {lesson3} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time3}</div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white99 p-10 space-y-10">
          <h3 className="text-5xl font-bold text-right"> {num2} </h3>
          <h1 className="text-2xl"> {TwoCardT} </h1>
          {/* first text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium"> {TwoCardP1} </p>
              <p className="text-sm text-grey35"> {lesson1} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time1}</div>
            </div>
          </div>
          {/* second text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium"> {TwoCardP2} </p>
              <p className="text-sm text-grey35"> {lesson2} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time2}</div>
            </div>
          </div>

          {/* third text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium"> {TwoCardP3} </p>
              <p className="text-sm text-grey35"> {lesson3} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time3}</div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-white99 p-10 space-y-10">
          <h3 className="text-5xl font-bold text-right"> {num3} </h3>
          <h1 className="text-2xl"> {ThreeCardT} </h1>
          {/* first text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{ThreeCardP1}</p>
              <p className="text-sm text-grey35"> {lesson1} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time1}</div>
            </div>
          </div>
          {/* second text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{ThreeCardP2}</p>
              <p className="text-sm text-grey35"> {lesson2} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time2}</div>
            </div>
          </div>

          {/* third text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{ThreeCardP3}</p>
              <p className="text-sm text-grey35"> {lesson3} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time3}</div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="bg-white99 p-10 space-y-10">
          <h3 className="text-5xl font-bold text-right"> {num4} </h3>
          <h1 className="text-2xl"> {FourCardT} </h1>
          {/* first text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{FourCardP1}</p>
              <p className="text-sm text-grey35"> {lesson1} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time41}</div>
            </div>
          </div>
          {/* second text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{FourCardP2}</p>
              <p className="text-sm text-grey35"> {lesson2} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time42}</div>
            </div>
          </div>

          {/* third text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{FourCardP3}</p>
              <p className="text-sm text-grey35"> {lesson3} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time43}</div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="bg-white99 p-10 space-y-10">
          <h3 className="text-5xl font-bold text-right"> {num5} </h3>
          <h1 className="text-2xl"> {FiveCardT} </h1>
          {/* first text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{FiveCardP1}</p>
              <p className="text-sm text-grey35"> {lesson1} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time51}</div>
            </div>
          </div>
          {/* second text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{FiveCardP2}</p>
              <p className="text-sm text-grey35"> {lesson2} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time52}</div>
            </div>
          </div>

          {/* third text */}
          <div
            className="flex lg:flex-row flex-col justify-between 
          border border-gray-200 p-5 gap-5 rounded-md"
          >
            <div className="flex flex-col gap-3">
              <p className="lg:text-base text-xm font-medium">{FiveCardP3}</p>
              <p className="text-sm text-grey35"> {lesson3} </p>
            </div>
            <div
              className="bg-white90 flex flex-row items-center justify-between p-2 gap-2
            rounded-md self-start"
            >
              <GoClock />
              <div className="">{time53}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
