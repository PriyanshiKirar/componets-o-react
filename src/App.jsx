import Home from "./componets/Home"
import About  from "./componets/About"
import Nav from "./componets/Nav"

const App =()=>{
  let data="data from"
  return (
    <div>
<Home/>
<Nav/>
<About/>
<h1>{data}</h1>
  </div>
  )
}

export default App
