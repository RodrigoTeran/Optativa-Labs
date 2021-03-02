// React
import React, { useRef } from "react";

// Components
import Eye from "./Eye";

// Hooks
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

const WhyThisDay = ({ whyThisDayRef }) => {
  // Refs
  const h2Ref = useRef(null);
  const li1Ref = useRef(null);
  const li2Ref = useRef(null);
  const li3Ref = useRef(null);
  const li4Ref = useRef(null);
  const li5Ref = useRef(null);
  const li6Ref = useRef(null);

  useAnimationsScroll(
    [h2Ref, li1Ref, li2Ref, li3Ref, li4Ref, li5Ref, li6Ref],
    .5,
    "notAppear"
  );

  return (
    <>
      <div ref={whyThisDayRef} className="whyThisDay">
        <h2 ref={h2Ref} className="notAppear">
          ¿Por qué este día?
        </h2>
        <div className="whyThisDay__table">
          <div className="whyThisDay__column">
            <ul>
              <li ref={li1Ref} className="notAppear">
                Para descansar la vista
              </li>
              <li ref={li2Ref} className="notAppear">
                Para tener más tiempo libre
              </li>
              <li ref={li3Ref} className="notAppear">
                Para tener tiempo a solas
              </li>
            </ul>
          </div>
          <Eye></Eye>
          <div className="whyThisDay__column">
            <ul>
              <li ref={li4Ref} className="notAppear">
                Para estar con nuestra familia
              </li>
              <li ref={li5Ref} className="notAppear">
                Para descansar más
              </li>
              <li ref={li6Ref} className="notAppear">
                Para hacer hobbies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyThisDay;
