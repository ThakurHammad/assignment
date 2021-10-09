import React from 'react';

const SearchBar = ({input,setInput}) => {
  const BarStyling = {width:"16rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={input}
     placeholder={"Search Product"}
     onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default SearchBar