const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox')

  return(
    <div className="pa2">
      <input 
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
        />
    </div>
  );
}

export default SearchBox;