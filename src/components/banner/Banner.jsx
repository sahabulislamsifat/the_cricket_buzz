const Banner = ({ handleAvailableBalance }) => {
  return (
    <div className=" rounded-xl bg-slate-900 space-y-6 my-10 bg-slate bg-custom-image w-full bg-cover bg-center">
      <img
        className="w-44 pt-16  mx-auto"
        src="https://i.ibb.co.com/51xyhhc/banner-main.png"
        alt=""
      />
      <div className="text-center">
        <h1 className=" text-white font-bold text-xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400 font-bold">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="">
          <button
            onClick={handleAvailableBalance}
            className="btn font-bold text-base text-slate-800 bg-customBtn mt-5 mb-16 outline outline-3 outline-offset-4 border-2 rounded-lg border-[#E7FE29] px-5 py-2 "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
