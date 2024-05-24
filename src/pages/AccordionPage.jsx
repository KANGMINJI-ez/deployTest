const AccordionPage = () => {

  const handleAccordion = (e) => {
    e.stopPropagation();
    console.dir(e.target.childNodes);
    
  }

  return (
    <div className="accordion-wrap">
      <ul className="accordion-cont">
        <li 
          className="one-dpth"
          onClick={(e) => handleAccordion(e)}
        >
          <div>acco1</div>
          <ul className="two-dpth">
            <li>acco1-1</li>
            <li>acco1-2</li>
          </ul>
        </li>
        <li className="one-dpth">
          <div>acco2</div>
          <ul className="two-dpth">
            <li>acco2-1</li>
            <li>acco2-2</li>
          </ul>
        </li>
        <li className="one-dpth">
          <div>acco3</div>
          <ul className="two-dpth">
            <li>acco3-1</li>
            <li>acco3-2</li>
          </ul>
        </li>
        <li className="one-dpth">
          <div>acco4</div>
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