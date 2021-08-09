import { forwardRef } from 'react'

const Child = forwardRef((props, ref) => {
  const { testChildClick, ref1 } = props

  ref1.current = {  //父组件调用子组件方法
    empty: () => {
      console.log('测试empty')
    }
  }

  const handleBtn =() => { //子组件传值给父组件
    testChildClick('子组件传值')
  }

  return <>
    <div>
      <button onClick={handleBtn}>点击子</button>
    </div>
  </>
})

export default Child