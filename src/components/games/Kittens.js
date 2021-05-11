const Kittens = ({ kittens, handleClick }) => {
  return (
    <div className="kittens">
      {kittens.map((kitten, index) => {
        return (
          <span
            key={index}
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
