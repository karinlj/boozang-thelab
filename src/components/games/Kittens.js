const Kittens = ({ kittens, handleClick }) => {
  return (
    <div className="kittens">
      {kittens.map((kitten) => {
        return (
          <span
            key={kitten.id}
            className="kitten"
            style={{ top: kitten.top, left: kitten.left }}
            onClick={() => handleClick(kitten.id)}
          >
            {kitten.icon}
          </span>
        );
      })}
    </div>
  );
};

export default Kittens;
