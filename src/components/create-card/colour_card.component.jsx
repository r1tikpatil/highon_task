import { useState } from "react";
import Card from "../card/card";

import "./colour_card.scss";

const ColourCard = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [colour, setColour] = useState("");
  return (
    <>
      {!visible && (
        <div className="search-box">
          <span className="icon">
            <i className="material-icons">search</i>
          </span>
          <span className="input">
            <input type="text" placeholder="title" />
          </span>
        </div>
      )}
      {!visible && (
        <div className="heading" onClick={() => setVisible(true)}>
          <span>
            <span className="icon">
              <i className="material-icons">add</i>
            </span>
            <span className="text">Create a new Card</span>
          </span>
        </div>
      )}

      {visible && (
        <div className="create_card">
          <div className="header">
            <div className="icon" onClick={() => setVisible(false)}>
              <i className="material-icons">close</i>
            </div>
            <div className="heading">
              <div>Create a colour card</div>
            </div>
          </div>
          <div className="colour-selection">
            <div className="heading">Select the card</div>
            <div className="colours">
              <div
                style={{ backgroundColor: "blue" }}
                onClick={() => setColour("blue")}
              ></div>
              <div
                style={{ backgroundColor: "red" }}
                onClick={() => setColour("red")}
              ></div>
              <div
                style={{ backgroundColor: "yellow" }}
                onClick={() => setColour("yellow")}
              ></div>
              <div
                style={{ backgroundColor: "purple" }}
                onClick={() => setColour("purple")}
              ></div>
              <div
                style={{ backgroundColor: "brown" }}
                onClick={() => setColour("brown")}
              ></div>
            </div>
          </div>
          <div className="input_div">
            <div>
              <h5>Give a title</h5>
              <input
                type="text"
                placeholder="title..."
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <h5>Discription</h5>
              <input
                type="text"
                placeholder="discription..."
                required
                onChange={(e) => setDiscription(e.target.value)}
                value={discription}
              />
            </div>
          </div>
          <div className="buttons">
            <button className="save">Save</button>
            <button className="cancel" onClick={() => setVisible(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {!visible && <Card colour={colour} title={title} discription={discription} />}
    </>
  );
};

export default ColourCard;
