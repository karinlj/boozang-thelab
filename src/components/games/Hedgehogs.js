const Hedgehogs = ({ hedgehogs, handleClick }) => {
  return (
    <div className="hedgehogs">
      {hedgehogs.map((hedgehog) => {
        return (
          <span
            key={hedgehog.id}
            className="hedgehog"
            style={{ top: hedgehog.top, left: hedgehog.left }}
            onClick={handleClick}
          >
            {hedgehog.icon}
          </span>
        );
      })}
    </div>
  );
};

export default Hedgehogs;
