import PropTypes from "prop-types";

const Input = ({ id, label, register, errors }) => {
  return (
    <div className="input-wrap">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...register} />
      {errors && <p className="message">{errors}</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
