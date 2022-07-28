import React from 'react'

const Header = ({searchBox, setSearchBox}) => {

  return (
    <header className='header'>
        <h1 className="title">Contact Manager</h1>
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            autoFocus
            type="text"
            placeholder='Search Contact'
            required
            role='searchbox'
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
          />
        </form>
    </header>
  )
}

export default Header
