import { useEffect, useState } from "react";
import Card from "../card/card";

import "./colour_card.scss";
const array = [];

const ColourCard = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://demo2965432.mockable.io/highon/colors")
      .then((res) => res.json())
      .then((response) => setData(response.data));
  }, []);

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
                style={{ backgroundColor: "#CD7F32" }}
                onClick={() => {
                  setColour("#CD7F32");
                  setId("1");
                  data.forEach((d) => {
                    if (d.id === "1") {
                      array.push(d);
                    }
                  });
                  console.log(array);
                }}
              ></div>
              <div
                style={{ backgroundColor: "#C8A2C8" }}
                onClick={() => {
                  setColour("#C8A2C8");
                  setId("2");
                  data.forEach((d) => {
                    if (d.id === "2") {
                      array.push(d);
                    }
                  });
                  console.log(array);
                }}
              ></div>
              <div
                style={{ backgroundColor: "#F8ED62" }}
                onClick={() => {
                  setColour("#F8ED62");
                  setId("3");
                  data.forEach((d) => {
                    if (d.id === "3") {
                      array.push(d);
                    }
                  });
                  console.log(array);
                }}
              ></div>
              <div
                style={{ backgroundColor: "#FF0000" }}
                onClick={() => {
                  setColour("#FF0000");
                  setId("4");
                  data.forEach((d) => {
                    if (d.id === "4") {
                      array.push(d);
                    }
                  });
                  console.log(array);
                }}
              ></div>
              <div
                style={{ backgroundColor: "#0033FF" }}
                onClick={() => {
                  setColour("#0033FF");
                  setId("5");
                  data.forEach((d) => {
                    if (d.id === "5") {
                      array.push(d);
                    }
                  });
                  console.log(array);
                }}
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
              <h5>Description</h5>
              <textarea
                type="text"
                placeholder="Description..."
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows="10"
                cols="50"
              />
            </div>
          </div>
          <div className="buttons">
            <button
              className="save"
              onClick={() => {
                setVisible(false);
              }}
            >
              Save
            </button>
            <button
              className="cancel"
              onClick={() => {
                setVisible(false);
                array.pop();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!visible &&
        array &&
        array.map((d) => {
          return (
            <Card
              key={d.id}
              colour={d.code}
              title={title}
              description={description}
              data={d.data}
            />
          );
        })}
    </>
  );
};

export default ColourCard;
