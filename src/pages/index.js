import * as React from "react";
import Button from "../components/Button";
import CarSelector from "../components/CarSelector";
import CardList from "../components/CardList";
import IntroduceItem from "../components/IntroduceItem";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import classNames from "classnames";
import {
  cars,
  introduceData,
  featureVehicles,
  footerMenu,
  adContents,
} from "../data/LandingPageData";

const IndexPage = () => {
  return (
    <main className="max-w-[1366px] m-auto">
      <Header />
      <Navbar />
      <section className="px-4 lg:px-0">
        <nav className="lg:hidden flex justify-between items-center h-16">
          <img
            src="/images/carbuyer-logo.png"
            alt="logo"
            width={120}
            height={40}
          />
          <img src="/images/search.png" alt="search" width={24} height={24} />
        </nav>

        <div className="relative">
          <img
            src="/images/car-bg.jpg"
            alt="search"
            height="auto"
            className="rounded-md lg:rounded-none"
          />
          <div
            className={classNames(
              "absolute left-4 top-6 lg:top-20 lg:left-16 flex flex-col justify-start gap-y-2 lg:gap-y-8",
              "md:top-20 md:left-12 md:gap-y-4"
            )}
          >
            <h1
              className={classNames(
                "text-white font-bold font-sans text-[16px] lg:text-[60px] lg:leading-[76px]",
                "md:text-[42px] md:leading-[56px] "
              )}
            >
              Car Marketplace
            </h1>
            <p className="text-grayText text-[8px] lg:text-[18px] lg:leading-[22px] md:text-[14px] md:leading-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nunc odio in et, lectus sit lorem id integer.
            </p>
            <Button
              type="red"
              label="Get Started"
              className={classNames(
                "px-2 py-1 text-[8px] lg:py-3 lg:text-lg lg:font-semibold w-[80px] rounded-[3px] lg:rounded-lg lg:w-[196px]",
                "md:py-2 md:text-[10px] flex items-center justify-center"
              )}
            />
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-[60px] lg:relative lg:top-[-75px]">
        {/* car filters */}
        <CarSelector />
      </section>

      {/* list of searched cars */}
      <CardList data={cars} />

      <section className="flex flex-col bg-blackText text-center mt-16 px-4 pb-16 lg:px-0">
        <h1 className="text-4xl text-buttonRed font-bold mt-6 lg:mt-12 lg:text-5xl">
          How it works
        </h1>
        <p className="text-xl text-white mt-2 lg:text-3xl">
          This is how our products works
        </p>
        <div className="flex flex-col gap-y-20 mt-12 lg:flex-row lg:px-[60px] lg:gap-x-[60px] lg:pb-[120px]">
          {introduceData.map((data) => (
            <IntroduceItem {...data} />
          ))}
        </div>
      </section>

      <section className="pl-4 lg:pl-[60px] flex flex-col items-center lg:block">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="flex flex-col items-center lg:items-start lg:flex-[0.6]">
            <h1 className="text-buttonRed text-3xl font-bold mt-16 lg:text-5xl lg:font-bold">
              Our Featured Vehicles.
            </h1>
            <p className="mt-2 lg:mt-4 text-blackText text-xl text-center lg:text-3xl lg:text-left">
              One of our biggest product to be featured and that has sold out
              the most.
            </p>
          </div>
          <Button
            label="View more"
            type="red"
            className="py-4 px-12 hidden lg:block mr-[60px]"
          />
        </div>
        <div className="flex item-center gap-x-10 overflow-auto w-full mt-10">
          {featureVehicles.map((item) => (
            <FeatureCard item={item} />
          ))}
        </div>
        <Button
          label="View more"
          type="red"
          className="px-12 py-3 mt-10 lg:hidden"
        />
      </section>

      <section className="mt-16 lg:mt-28">
        <div className="w-full relative text-center">
          <img
            src="/images/question-mobile.jpg"
            className="w-full h-auto lg:hidden"
          />
          <img
            src="/images/question-desktop.png"
            className="w-full h-auto hidden lg:block"
          />
          <h1
            className={classNames(
              "text-white text-5xl absolute top-20 left-1/2 -translate-x-1/2 font-semibold text-center leading-[72px]",
              "lg:text-[76px] lg:leading-[114px] lg:text-left lg:left-20 lg:translate-x-0 lg:w-[400px]"
            )}
          >
            Questions about buying or renting?
          </h1>
          <Button
            className="absolute bottom-20 left-8 right-8 h-[60px] cursor-pointer lg:w-[400px] lg:left-20 flex items-center justify-center"
            label="Ask us"
            type="red"
          />
        </div>
      </section>
      {/* more ad text */}
      <section className="hidden lg:flex flex-col mt-[80px] bg-bgGray px-[90px] py-[40px]">
        <h1 className="text-lightGray font-semibold">
          UCARS - Revolutionizing The Online Car Marketplace In Singapore
        </h1>
        <div className="flex flex-col gap-y-6 mt-6 text-lightGray">
          {adContents.map((c) => (
            <article>
              <h2 className="text-sm font-semibold">{c.title}</h2>
              <p className="text-sm mt-2">{c.content}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer data={footerMenu} />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
