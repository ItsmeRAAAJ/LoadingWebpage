import { useState , useEffect } from "react";

const App = () => {

    let [load , setLoad] = useState(true);

    useEffect(() => { // UnMounting Logic!!
        setTimeout(() => {
            setLoad(false)
        } , 1500)
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
            <h2 style={{
                textAlign:"center",
                padding:20,
                borderRadius:30,
                border:"3px solid cyan",
                backgroundColor:"#636e72",
                color:'azure'
            }}><i>Loading...</i></h2>
        </>
    )
}

const Content = () => {
    return (
        <>
            <h1 style={{
                textAlign:"center",
                borderRadius:30,
                border:"4px solid black",
                backgroundColor:'#273c75',
                color:"white",
                padding:40,
            }}>Welcome to MyWebsite</h1>
        </>
    )
}

export default App;