

import { createContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = () => {

    const [account,setAccount] = useState('');

    return (
        <DataContext.Provider value = {{

        }}>

        </DataContext.Provider>
    )
}