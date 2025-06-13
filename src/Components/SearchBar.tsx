import './SearchBar.css'

const SearchBar = ({onSearch}: {onSearch:(query:string) => void}) => 
   (
    <input type="text" className='search-bar' placeholder='Search job title, company, location'
    onChange={(e)=>onSearch(e.target.value)} />
  )


export default SearchBar