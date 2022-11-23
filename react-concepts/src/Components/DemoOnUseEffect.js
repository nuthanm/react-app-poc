import React , {useState, useEffect} from 'react'

const DemoOnUseEffect = () => {
  // Option 1:
  const [count, setCount] = useState(0);
  //option 2
  // const [count, setData] = React.useState(0);
 useEffect(() => console.log(JSON.stringify("No.of times: " + count)),[count]);

  return (
    <div>
      <p>Demo on <span>useEffect, useStage with OnClick</span></p>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}

export default DemoOnUseEffect