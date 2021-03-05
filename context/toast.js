import { createContext, useState } from "react"

const ToastContext = createContext()

const ToastProvider = ({ children }) => {
  const [funnel, setMessage] = useState("")

  return (
    <ToastContext.Provider value={{ funnel, setMessage }}>
      {children}
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastContext }
