const Card = ({ colour, title, discription }) => {
  return (
    <>
      <div className="card">
        <div className="head">
          <div className="colour"></div>
          <div className="discription"></div>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default Card;
