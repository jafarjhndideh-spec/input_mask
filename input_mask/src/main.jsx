

/* eslint-disable react/prop-types */
const Input = ({hint,search,setSearch}) => {
  

  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
};

export default Input;
