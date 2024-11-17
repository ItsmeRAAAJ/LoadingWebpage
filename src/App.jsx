import { useState , useEffect } from "react";

const App = () => {

    let [load , setLoad] = useState(true);

    useEffect(() => { // UnMounting Logic!!
        setTimeout(() => {
            setLoad(false)
        } , 2000)
    } , [])

    return(
        <>
            {load ? <Loading></Loading> : <Content></Content>}
        </>
    )
}

const Loading = () => {
    return(
        <>
            <h2><i>Loading...</i></h2>
        </>
    )
}

const Content = () => {
    return (
        <>
            <h1>Welcome to MyWebsite</h1>
        </>
    )
}

export default App;