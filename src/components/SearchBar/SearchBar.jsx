export default function SearchBar(onSearch) {
   return (
      <div>
          <input type='search' />
      <button onClick={onSearch}>Buscar</button>
      </div>
   );
}
