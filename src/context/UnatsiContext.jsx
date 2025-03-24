//libs
import { createContext } from 'react';

//create context
const UnatsiContext = createContext();

function UnatsiProvider({children}) {
    return (
        <UnatsiContext.Provider value={{}}>
            {children}
        </UnatsiContext.Provider>
    )
}

export { UnatsiContext, UnatsiProvider };
