import { useEffect, Fragment, useState } from 'react'

/* 

    
```md
    0. useEffect默认相当于DidMount和Didupdate生命周期
    1. useEffect第二个参数设置为[]，则useEffect默认只执行一次，相当于DidMount
    2. 可以模拟Didupdate生命周期，第二个参数的数组里面设置需要监听的值的改变
    3. 返回应该函数，函数里面的内容相当于是WillUnMount生命周期，在里面执行一些，清除定时器，清除自定义的事件
```
*/
const TestFn = () => {
    const [age, setAge] = useState(22)

    useEffect(() => {
        console.log('执行useEffect', age)
        return () => {
            console.log('模拟组件销毁', age)
        }
    })

    const handleClick = () => {
        setAge(age+3)
    }

    return (
        <Fragment>
            <div>{age}</div>
            <button onClick={handleClick}>点击</button>
        </Fragment>
    )
}

export default TestFn