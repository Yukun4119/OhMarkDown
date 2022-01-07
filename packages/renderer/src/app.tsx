import React, { useState, useCallback } from 'react'
import Editor from './editor'
import './app.css'

const App: React.FC = () => {
  const curTime = new Date()
  const [doc, setDoc] = useState<string>(`# Hi there! This is Oh Markdown.\n${curTime}\n\n`)

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App
