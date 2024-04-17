export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className='search-engine'>
      <input
        type='text'
        placeholder='搜索城市'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        name='search'
      />
      <button
        onClick={handleSearch}>
        搜索
      </button>
    </div>
  )
}
