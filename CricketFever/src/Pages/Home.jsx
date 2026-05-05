import React from "react";
import { homeStyles } from "../assets/dummyStyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function Home(){
    return (
        <div className={homeStyles.root}>
            <div
             className={homeStyles.blob1}
             style={
                {background:homeStyles.blob1Gradient}
             }
             >
            </div>
            <div
             className={homeStyles.blob2}
             style={{
                background:homeStyles.blob2Gradient
             }}>
            </div>
            <div className={homeStyles.headerContainer}>
                <Header onSearch={(q)=>console.log("search",q)}/>  

            </div>
{/* 
            <br />
            <br />
            <Footer/> */}
        </div>
    )
}


export default Home;