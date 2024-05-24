import { useRef } from "react";
import { CSSTransition } from "react-transition-group"

const Popup = ({isOpened, onClose}) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition 
      in={isOpened}
      nodeRef={nodeRef}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <div className="popup-wrap" ref={nodeRef}>
        <div className="popup">
          <button type="button" onClick={onClose}>팝업 닫기</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Popup;