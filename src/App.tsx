import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className=" w-full h-svh sm:h-screen flex items-center justify-center p-4">
      <div>
        <h1 className=" text-3xl mb-4">FAMILY 100 #ceritanya... 🤔</h1>
        <Link to="/0">
          <Button>Mulai ga neh 👉</Button>
        </Link>
      </div>
    </div>
  )
}

export default App
