import React from "react";


const Banner = () => {
  return (
    <section>
      <div className="hero bg-[#1313130d] min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/zS9jsdK/18144590.jpg"
            className="max-w-xs max-h-xs rounded-lg shadow-2xl"
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
