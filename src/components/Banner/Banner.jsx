import React from "react";


const Banner = () => {
  return (
    <section>
      <div className="hero bg-[#1313130d] min-h-screen">
        <div className="hero-content flex-col gap-5 md:gap-20 lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/989qMRW/42844155.jpg"
            className="md:max-w-xs md:max-h-xs w-[200px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up<br />your bookshelf</h1>
            <br />
            <button className="work-sans btn bg-[#23BE0A] text-white">View The List</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
