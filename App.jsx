import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone13ProMax1 from "./components/IPhone13ProMax1";
import IPhone13ProMax5 from "./components/IPhone13ProMax5";
import IPhone13ProMax4 from "./components/IPhone13ProMax4";
import Home from "./components/Home";
import Outdoor from "./components/Outdoor";
import Pots from "./components/Pots";
import Indoor from "./components/Indoor";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-13-pro-max-1)">
          <IPhone13ProMax1
            overlapGroup1="/img/image-1@1x.png"
            text1="Nothing feels more like home than a space full of gorgeous plants."
            text2="Grow your garden today."
            getStarted="Get Started"
          />
        </Route>
        <Route path="/home">
          <Home {...homeData} />
        </Route>
        <Route path="/outdoor">
          <Outdoor {...outdoorData} />
        </Route>
        <Route path="/pots">
          <Pots {...potsData} />
        </Route>
        <Route path="/indoor">
          <Indoor {...indoorData} />
      </Switch>
    </Router>
  );
}

export default App;
const iPhone13ProMax5Data = {
    iphone13ProMax5: "/img/iphone-13-pro-max---5@1x.png",
    signUp: "Sign Up",
    text4: "Enter information below to  create a GreenSum account",
    firstName: "First name",
    spanText: "Have an account? ",
    spanText2: "Login",
    login: "Login",
    signUp2: "Sign up",
    group4Props: group4Data,
    group42Props: group42Data,
    group43Props: group43Data,
};
const group44Data = {
    children: "Password",
    className: "group-4-1",
};

const iPhone13ProMax4Data = {
    iphone13ProMax4: "/img/iphone-13-pro-max---4@1x.png",
    login: "Login",
    text7: "Please log into your account by entering credentials below.",
    email: "Email",
    createNewAccount: "Create new account",
    forgotPassword: "Forgot password?",
    login2: "Login",
    login3: "Login",
    group4Props: group44Data,
};
const homeData = {
    spanText: "Discovery",
    spanText2: "",
    ellipse1: "/img/ellipse-1-2@2x.png",
    text11: "Search Indoor plants, Succulents, Bonsai",
    forYou: "For you",
    indoor: "Indoor",
    outdoor: "Outdoor",
    text: "",
    pots: "Pots",
    imageRemovebgPreview12: "/img/image-removebg-preview--1--2@2x.png",
    venusFlyTrap: "Venus Fly Trap",
    indoor2: "Indoor",
    price: "$15",
    imageRemovebgPreview11: "/img/image-removebg-preview--1--2@2x.png",
    aloeVera: "Aloe Vera",
    indoor3: "Indoor",
    price2: "$15",
    imageRemovebgPreview1: "/img/image-removebg-preview-1@2x.png",
    aloeVera2: "Aloe Vera",
    indoor4: "Indoor",
    price3: "$15",
    pexelsHuyPhan3125195RemovebgPreview: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera: "Monstera",
    indoor5: "Indoor",
    price4: "$20",
    image4: "/img/image-4@2x.png",
    agave: "Agave",
    indoor6: "Indoor",
    begonia: "Begonia",
    indoor7: "Indoor",
    price5: "$15",
    marblePothos: "Marble Pothos",
    indoor8: "Indoor",
    price6: "$20",
    imageRemovebgPreview71: "/img/image-removebg-preview--7--1@2x.png",
    imageRemovebgPreview81: "/img/image-removebg-preview--8--1@2x.png",
    image3: "/img/image-3@2x.png",
    recentlyViewed: "Recently Viewed",
    imageRemovebgPreview41: "/img/image-removebg-preview--4--1@2x.png",
    place: "Cactus",
    imageRemovebgPreview31: "/img/image-removebg-preview--3--1@2x.png",
    place2: "Cactus",
    imageRemovebgPreview61: "/img/image-removebg-preview--6--1@2x.png",
    place3: "Cactus",
    place4: "Home",
    cart: "Cart",
    account: "Account",
    myGarden: "My Garden",
    imageRemovebgPreview2: "/img/image-removebg-preview-1@2x.png",
    aloeVera3: "Aloe Vera",
    indoor9: "Indoor",
    price7: "$15",
    pexelsHuyPhan3125195RemovebgPreview2: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera2: "Monstera",
    indoor10: "Indoor",
    price8: "$20",
};

const outdoorData = {
    spanText: "Discovery",
    spanText2: "",
    ellipse1: "/img/ellipse-1-2@2x.png",
    text12: "Search Indoor plants, Succulents, Bonsai",
    forYou: "For you",
    indoor: "Indoor",
    outdoor: "Outdoor",
    text: "",
    pots: "Pots",
    name: "Rosemary",
    outdoor2: "Outdoor",
    price: "$15",
    name2: "Basil",
    outdoor3: "Outdoor",
    price2: "$15",
    image5: "/img/image-5@2x.png",
    image6: "/img/image-6@2x.png",
    mint: "Mint",
    outdoor4: "Outdoor",
    price3: "$20",
    image7: "/img/image-7@2x.png",
    parsley: "Parsley",
    outdoor5: "Outdoor",
    price4: "$20",
    ajuga: "Ajuga",
    outdoor6: "Outdoor",
    price5: "$15",
    caladium: "Caladium",
    outdoor7: "Outdoor",
    price6: "$20",
    image10: "/img/image-10@2x.png",
    showMorePlants: "Show more plants",
    place: "Home",
    cart: "Cart",
    account: "Account",
    myGarden: "My Garden",
    imageRemovebgPreview2: "/img/image-removebg-preview-1@2x.png",
    aloeVera: "Aloe Vera",
    indoor2: "Indoor",
    price7: "$15",
    pexelsHuyPhan3125195RemovebgPreview: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera: "Monstera",
    indoor3: "Indoor",
    price8: "$20",
};

const potsData = {
    spanText: "Discovery",
    spanText2: "",
    ellipse1: "/img/ellipse-1-2@2x.png",
    text13: "Search Indoor plants, Succulents, Bonsai",
    forYou: "For you",
    indoor: "Indoor",
    outdoor: "Outdoor",
    text: "",
    pots: "Pots",
    name: "Clay pot",
    outdoor2: "Outdoor",
    price: "$15",
    modernPot: "Modern Pot",
    outdoor3: "Outdoor",
    price2: "$15",
    image11: "/img/image-11@2x.png",
    image12: "/img/image-12@2x.png",
    facePlanter: "Face planter",
    outdoor4: "Outdoor",
    price3: "$20",
    image13: "/img/image-13@2x.png",
    charcoalPot: "Charcoal Pot",
    outdoor5: "Outdoor",
    price4: "$20",
    image14: "/img/image-14@2x.png",
    floralPot: "Floral Pot",
    outdoor6: "Outdoor",
    price5: "$15",
    image15: "/img/image-15@2x.png",
    leafPot: "Leaf Pot",
    outdoor7: "Outdoor",
    price6: "$20",
    image16: "/img/image-16@2x.png",
    showMorePots: "Show more pots",
    place: "Home",
    cart: "Cart",
    account: "Account",
    myGarden: "My Garden",
    imageRemovebgPreview2: "/img/image-removebg-preview-1@2x.png",
    aloeVera: "Aloe Vera",
    indoor2: "Indoor",
    price7: "$15",
    pexelsHuyPhan3125195RemovebgPreview: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera: "Monstera",
    indoor3: "Indoor",
    price8: "$20",
};

const indoorData = {
    spanText: "Discovery",
    spanText2: "",
    ellipse1: "/img/ellipse-1-2@2x.png",
    text14: "Search Indoor plants, Succulents, Bonsai",
    forYou: "For you",
    indoor: "Indoor",
    outdoor: "Outdoor",
    text: "",
    pots: "Pots",
    pexelsHuyPhan3125195RemovebgPreview: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera: "Monstera",
    indoor2: "Indoor",
    price: "$20",
    imageRemovebgPreview71: "/img/image-removebg-preview--7--1-1@2x.png",
    agave: "Agave",
    indoor3: "Indoor",
    imageRemovebgPreview11: "/img/image-removebg-preview--1--1-1@2x.png",
    aloeVera: "Aloe Vera",
    indoor4: "Indoor",
    price2: "$15",
    image4: "/img/image-4-1@2x.png",
    venusFlyTrap: "Venus Fly Trap",
    indoor5: "Indoor",
    price3: "$15",
    price4: "$15",
    imageRemovebgPreview81: "/img/image-removebg-preview--8--1@2x.png",
    begonia: "Begonia",
    indoor6: "Indoor",
    price5: "$15",
    indoor7: "Indoor",
    marblePothos: "Marble Pothos",
    price6: "$20",
    image3: "/img/image-3@2x.png",
    showMorePlants: "Show more plants",
    place: "Home",
    cart: "Cart",
    account: "Account",
    myGarden: "My Garden",
    imageRemovebgPreview2: "/img/image-removebg-preview-1@2x.png",
    aloeVera2: "Aloe Vera",
    indoor8: "Indoor",
    price7: "$15",
    pexelsHuyPhan3125195RemovebgPreview2: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera2: "Monstera",
    indoor9: "Indoor",
    price8: "$20",
};
 

