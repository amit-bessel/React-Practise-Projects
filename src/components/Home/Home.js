import React from "react"
import Banner from "./Banner/Banner"
import HomeAbout from "./About/HomeAbout"
import HomeContact from "./Contact/HomeContact";
import Portfolio from "./PortFolio/Portfolio";

export default function Home(){
    return (
        <div>
            <Banner />

            <Portfolio />

            <HomeAbout />

            <HomeContact />
        </div>
    );
}