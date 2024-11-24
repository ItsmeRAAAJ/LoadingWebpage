import { useEffect , useState } from "react";

function App() {

    let [currentTab , setCurrentTab] = useState("Notifications");
    let [homeContent , setHomeContent] = useState("Home");
    let [notificationsContent , setNotificationsContent] = useState("Notifications");


    const commonStyle_1 = {
        margin: "15px",
        border: "3px solid black",
        padding: "5px",
        borderRadius: "10px",
        color: "black",
        backgroundColor: "white",
        cursor:'pointer'
    }

    return (
        <>
            <div style={{display: "flex" , justifyContent: "center"}}>
                <img style={{
                    width: "200px",
                    cursor: "pointer"
                }} src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="linkedsampleimg" />
            </div>

            <h3 style={{
                textAlign:"right"
            }}>Current Tab: {currentTab}</h3>

            <div style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <button style={{
                    color: currentTab == "Home" ? "yellow" : "black",
                    backgroundColor: currentTab == "Home" ? "black" : "white",
                    margin:"10px",
                    padding: "8px",
                    borderRadius: "15px",
                    cursor: "pointer"

                }} onClick={() => {
                    setCurrentTab("Home")
                }}>Home</button>

                <button style={{
                    color: currentTab == "Notifications" ? "yellow" : "black",
                    backgroundColor: currentTab == "Notifications" ? "black" : "white",
                    margin:"10px",
                    padding: "8px",
                    borderRadius: "15px",
                    cursor: "pointer"

                }} onClick={() => {
                    setCurrentTab("Notifications")
                }}>Notifications</button>

                <button style={{
                    color: currentTab == "Messages" ? "yellow" : "black",
                    backgroundColor: currentTab == "Messages" ? "black" : "white",
                    margin:"10px",
                    padding: "8px",
                    borderRadius: "15px",
                    cursor: "pointer"

                }} onClick={() => {
                    setCurrentTab("Messages")
                }}>Messages</button>

                <button style={{
                    color: currentTab == "Jobs" ? "yellow" : "black",
                    backgroundColor: currentTab == "Jobs" ? "black" : "white",
                    margin:"10px",
                    padding: "8px",
                    borderRadius: "15px",
                    cursor: "pointer"

                }} onClick={() => {
                    setCurrentTab("Jobs")
                }}>Jobs</button>
            </div>
            

            <br /> <br />
            
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                
                {homeContent == currentTab ? <Card>
                    <img style={{borderRadius: "50px" , width: "50px"}} src="shubhImgProf.png" alt="sample" />
                    <input style={{borderRadius: "40px" , padding:'10px' , width:"300px"}} type="text" placeholder="Start a post, try writing with AI"/>
                    
                    <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}> 
                    
                        <div style={commonStyle_1}>Photo</div>
                        <div style={commonStyle_1}>Video</div>
                        <div style={commonStyle_1}>Write article</div>
                    </div>
                </Card> : null}

            </div>

            <div style={{
                display:"flex",
                justifyContent: 'center'
            }}>
                {notificationsContent == currentTab ? <Card>
                    
                    <div style={{
                        display: "flex",

                    }}>

                        <img style={{
                            borderRadius: "50px",
                            width: "40px"
                        }} src="https://shorturl.at/1AAc1" alt="notiImg1" />

                        <div style={{
                            backgroundColor: "#ebe8e8",
                            color: 'black',
                            padding: "10px",
                            marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                            <strong>Hitesh Choudary</strong> posted: Let's build an authentication flow using using FreeAPI and Postman flows Video is up on English Channel
                            
                        </div>
                    
                    </div>

                

                </Card> : null}
            </div>

            <div style={{
                display:"flex",
                justifyContent: 'center'
            }}>
                {notificationsContent == currentTab ? <Card>
                    
                    <div style={{
                        display: "flex",

                    }}>

                        <img style={{
                            borderRadius: "50px",
                            width: "40px"
                        }} src="https://shorturl.at/nIcCk" alt="notiImg1" />

                        <div style={{
                            backgroundColor: "#ebe8e8",
                            color: 'black',
                            padding: "10px",
                            marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                            <strong>Prasenjit Nayak</strong> commented on <strong>Mayank Ahuja's</strong> post: Then Leave it to sell DSA courses
                            
                        </div>
                    
                    </div>

                

                </Card> : null}
            </div>
        
                    
        

        </>
    )
}

function Card({children}) { // Common Card Outer Structure
    return (
        <>
            <div style={{
                backgroundColor:"gray",
                color: "azure",
                borderRadius:"10px",
                padding:"10px",
                margin:"10px",
                boxShadow: "0px 0px 20px 1px black",
            }}>
                {children}
            </div>
        </>
    )
}


export default App;