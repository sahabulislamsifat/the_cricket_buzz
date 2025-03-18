import ChoosePlayer from "../../choosePlayer/ChoosePlayer";

const SelectPlayer = ({ choosePlayer, handleDelete, handleAvailableBtn }) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">
          Selected Player ({choosePlayer.length}/6)
        </h2>

        {choosePlayer.map((playerChoose) => (
          <ChoosePlayer
            key={playerChoose}
            playerChoose={playerChoose}
            handleDelete={handleDelete}
          ></ChoosePlayer>
        ))}
      </div>
      <button
        onClick={handleAvailableBtn}
        className="text-xl px-4 py-2 bg-customBtn mt-5 rounded-xl font-semibold "
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectPlayer;
