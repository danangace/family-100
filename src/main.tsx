import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import QuestionPage from "./pages/QuestionPage.tsx"
import ScrollToTop from "./components/ScrollToTop.tsx"
import "./index.css"
import "./styles/bg.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:questionId",
    element: (
      <>
        <ScrollToTop />
        <QuestionPage />
      </>
    )
  },
  {
    path: "/thankyou",
    element: (
      <div className=" w-full h-svh flex items-center justify-center text-center p-4">
        <h1 className=" text-3xl">
          Makasih yaa udah main <br />
          🩷🩷🩷
        </h1>
      </div>
    )
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" wave-bg">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
