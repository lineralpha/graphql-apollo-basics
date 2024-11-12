import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-primary'>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className='btn btn-lg btn-success'
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div
        className='alert alert-primary'
        role='alert'
      >
        <p style={{ display: "none"}} className='d-block'>
          Bootstrap is now successfully installed 😃
        </p>
        <p className='d-none'>
          Bootstrap is not installed if you can see this 😢
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
