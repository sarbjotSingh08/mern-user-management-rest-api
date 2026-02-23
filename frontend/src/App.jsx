
import './App.css'
import Form from './Form'
import User from './User'
import EditUser from './EditUser'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
  <div>  <BrowserRouter>
  <Routes>
    <Route path="/users" element={<User/>}/>
<Route path="/" element={
  <>
    <Form/>
<User/>
  </>}/>
  <Route path="/edit/:id" element={<EditUser />} />
  <Route path="/delete/:id" element={<User/>}/>
</Routes>
</BrowserRouter>
   </div>
 
  )
}

export default App
