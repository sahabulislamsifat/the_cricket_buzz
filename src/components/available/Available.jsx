import { useState } from "react";
import AvailableAllPlayers from "../availableAllPlayers/AvailableAllPlayers";
import "./selectedPlayer.css";
import SelectPlayer from "./selectPlayer/SelectPlayer";
import { toast } from "react-toastify";

const Available = ({ handleRemoveCoin, availableBalance }) => {
  const [availableBtn, setAvailableBtn] = useState(true);
  const [selectBtn, setSelectBtn] = useState(false);

  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleDelete = (id) => {
    const remainingPlayer = choosePlayer.filter(
      (deletePlayer) => deletePlayer.id != id
    );
    setChoosePlayer(remainingPlayer);
    return toast.info("Player remove success");
  };

  const handleAvailableBtn = () => {
    setAvailableBtn(true);
    setSelectBtn(false);
  };
  const handleSelectBtn = () => {
    setAvailableBtn(false);
    setSelectBtn(true);
  };

  const handleChoosePlayer = (player) => {
    if (availableBalance === 0) {
      return toast.warning("You don't have enough balance");
    }

    if (choosePlayer.length >= 6) {
      return toast.error("you can't add more player");
    }

    const findPlayer = choosePlayer.find((p) => p.id === player.id);
    if (!findPlayer) {
      const newChoosePlayer = [...choosePlayer, player];
      setChoosePlayer(newChoosePlayer);

      toast.success(`Congrats!! ${player.player_name} is now your squad.`);
    } else {
      return toast.warning("this player already selected");
    }

    handleRemoveCoin(player);
  };

  return (
    <section>
      <div className="text-slate-600 mb-4 flex justify-between font-bold items-center  sticky top-28 backdrop-blur-lg bg-white/30 z-20">
        <small></small>
        <div className="flex">
          <button
            onClick={handleAvailableBtn}
            className={`${
              availableBtn
                ? "bg-customBtn font-bold text-xl"
                : "border border-slate-400 rounded-s-2xl px-6 text-slate-600"
            } btn`}
          >
            Available
          </button>
          <button
            onClick={handleSelectBtn}
            className={`${
              selectBtn
                ? "bg-customBtn font-bold text-xl"
                : "border border-slate-400 rounded-e-2xl px-6 text-slate-600"
            } btn`}
          >
            Selected <span>({choosePlayer.length})</span>
          </button>
        </div>
      </div>
      {/* Available All Players  */}
      {availableBtn && (
        <AvailableAllPlayers
          handleChoosePlayer={handleChoosePlayer}
          handleRemoveCoin={handleRemoveCoin}
        ></AvailableAllPlayers>
      )}

      {/* Select Player */}
      {!availableBtn && (
        <SelectPlayer
          handleDelete={handleDelete}
          choosePlayer={choosePlayer}
          handleAvailableBtn={handleAvailableBtn}
        ></SelectPlayer>
      )}
    </section>
  );
};

export default Available;
