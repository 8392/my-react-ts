import React, { useState } from 'react';
// import SearchPanel from 'page/SearchPanel'
import TestFn from 'page/TestFn'
// import UseMemo from 'page/UseMemo'
// import TestChild from 'page/TestChild'

function App() {
  const [flag, setFlag] = useState(true)

  const handleBtn =() => {
    setFlag(!flag)
  }
  return (
    <>
      {/* <SearchPanel /> */}
      <button onClick={handleBtn}>测试销毁组件</button>
      {flag && <TestFn />}
      {/* <UseMemo /> */}
    </>
    // <div>
    //   <TestChild />
    // </div>
  );
}

export default App;
