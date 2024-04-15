import React from "react";

const NameList = props => {
  // js code can go here

  // variable

  //function to get the last name
  const getLastName = name => {
    let lastName = name.split(" ")[1];
    return lastName;
  };

  return (
    <div>
      <ul>
        {props.listOfNames.map((name, index) => {
          // getting last name once and using it
          const liElement = (
            <li key={index}>
              <span className="text-info">
                {name} -{getLastName(name)}
              </span>
            </li>
          );
          return liElement;
        })}
      </ul>
    </div>
  );
};

export default NameList;
