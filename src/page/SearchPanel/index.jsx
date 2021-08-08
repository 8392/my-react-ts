import { useState } from 'react'
import Search from './Search'
import List from './List'

function SearchPanel() {
    const [city, setCity] = useState('成都')
    const listClick = (val) => {
        console.log('val', val)
    }
    const testClick = () => {
        setCity('重庆')
    }
    
    return (
        <div>
            <Search />
            <div>
                {city}
            </div>
            <button onClick={testClick}>测试</button>
            <List city={city} setCity={setCity} listClick={listClick} />
        </div>
    )
}

export default SearchPanel