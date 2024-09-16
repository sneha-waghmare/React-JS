import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Sneha(){
  return(
  <h1>i'm sneha....</h1>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sneha/>
  </StrictMode>,
)
