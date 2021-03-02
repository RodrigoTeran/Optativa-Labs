// React
import React from "react";

// Components
import Eye from "./Eye";

const WhyThisDay = ({ whyThisDayRef }) => {
  return (
    <>
      <div ref={whyThisDayRef} className="whyThisDay">
        <h2>¿Por qué este día?</h2>
        <div className="whyThisDay__table">
          <div className="whyThisDay__column">
            <ul>
              <li>Para descansar la vista</li>
              <li>Para tener más tiempo libre</li>
              <li>Para tener tiempo a solas</li>
            </ul>
          </div>
          <Eye></Eye>
          <div className="whyThisDay__column">
            <ul>
              <li>Para estar con nuestra familia</li>
              <li>Para descansar más</li>
              <li>Para hacer nuestros hobbies</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyThisDay;
