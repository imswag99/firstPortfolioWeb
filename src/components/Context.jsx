import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
import { CardData } from "./CardData";


const AppContext = React.createContext();

const initialState = {
    name : "",
    image : "",
    services : []
}

const AppProvider = ({ children }) => {

    const updateHome = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "JUSTICE",
                image: "images/hero.png"
            }
        })
    }

    const updateAbout = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "SWAGAT TALUKDAR",
                image: "images/aboutHero.png"
            }
        })
    }

    const getServices = () => {
        return dispatch({
            type: "GET_SERVICES",
            payload: CardData
        })
    }

    useEffect(() => {
        getServices();
    },[])

    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={ {...state, updateHome, updateAbout} }>{children}</AppContext.Provider>
}




const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }