import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="language-card" onClick={() => setIsClicked(!isClicked)}>
      <>
        {!isClicked && (
          <>
            <h3>{name}</h3>
            <img src={img} alt={name} />
          </>
        )}
      </>
      <>
        {isClicked && (
          <ul>
            {options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default Language;
