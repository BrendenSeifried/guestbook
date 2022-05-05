import { createContext, useState } from 'react'

export const logContext = createContext();

export default function MyContext() {
    const [user, setUser] = useState();

    const cred = (email, password) => {
        const loggedIn = email === process.env.AUTH_EMAIL
    }
  return (
    <div>MyContext</div>
  )
}
