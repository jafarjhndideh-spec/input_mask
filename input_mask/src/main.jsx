/* eslint-disable react/prop-types */
const Input = ({ hint, search, handleChange }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" value={search} onChange={handleChange} />
    </div>
  );
};

export default Input;
