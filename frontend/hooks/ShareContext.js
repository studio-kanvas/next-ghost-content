import {createContext, useContext} from 'react'
const ShareContext = createContext({
    image: '',
    title: '',
    url: '',
    description: '',
})

export const useShareContext = () => useContext(ShareContext)