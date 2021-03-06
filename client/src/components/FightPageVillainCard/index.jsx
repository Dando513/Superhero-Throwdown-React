import React, { useContext, Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import {
  MDBView,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBProgress,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBLink,
} from "mdbreact";
// import "./style.css";

import FightPageHeroContext from "../../context/fightPageHeroContext";
import FightPageVillainContext from "../../context/fightPageVillainContext";

export default function FightPageVillainCard({ villain }) {
  const { fightPageVillainContext, setFightPageVillainContext } = useContext(
    FightPageVillainContext
  );
  console.log({ fightPageVillainContext });

  console.log("(FightPageVillainCard) villain: ", villain);
  const totalVillainHealth =
    villain.strength + villain.speed + villain.durability;
  const villainAttackPower =
    villain.intelligence + villain.power + villain.combat;

  var currentVillainHealth = totalVillainHealth;
  var lastAttack = 10;
  currentVillainHealth = currentVillainHealth - lastAttack;
  var healthbarValPercent = Math.floor(
    (currentVillainHealth / totalVillainHealth) * 100
  );


  console.log("totalVillainHealth: ", totalVillainHealth);
  console.log("villainAttackPower: ", villainAttackPower);
  var currentVillainHealth = totalVillainHealth;
  var lastAttack = 10;
  currentVillainHealth = currentVillainHealth - lastAttack;
  var healthbarValPercent = Math.floor((currentVillainHealth/totalVillainHealth)*100 )
  // console.log("(FightPageVillainCard) props: ", Villain);
  // creates the colors in the dropdown menu in our card
  function statBarColor(value) {
    if (value <= 50) {
      return "danger";
    } else if (value > 50 && value <= 75) {
      return "warning";
    } else if (value > 75 && value <= 100) {
      return "success";
    } else {
      return;
    }
  }

  return (
    <Fragment>
      <MDBView hover zoom>
        <MDBCard style={{ width: "17rem" }} className="m-2">
          <MDBCardImage
            className="img-thumbnail"
            src={villain.img_url}
            style={{
              width: "100%",
              maxHeight: "338px",
            }}
            alt={`picture of ${villain.name}`}
          />
          <MDBCardBody
            style={{
              maxHeight: "24rem",
              padding: "none",
              textTransform: "capitalize",
            }}
          >
            <MDBCardTitle className="align-text-center myColor">
              <strong>{villain.name}</strong>
            </MDBCardTitle>
            <hr></hr>
            <div style={{ height: "10rem" }}>
              <MDBCardText className="marginBtm mt-0">
                <strong>
                  Tier Ranking:{" "}
                  <span className="myColor">{villain.tier_list}</span>{" "}
                </strong>
              </MDBCardText>
              <MDBCardText>
                <strong>Total Power: {villain.total_power}</strong>{" "}
              </MDBCardText>
              {/* <MDBCardText>
                <strong>Total Power: {villain.total_power}</strong>{" "}
              </MDBCardText>
              <MDBCardText className="marginBtm">
                Alignment: {villain.alignment}
              </MDBCardText>
              <MDBCardText className="marginBtm">
                Race: {villain.race}
              </MDBCardText>
              <MDBCardText className="marginBtm">
                Height: {villain.height}
              </MDBCardText>
              <MDBCardText className="marginBtm">
                Weight: {villain.weight}{" "}
              </MDBCardText> 
              <MDBCardText className="">
                Publisher: <strong>{villain.publisher}</strong>
              </MDBCardText> */}
              <MDBCardText>
                Health:
                <MDBProgress
                  className="my-2"
                  material
                  value={healthbarValPercent}
                  color={statBarColor(parseInt(healthbarValPercent))}
                  animated
                >
                  {healthbarValPercent + "%"}
                </MDBProgress>
              </MDBCardText>
            </div>
            <hr></hr>
            <MDBDropdown className="text-center" size="sm" hover dropup>
              <MDBDropdownToggle color="secondary">
                Power Stats
              </MDBDropdownToggle>
              <MDBDropdownMenu color="secondary" basic>
                <MDBDropdownItem>
                  Combat: {villain.combat}
                  <MDBProgress
                    className="my-2"
                    material
                    value={villain.combat}
                    color={statBarColor(parseInt(villain.combat))}
                  />
                </MDBDropdownItem>
                <MDBDropdownItem>
                  Durability: {villain.durability}
                  <MDBProgress
                    className="my-2"
                    material
                    value={villain.durability}
                    color={statBarColor(parseInt(villain.durability))}
                  />
                </MDBDropdownItem>
                <MDBDropdownItem>
                  Intelligence: {villain.intel}
                  <MDBProgress
                    className="my-2"
                    material
                    value={villain.intel}
                    color={statBarColor(parseInt(villain.intel))}
                  />
                </MDBDropdownItem>
                <MDBDropdownItem>
                  Power: {villain.power}
                  <MDBProgress
                    className="my-2"
                    material
                    value={villain.power}
                    color={statBarColor(parseInt(villain.power))}
                  />
                </MDBDropdownItem>
                <MDBDropdownItem>
                  Speed: {villain.speed}
                  <MDBProgress
                    className="my-2"
                    material
                    value={villain.speed}
                    color={statBarColor(parseInt(villain.speed))}
                  />
                </MDBDropdownItem>
                <MDBDropdownItem>
                  Strength: {villain.strength}
                  <MDBProgress
                    className="my-2"
                    material
                    value={villain.strength}
                    color={statBarColor(parseInt(villain.strength))}
                  />
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBRow>
              <MDBCol className="text-center">
                {/* <MDBLink to="/fight">
                  <MDBBtn className="mb-1" color="danger" size="sm" >
                  Fight!</MDBBtn>
                </MDBLink>   */}
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBView>
    </Fragment>
  );
}
