import { useState, createContext } from 'react'

const AppContext = createContext()

const AppContextProvider = (props) => {

    const [num, setNum] = useState(0)
    const [name, setName] = useState('Ben')


    return (
        <AppContext.Provider value={{
            num, setNum,
            name, setName,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider