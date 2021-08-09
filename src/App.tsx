import React, { useState } from 'react';
// import React from 'react';
// import SearchPanel from 'page/SearchPanel'
// import TestFn from 'page/TestFn'
// import UseMemo from 'page/UseMemo'
// import TestChild from 'page/TestChild'
// import TestProps from 'page/TestProps/Father'
import TestUse from 'page/TestUse'

function App() {
  const [flag, setFlag] = useState(true)

  const handleBtn =() => {
    setFlag(!flag)
  }
  return (
    <>
      {/* <SearchPanel /> */}
      {/* <button onClick={handleBtn}>测试销毁组件</button>
      {flag && <TestFn />} */}
      {/* <UseMemo /> */}
      {/* <TestProps /> */}
      {/* <TestUse /> */}
      <button onClick={handleBtn}>测试销毁组件</button>
      {flag && <TestUse />}
    </>
    // <div>
    //   <TestChild />
    // </div>

  );
}

export default App;
