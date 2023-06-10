import { useState } from "react";

const Question = ({ title, describe, isVisible, setIsVisible }) => {
  return (
    <div>
      <div className="q-head">
        <h2> {title} </h2>
        <div>
          {" "}
          <button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            {isVisible ? "Hide" : "Show"}
          </button>{" "}
        </div>
      </div>
      {isVisible && <p>{describe}</p>}
    </div>
  );
};

const Accordion = () => {
  const [visibleSection, setIsVisibleSection] = useState("question-1");
  return (
    <div className="accordion">
      <h1> Frequently Asked Questions </h1>
      <Question
        title={"Why React is Fast"}
        describe={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        }
        isVisible={visibleSection === "question-1"}
        setIsVisible={() => {
          visibleSection === "question-1"
            ? setIsVisibleSection("")
            : setIsVisibleSection("question-1");
        }}
      />

      <Question
        title={"Why do we use Lifting Cycle Up "}
        describe={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        }
        isVisible={visibleSection === "question-2"}
        setIsVisible={() => {
          visibleSection === "question-2"
            ? setIsVisibleSection("")
            : setIsVisibleSection("question-2");
        }}
      />

      <Question
        title={"Can we Reset Commit in Git?"}
        describe={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        }
        isVisible={visibleSection === "question-3"}
        setIsVisible={() => {
          visibleSection === "question-3"
            ? setIsVisibleSection("")
            : setIsVisibleSection("question-3");
        }}
      />
    </div>
  );
};

export default Accordion;
