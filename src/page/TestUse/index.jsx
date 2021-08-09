import React, { useState, useEffect } from 'react'
import * as winReact from 'react'
import { usePromise, useTitle, useCss } from 'react-use'
import Child from './Child'
console.log('winReact', winReact)


const { createElement, isValidElement, Children } = React

const TestChild = createElement('div', {style: {color: '#ccc'}}, '我是test内容')

const Test2 = ({children}) => {

  // const
  console.log('Children', Children, children)
  return <div>test2</div>
}

// console.log('TestChild', TestChild)
// console.log('isValidElement', isValidElement(createElement(Test2)))

const TestUse = () => {

  useTitle('Hello world!');

  const mounted = usePromise();
  const [value, setValue] = useState();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功了')
      // reject('失败了')
    }, 1000);
  })

  useEffect(() => {
    (async () => {
      const value = await mounted(promise);
      // console.log('value', value)
      setValue(value);
    })();
  });

  const headerClass = useCss({
    color: 'red',
    border: '1px solid red',
    '&:hover': {
      color: 'blue',
    },
  });


  // const state = useDrop({
  //   onFiles: files => console.log('files', files),
  //   onUri: uri => console.log('uri', uri),
  //   onText: text => console.log('text', text),
  // });



  return <>
    <div className={headerClass}>
      {/* TestUse
      <div>
        {value}
      </div> */}
      {/* {TestChild}
      <Test2>
        <div>slot</div>
      </Test2>
      {
        createElement(Test2)
      } */}
      <Child>
        {{
          slot1: <div>slot1</div>,
          slot2: <div>slot2</div>
        }}
      </Child>
    </div>
  </>
}

export default TestUse