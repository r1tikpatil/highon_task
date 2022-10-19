import "./card.scss";
import { useState } from "react";
const Card = ({ colour, title, description, data }) => {
  const [seemore, setSeemore] = useState(false);
  if (colour !== "" && title !== "" && description && data) {
    return (
      <>
        <div className="card">
          <div className="head">
            <div
              className="colour"
              style={{ backgroundColor: `${colour}` }}
            ></div>
            <div className="description">{description}</div>
          </div>
          {seemore && (
            <div className="body">
              <table className="centered">
                {data &&
                  data.map((d) => {
                    return (
                      <div className="content">
                        <thead>
                          <tr>
                            <th>{d.quality}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {d.traits.map((val) => {
                            return (
                              <tr>
                                <td>{val}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </div>
                    );
                  })}
              </table>
            </div>
          )}
          {seemore && (
            <div className="footer" style={{ backgroundColor: colour }}>
              {title}
            </div>
          )}
          <span className="see" onClick={() => setSeemore(!seemore)}>
            {seemore ? "see less" : "see more"}{" "}
          </span>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Card;
