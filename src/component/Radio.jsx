import PropTypes from "prop-types";

const Radio = ({ id, name, label, value }) => {
  return (
    <div className="radio-wrap">
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={name} id={id} />
    </div>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Radio;
