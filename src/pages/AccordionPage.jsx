import { useEffect, useState } from "react";

const AccordionPage = () => {
  // const [accoHeight, setAccoHeight] = useState("");

  let [_isClicked, setIsClicked ]= useState([]);
  const handleAccordion = (e, index) => {
    // const length = e.target.nextSibling.childNodes.length;
    const arr = Array.from(e.target.nextSibling.childNodes);
    let height = 0;
    let ttlHeight = 0;
    let copied = [..._isClicked];
      for (let i = 0; i < arr.length; i++) {
        if (!_isClicked[index] === true) {
          (height += arr[i].clientHeight);
          ttlHeight = height + e.target.parentNode.childNodes[0].clientHeight;
          copied[index] = true;
          setIsClicked(copied)
        } else if (!_isClicked[index] === false) {
          height = 0;
          ttlHeight = 60;
          copied[index] = false;
          setIsClicked(copied);
        }
      }
      e.target.parentNode.style.height = `${ttlHeight}px`;
  };

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "아코디언 페이지";
  }, []);

  return (
    <div className="accordion-wrap">
      <ul className="accordion-cont">
        <li className="one-dpth">
          <div onClick={(e) => handleAccordion(e, 0)}>acco1</div>
          <ul className="two-dpth">
            <li>acco1-1</li>
            <li>acco1-2</li>
          </ul>
        </li>
        <li className="one-dpth">
          <div onClick={(e) => handleAccordion(e, 1)}>acco2</div>
          <ul className="two-dpth">
            <li>acco2-1</li>
            <li>acco2-2</li>
            <li>acco2-3</li>
            <li>acco2-4</li>
          </ul>
        </li>
        <li className="one-dpth">
          <div onClick={(e) => handleAccordion(e, 2)}>acco3</div>
          <ul className="two-dpth">
            <li>acco3-1</li>
            <li>acco3-2</li>
          </ul>
        </li>
        <li className="one-dpth">
          <div onClick={(e) => handleAccordion(e, 3)}>acco4</div>
          <ul className="two-dpth">
            <li>acco4-1</li>
            <li>acco4-2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AccordionPage;