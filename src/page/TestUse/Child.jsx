import { Children } from 'react'

const Child = ({children}) => {
  const { count } = Children;

  // Children.forEach(children, () => {})
  console.log('children', Children)

  // console.log('child__children', count(children))

  return <div>
    child
  </div>
}

export default Child