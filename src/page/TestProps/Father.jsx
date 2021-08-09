import { useRef, forwardRef } from 'react'
import Child from './Child'

const Father = forwardRef((props, ref) => {
  console.log('ref', ref)

  const childRef = useRef()

  const handleFather = () => {
    console.log('点击父', childRef)
    // childRef.current.empty()
  }

  const testChildClick = (val) => {  //父组件接受子组件传来的值
    console.log('测试子组件传值', val)
  }


  return <>
    <div>
      <button onClick={handleFather}>点击父</button>
      <Child ref1={childRef} testChildClick={testChildClick} />
    </div>
  </>
})

export default Father