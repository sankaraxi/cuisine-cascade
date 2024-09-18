import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Default"
})

export default UserContext;