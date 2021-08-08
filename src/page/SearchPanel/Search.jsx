import { useState } from 'react'
function Search() {
    const [param, setParam] = useState({name: '', personId: ''})
    const handelChange = (e) => {
        setParam({...param, name: e.target.value})
    }
    return (
        <div>
            <div>{param.name}</div>
            <input value={param.name} onChange={handelChange} />
        </div>
    )
}

export default Search