import { useEffect } from "react";
import { useState } from "react";

const AvailableAllPlayers = ({ handleChoosePlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold ">Available Players</h1>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.id}>
            <div className="card border border-slate-300 p-6">
              <figure>
                <img
                  className="w-full object-cover rounded-lg h-72 lg:h-80"
                  src={player.cover}
                  alt="Players"
                />
              </figure>
              <div className="">
                <div className="flex items-center mt-6 text-center gap-3 ">
                  <i className="fa-solid fa-user"></i>
                  <h2 className="card-title text-xl font-semibold text-gray-800">
                    {player.player_name}
                  </h2>
                </div>
                <div className="flex justify-between mb-6 items-center">
                  <div className="flex items-center text-slate-400 gap-2">
                    <i className="fa-solid fa-flag"></i>
                    <p>{player.player_nationality}</p>
                  </div>
                  <button className="px-4 py-2 text-sm rounded-md font-bold px-4 text-slate-600 bg-slate-200">
                    {player.player_identity}
                  </button>
                </div>
                <div className="border-t mb-6 border-slate-400">
                  <p className="text-xl font-bold text-slate-600">
                    {player.rating}
                  </p>
                  <div className="flex justify-between my-3">
                    <p className="text-xl font-bold text-slate-600">
                      {player.batting_style}
                    </p>
                    <p className="text-xl font-semibold text-slate-500">
                      {player.bowling_style}
                    </p>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="text-xl text-slate-600 font-bold">
                      Price: ${player.price}
                    </p>
                    <button
                      onClick={() => handleChoosePlayer(player)}
                      className="btn hover:text-slate-950 hover:bg-customBtn px-5 font-bold text-slate-600 btn-outline "
                    >
                      Choose Player
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAllPlayers;
