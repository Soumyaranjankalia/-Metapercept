import React from "react";
import data from "../../classes.json";

export const Classes = () => {
  return (
    <div className="ClassesMainDiv">
      <div className="ClassesDiv-One">
        <h1>Classes</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          voluptatibus fugiat, sed debitis sint delectus nesciunt veritatis
          ullam vitae illo nisi soluta rem non nobis nostrum voluptatum, dolores
          reiciendis ipsa?
        </p>
      </div>
      <div className="ClassesDiv-Two">
        {data.map((e, i) => (
          <div className="ClassesDivTwo-One">
            <div className="classImgDiv">
            <img src={e.ImageUrl} alt="Image" />
            </div>
            <p className="classes-pOne">{e.Name}</p>
            <div className="ShortDesc-Div">
            <p className="classes-pTwo">{e.ShortDesc}</p>
            </div>
            <button className="classes-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};
