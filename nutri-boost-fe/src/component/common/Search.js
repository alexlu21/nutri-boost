import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='col-sm-6 mb-4'>
      <form onSubmit={(s) => s.preventDefault()}>
        <input
        className='form-control'
        type='search'
        role='searchbox'
        placeholder='Buscar'
        value={search}
        onChange={(s) => setSearch(s.target.value)}
        >
        </input>
      </form>
    </div>
  )
}

export default Search
