const Header = ({ availableBalance }) => {
  return (
    <nav className=" sticky top-0 backdrop-blur-lg bg-white/30 z-20">
      <div className="navbar">
        <div className="flex-1 justify-between ">
          <div className="dropdown order-2 justify-between">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <button className="border rounded-md border-slate-300 px-2 py-1 flex gap-2 font-bold">
                {availableBalance} Coin
                <img
                  className="w-4 lg:w-6 text-gray-600 font-bold"
                  src="https://i.ibb.co.com/QC35F3x/coin.png"
                  alt=""
                />{" "}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="mr-7 font-bold menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-16 lg:w-24"
              src="https://i.ibb.co.com/YbT7MVp/logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal px-1 text-gray-400 font-semibold gap-10">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <button className="border rounded-md border-slate-300 px-2 py-1 flex gap-2 font-bold">
            {availableBalance} Coin
            <img
              className="w-6 text-gray-950 font-bold"
              src="https://i.ibb.co.com/QC35F3x/coin.png"
              alt=""
            />{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
