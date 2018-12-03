import React from 'react';

function Search(props){
  const {searchFunction, value} = props;
  return ( 
    <label>
      Search Foods
       <input type="text" name="search" placeholder="Pizza" onChange={event => searchFunction(event)} value={value}/>
    </label>
   );
}

 
export default Search;