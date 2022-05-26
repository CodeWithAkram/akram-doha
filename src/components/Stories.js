import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/akram.jpeg", name: "Akram Khan" },
    { id: 2, image: "/images/akram.jpeg", name: "Akram Khan" },
    { id: 3, image: "/images/akram.jpeg", name: "Akram Khan" },
    { id: 4, image: "/images/akram.jpeg", name: "Akram Khan" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt={story.image} />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;