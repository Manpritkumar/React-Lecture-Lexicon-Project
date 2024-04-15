import React from "react";

const NameList = () => {
  // js code can go here

  // variable
  const names = ["Manprit kumar", "Agam Athi", "Kanvi Athi"];

  //function

  const getLastName = name => {
    let lastName = name.split(" ")[1];
    return lastName;
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => {
          const liElement = (
            <li key={index}>
              <span className="text-info">
                {name} -{getLastName(name)}
              </span>
              -{getLastName(name)} -{getLastName(name).toUpperCase()}
            </li>
          );

          return liElement;
        })}
      </ul>
    </div>
  );
};

export default NameList;
