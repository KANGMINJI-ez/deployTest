const Radio = ({ value, register, errors }) => {
  return value.map((item, index) => (
    <div className="radio-wrap" key={index} {...register}>
      <label htmlFor={item.id}>{item.label}</label>
      <input type="radio" name={item.name} id={item.id} value={item.value} />
      {errors && <p className="message">{errors}</p>}
    </div>
  ));

};

// Radio.propTypes = {
//   label: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default Radio;
