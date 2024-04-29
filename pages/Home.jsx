import React from 'react'

const Home = () => {
  return (
    <div className="md:py-6 py-3">
      <div className="items-center justify-center h-fit bg-background flex flex-col p-6">
        <h1
          className="md:text-6xl text-3xl md:w-[1000px] w-full font-bold text-secondary
          text-center
"
        >
          The Scam Checker
        </h1>
        <p className="text-black w-full  md:flex md:w-[800px] mt-3 text-center">
          Our scam checker utilizes cutting-edge technology and algorithms to
          thoroughly examine potential scams. Get instant feedback on the
          legitimacy of your suspicion.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex relative mt-5"
        >
          <input
            placeholder="Search a website"
            className="h-12 pl-6 pr-6 md:pr-32 outline-none w-full rounded-[30px] border-2 border-light bg-transparent"
            type="text"
          />
          <button className="bg-primary absolute text-white h-10 right-1 top-1 px-6 rounded-[30px]">
            Check Site
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home