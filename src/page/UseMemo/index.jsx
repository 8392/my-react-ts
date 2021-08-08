import React, { useState, memo, useMemo, useCallback } from 'react'

const Child = memo(({userInfo}) => {
    console.log(99)
    return (
        <div>
            Child
            {userInfo.age}
        </div>
    )
})


const TestUseMemo = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(1)

    const onClick = () => {
        setCount(count + 1)
   
    }

    const changeChildVal = () => {
        setAge(age + 1)
    }

    const handleClick = useCallback(() => {
        console.log('handleClick')
    }, [])
    
    const userInfo = useMemo(() => {
        return {
            age, 
            city: '成都'
        }
    }, [age])


    return (
        <div>
            <div>{count}</div>
            <div>{age}</div>
            <button onClick={onClick}>点击</button>
            <button onClick={changeChildVal}>点击2</button>
            <Child handleClick={handleClick} userInfo={userInfo} />
        </div>
    )
}

export default TestUseMemo