import React, {createContext, useState} from 'react';

export const Context = createContext();

function ContextProvider (props) {

    const [isAlert, setAlert] = useState(true);
    const [alertText, setText] = useState("");
    const [time, setTime] = useState();
    const [isSolve,setIsSolve] = useState(false);
    const [level,setLevel] = useState(localStorage.getItem('level_number'));
    const [isRule,setIsRule] = useState(false);
    const [levdet, setLevdet] = useState({
        level : 0,
        points: 0,
    })

    const Alert = (x, y) => {
        if(x === "Correct answer!"){
            setText(x);
            setIsSolve(true);
            setTimeout(()=>{
                setAlert(false);
                setTime(y);
            },3000)
        }
        else {
            setText(x);
            setAlert(false);
            setTime(y);
        }
    };

    return(
        <Context.Provider value={{isAlert,level,setLevel,isRule,setIsRule,isSolve,setIsSolve, setAlert, alertText, setText, Alert, time, setTime, levdet, setLevdet}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;