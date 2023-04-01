import React, { useState } from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

const FAQ = ({ question, answer }) => {
  const [isAnswerShow, setIsAnswerShow] = useState(false);

  return (
    <article className="faq" onClick={() => setIsAnswerShow(!isAnswerShow)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShow && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
