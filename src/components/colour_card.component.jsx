import { useState } from "react";

import "./colour_card.scss";

const ColourCard = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  return (
    <>
        <div>
            
        </div>
      <div className="create_card">
        <div className="header">
          <div className="icon">
            <i className="material-icons">close</i>
          </div>
          <div className="heading">
            <div>Create a colour card</div>
          </div>
        </div>
        <div className="colour-selection">
          <div className="heading">Select the card</div>
          <div className="colours">
            <div style={{ backgroundColor: "blue" }}></div>
            <div style={{ backgroundColor: "red" }}></div>
            <div style={{ backgroundColor: "yellow" }}></div>
            <div style={{ backgroundColor: "purple" }}></div>
            <div style={{ backgroundColor: "brown" }}></div>
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
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default ColourCard;
