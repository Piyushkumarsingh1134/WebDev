import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-500 md:bg-blue-500'>hii</div>
      
      <div className='grid grid-cols-1 md:grid-cols-3'>
  <div>hi there</div>
  <div>hi there</div>
  <div>hi there</div>
</div>

    </>
  )
}

export default App
