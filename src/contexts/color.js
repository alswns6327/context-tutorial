import { createContext, useState } from "react";


const ColorContext = createContext({
    state: {color : 'black', subcolor : 'red'},
    actions : {
        setColor: ()=>{},
        setSubcolor: () => {}
    }
});

const ColorPovider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value ={
        state : {color, subcolor},
        actions : {setColor, setSubcolor}
    };

    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

const {Consumer : ColorConsumer} = ColorContext;

export {ColorPovider, ColorConsumer};

export default ColorContext;