import React from 'react'


const MainFn = ({children, testMainClick}) => {
  // const { test1 } = children

  console.log('children', children)

  const handleMain = () => {
    testMainClick('AAA')
  }

  return (
    <div>
      <button onClick={handleMain}>MainFn</button>
      <div>
        {
          // test1('传递值回去')
          children
        }
      </div>
    </div>
  )
}


const TestChild = () => {
  const testMainClick = (val) => {
    console.log('获取子组件传来的值', val)
  }

  return (
    <div>
      TestChild
      <MainFn testMainClick={testMainClick} >
        {
          {
            test1(val) {
              console.log('slotAAA', val)
              return <>
                <div>test1__slot</div>
                <div>{val}</div>
              </>
            }
          }
        }
      </MainFn>
    </div>
  )
}

export default TestChild