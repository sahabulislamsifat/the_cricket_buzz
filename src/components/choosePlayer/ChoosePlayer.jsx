const ChoosePlayer = ({ playerChoose, handleDelete }) => {
  const { cover, player_name, player_identity, price } = playerChoose;
  return (
    <div className="flex items-center justify-between border border-slate-400 rounded-xl p-5 my-4">
      <div className="flex items-center gap-6">
        <img
          className="w-20 h-20 rounded-lg border border-slate-300 object-cover"
          src={cover}
          alt=""
        />
        <div>
          <h2 className="font-semibold lg:text-2xl ">{player_name}</h2>
          <p className="text-slate-500 text-sm lg:text-base">
            {player_identity}
          </p>
          <p className="text-slate-500 text-sm lg:text-base">(${price})</p>
        </div>
      </div>
      <i
        onClick={() => handleDelete(playerChoose.id)}
        className="fa-solid fa-trash text-xl text-red-500"
      ></i>
    </div>
  );
};

export default ChoosePlayer;
