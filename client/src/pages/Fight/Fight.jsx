import React, { useState, useContext} from "react";
import { MDBCol, MDBRow, MDBContainer, MDBCard, MDBView, MDBMask } from "mdbreact";
import Jumbotron from "../../components/Jumbotron"
import "./style.css"
import parallaxImg from "./images/orangeNebula.jpg"


function Fight() {

    const [isLoading, setIsLoading] = useState(true);
  
    console.log("Welcome to the fight page");
  
  
    // console.log(`all heroes in universe for ${username}: ${heroes}`)
    return (
      <div id="fightPage">
        {/* <MDBJumbotron>Welcome to our universe</MDBJumbotron> */}
        <MDBView src={parallaxImg} fixed className="fightBackground">
            <MDBMask overlay="grey-light" className="flex-center"></MDBMask>
          {/* <MDBContainer fluid className="mt-3">
            {isLoading ? (
              <MDBRow>
                  <MDBCol className = "text-center align-items-center">
                      <LoadingSpinner />
                  </MDBCol>
              </MDBRow>
              ) : (
                  <MDBAnimation type="fadeInDown" delay="2s">
                      <UniverseCard characters={heroes} />
                  </MDBAnimation>            
              )}
  
          </MDBContainer> */}
        </MDBView>
      </div>
    );
  
}

export default Fight;