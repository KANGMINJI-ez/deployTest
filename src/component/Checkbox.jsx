import PropTypes from "prop-types";

const Checkbox = ({ label = "체크박스", id, register, errors }) => {
  return (
    <>
      <div className="input-wrap">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="checkbox" {...register} />
      </div>
     {errors && <p className="message">{errors}</p>}
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;