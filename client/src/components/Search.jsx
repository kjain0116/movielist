import React from 'react';
const Search = function (props) {
  return (
   // <form>
    <input type = 'search' onChange = {(event) => {
      props.change(event.target.value);
    }}></input>
   // </form>
  )
}
export default Search;