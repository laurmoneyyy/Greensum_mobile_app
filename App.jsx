import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone13ProMax1 from "./components/IPhone13ProMax1";
import Checkout from "./components/Checkout";
import IPhone13ProMax5 from "./components/IPhone13ProMax5";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";
import YourCart from "./components/YourCart";
import IPhone13ProMax4 from "./components/IPhone13ProMax4";
import ProductInfo from "./components/ProductInfo";
import ListboxComponentVariant2 from "./components/ListboxComponentVariant2";
import Home from "./components/Home";
import Outdoor from "./components/Outdoor";
import Pots from "./components/Pots";
import Indoor from "./components/Indoor";
import MyGarden from "./components/MyGarden";

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
        <Route path="/checkout">
          <Checkout {...checkoutData} />
        </Route>
        <Route path="/iphone-13-pro-max-5">
          <IPhone13ProMax5 {...iPhone13ProMax5Data} />
        </Route>
        <Route path="/order-summary">
          <OrderSummary {...orderSummaryData} />
        </Route>
        <Route path="/payment">
          <Payment {...paymentData} />
        </Route>
        <Route path="/your-cart">
          <YourCart {...yourCartData} />
        </Route>
        <Route path="/iphone-13-pro-max-4">
          <IPhone13ProMax4 {...iPhone13ProMax4Data} />
        </Route>
        <Route path="/product-info">
          <ProductInfo {...productInfoData} />
        </Route>
        <Route path="/listbox-component-variant2">
          <ListboxComponentVariant2
            placeholderTextProps={listboxComponentVariant2Data.placeholderTextProps}
            dropdownListProps={listboxComponentVariant2Data.dropdownListProps}
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
        </Route>
        <Route path="/my-garden">
          <MyGarden {...myGardenData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group4Data = {
    children: "Last name",
};

const group42Data = {
    children: "Email Address",
    className: "group-5",
};

const group43Data = {
    children: "Password",
    className: "group-6",
};

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

const listboxComponentDefaultData = {
    dropdownList: "/img/dropdown-list@2x.png",
};

const yourCartData = {
    yourCart: "Your Cart",
    imageRemovebgPreview1: "/img/image-removebg-preview-1@2x.png",
    aloeVera: "Aloe Vera",
    price: "$15.00",
    number: "1",
    ellipse1: "/img/ellipse-1@2x.png",
    calculateShipping: "Calculate Shipping",
    zip: "Zip",
    country: "Country",
    price2: "$19.95",
    price3: "$3.95",
    subtotal: "Subtotal",
    shipping: "Shipping",
    proceedToCheckout: "Proceed to checkout",
    listboxComponentDefaultProps: listboxComponentDefaultData,
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

const placeholderText2Data = {
    className: "placeholder-text-1",
};

const property1DefaultData = {
    children: "Alabama",
};

const property1Default2Data = {
    children: "Alaska",
    className: "item",
};

const property1Default3Data = {
    children: "Arizona",
    className: "item",
};

const property1Default4Data = {
    children: "Arkansas",
    className: "item-1",
};

const property1Default5Data = {
    children: "California",
    className: "item-1",
};

const property1Default6Data = {
    children: "Colorado",
    className: "item",
};

const property1Default7Data = {
    children: "Connecticut",
    className: "item",
};

const property1Default8Data = {
    children: "Delaware",
    className: "item",
};

const property1Default9Data = {
    children: "Florida",
    className: "item",
};

const property1Default10Data = {
    children: "Georgia",
    className: "item",
};

const property1Default11Data = {
    children: "Hawaii",
    className: "item",
};

const property1Default12Data = {
    children: "Idaho",
    className: "item",
};

const property1Default13Data = {
    children: "Illinois",
    className: "item",
};

const property1Default14Data = {
    children: "Indiana",
    className: "item",
};

const property1Default15Data = {
    children: "Iowa",
    className: "item",
};

const property1Default16Data = {
    children: "Kansas",
    className: "item",
};

const property1Default17Data = {
    children: "Kentucky",
    className: "item",
};

const property1Default18Data = {
    children: "Louisiana",
    className: "item",
};

const property1Default19Data = {
    children: "Maine",
    className: "item",
};

const property1Default20Data = {
    children: "Maryland",
    className: "item",
};

const property1Default21Data = {
    children: "Massachusetts",
    className: "item",
};

const property1Default22Data = {
    children: "Michigan",
    className: "item",
};

const property1Default23Data = {
    children: "Minnesota",
    className: "item",
};

const property1Default24Data = {
    children: "Mississippi",
    className: "item",
};

const property1Default25Data = {
    children: "Missouri",
    className: "item",
};

const property1Default26Data = {
    children: "Montana",
    className: "item",
};

const property1Default27Data = {
    children: "Nebraska",
    className: "item",
};

const property1Default28Data = {
    children: "Nevada",
    className: "item",
};

const property1Default29Data = {
    children: "New Hampshire",
    className: "item",
};

const property1Default30Data = {
    children: "New Jersey",
    className: "item",
};

const property1Default31Data = {
    children: "New Mexico",
    className: "item",
};

const property1Default32Data = {
    children: "New York",
    className: "item",
};

const property1Default33Data = {
    children: "North Carolina",
    className: "item",
};

const property1Default34Data = {
    children: "North Dakota",
    className: "item",
};

const property1Default35Data = {
    children: "Ohio",
    className: "item",
};

const property1Default36Data = {
    children: "Oklahoma",
    className: "item",
};

const property1Default37Data = {
    children: "Oregon",
    className: "item",
};

const property1Default38Data = {
    children: "Pennsylvania",
    className: "item",
};

const property1Default39Data = {
    children: "Rhode Island",
    className: "item",
};

const property1Default40Data = {
    children: "South Carolina",
    className: "item",
};

const property1Default41Data = {
    children: "South Dakota",
    className: "item",
};

const property1Default42Data = {
    children: "Tennessee",
    className: "item",
};

const property1Default43Data = {
    children: "Texas",
    className: "item",
};

const property1Default44Data = {
    children: "Utah",
    className: "item",
};

const property1Default45Data = {
    children: "Vermont",
    className: "item",
};

const property1Default46Data = {
    children: "Virginia",
    className: "item",
};

const property1Default47Data = {
    children: "Washington",
    className: "item",
};

const property1Default48Data = {
    children: "West Virginia",
    className: "item",
};

const property1Default49Data = {
    children: "Wisconsin",
    className: "item",
};

const property1Default50Data = {
    children: "Wyoming",
    className: "item",
};

const dropdownListData = {
    property1DefaultProps: property1DefaultData,
    property1Default2Props: property1Default2Data,
    property1Default3Props: property1Default3Data,
    property1Default4Props: property1Default4Data,
    property1Default5Props: property1Default5Data,
    property1Default6Props: property1Default6Data,
    property1Default7Props: property1Default7Data,
    property1Default8Props: property1Default8Data,
    property1Default9Props: property1Default9Data,
    property1Default10Props: property1Default10Data,
    property1Default11Props: property1Default11Data,
    property1Default12Props: property1Default12Data,
    property1Default13Props: property1Default13Data,
    property1Default14Props: property1Default14Data,
    property1Default15Props: property1Default15Data,
    property1Default16Props: property1Default16Data,
    property1Default17Props: property1Default17Data,
    property1Default18Props: property1Default18Data,
    property1Default19Props: property1Default19Data,
    property1Default20Props: property1Default20Data,
    property1Default21Props: property1Default21Data,
    property1Default22Props: property1Default22Data,
    property1Default23Props: property1Default23Data,
    property1Default24Props: property1Default24Data,
    property1Default25Props: property1Default25Data,
    property1Default26Props: property1Default26Data,
    property1Default27Props: property1Default27Data,
    property1Default28Props: property1Default28Data,
    property1Default29Props: property1Default29Data,
    property1Default30Props: property1Default30Data,
    property1Default31Props: property1Default31Data,
    property1Default32Props: property1Default32Data,
    property1Default33Props: property1Default33Data,
    property1Default34Props: property1Default34Data,
    property1Default35Props: property1Default35Data,
    property1Default36Props: property1Default36Data,
    property1Default37Props: property1Default37Data,
    property1Default38Props: property1Default38Data,
    property1Default39Props: property1Default39Data,
    property1Default40Props: property1Default40Data,
    property1Default41Props: property1Default41Data,
    property1Default42Props: property1Default42Data,
    property1Default43Props: property1Default43Data,
    property1Default44Props: property1Default44Data,
    property1Default45Props: property1Default45Data,
    property1Default46Props: property1Default46Data,
    property1Default47Props: property1Default47Data,
    property1Default48Props: property1Default48Data,
    property1Default49Props: property1Default49Data,
    property1Default50Props: property1Default50Data,
};

const listboxComponentVariant2Data = {
    placeholderTextProps: placeholderText2Data,
    dropdownListProps: dropdownListData,
};

const checkoutData = {
    checkout: "Checkout",
    number: "1",
    deliveryAddress: "Delivery Address",
    payment: "Payment",
    orderStatus: "Order Status",
    text3: "Enter Delivery Address",
    fullName: "Full Name",
    email: "Email",
    streetAddress: "Street Address",
    city: "City",
    zipCode: "Zip code",
    proceedToPayment: "Proceed to payment",
};

const orderSummaryData = {
    number: "1",
    checkout: "Checkout",
    deliveryAddress: "Delivery Address",
    payment: "Payment",
    orderStatus: "Order Status",
    shippingAddress: "Shipping Address",
    edit: "Edit",
    address: <>123 Spruce St<br />Silver Spring, MD, 20905</>,
    orderDetails: "Order Details",
    imageRemovebgPreview1: "/img/image-removebg-preview-1@2x.png",
    subtotal: "Subtotal",
    shipping: "Shipping",
    orderTotal: "Order total",
    aloeVera: "Aloe Vera",
    price: "$15.00",
    price2: "$19.95",
    price3: "$3.95",
    price4: "$23.90",
    placeOrder: "Place Order",
};

const paymentData = {
    number: "1",
    checkout: "Checkout",
    deliveryAddress: "Delivery Address",
    payment: "Payment",
    orderStatus: "Order Status",
    text6: "Enter Payment Method",
    nameOnCard: "Name on Card",
    cardNumber: "Card Number",
    expiration: "Expiration",
    cvv: "CVV",
    mmYy: "mm/yy",
    saveCard: "Save card",
    orderSummary: "Order Summary",
};

const productInfoData = {
    water: "Water",
    onceWeek: "Once /week",
    sunlight: "Sunlight",
    address: "6 hrs /day",
    temp: "Temp",
    text9: "55 - 80°",
    ellipse1: "/img/ellipse-1@2x.png",
    imageRemovebgPreview1: "/img/image-removebg-preview-1-2@2x.png",
    aloeVera: "Aloe Vera",
    surname: "Price",
    price: "$15",
    size: "Size",
    surname2: "Small",
    type: "Type",
    indoor: "Indoor",
    description: "Description",
    spanText: <><br /></>,
    spanText2: "Perfect for your kitchen or patio, this Aloe Vera plant will add a healing touch around your home. This succulent promotes the healing of minor cuts, scrapes and sunburns.",
    height: "Height",
    text10: "12-24”",
    maintenence: "Maintenence",
    low: "Low",
    fertilizer: "Fertilizerer",
    place: "None",
    addToCart: "Add to cart",
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

const myGardenData = {
    myGarden: "My Garden",
    ellipse1: "/img/ellipse-1-2@2x.png",
    text15: "Search or scan for plants to add to garden",
    add: "Add",
    waterToday: "Water today:",
    address: "3 plants",
    peperomiaHanging: "Peperomia Hanging",
    address2: "150 ml",
    image18: "/img/image-18@2x.png",
    imageRemovebgPreview1: "/img/image-removebg-preview-1-4@2x.png",
    aloeVera: "Aloe Vera",
    address3: "120 ml",
    image19: "/img/image-19@2x.png",
    moneyTree: "Money Tree",
    address4: "111 ml",
    livingRoom: "Living Room",
    indoor: "Indoor",
    birdsOfParadise: "Birds of Paradise",
    livingRoom2: "Living room",
    image17: "/img/image-17@2x.png",
    peperomiaHanging2: "Peperomia Hanging",
    livingRoom3: "Living room",
    image182: "/img/image-18-1@2x.png",
    indoor2: "Indoor",
    moneyTree2: "Money Tree",
    livingRoom4: "Living room",
    image192: "/img/image-19-1@2x.png",
    japaneseSagoPalm: "Japanese Sago Palm",
    livingRoom5: "Living room",
    image20: "/img/image-20@2x.png",
    bedroom: "Bedroom",
    indoor3: "Indoor",
    aloeVera2: "Aloe Vera",
    bedroom2: "Bedroom",
    imageRemovebgPreview12: "/img/image-removebg-preview-1@2x.png",
    snakePlant: "Snake Plant",
    bedroom3: "Bedroom",
    image21: "/img/image-21@2x.png",
    indoor4: "Indoor",
    aglaonema: "Aglaonema",
    bedroom4: "Bedroom",
    image22: "/img/image-22@2x.png",
    stringOfDolphins: "String of Dolphins",
    bedroom5: "Bedroom",
    image23: "/img/image-23@2x.png",
    outdoor: "Outdoor",
    indoor5: "Indoor",
    peppers: "Peppers",
    place: "Garden",
    image24: "/img/image-24@2x.png",
    tomatoes: "Tomatoes",
    place2: "Garden",
    image212: "/img/image-21-1@2x.png",
    indoor6: "Indoor",
    mint: "Mint",
    place3: "Garden",
    image7: "/img/image-7@2x.png",
    place4: "Garden",
    image232: "/img/image-23-1@2x.png",
    bougainvillea: "Bougainvillea",
    place5: "Garden",
    daffodil: "Daffodil",
    place6: "Garden",
    image25: "/img/image-25@2x.png",
    place7: "Home",
    cart: "Cart",
    account: "Account",
    myGarden2: "My Garden",
    imageRemovebgPreview122: "/img/image-removebg-preview--1--2@2x.png",
    imageRemovebgPreview2: "/img/image-removebg-preview-1@2x.png",
    aloeVera3: "Aloe Vera",
    indoor7: "Indoor",
    text152: "$15",
    pexelsHuyPhan3125195RemovebgPreview: "/img/pexels-huy-phan-3125195-removebg-preview-2@2x.png",
    monstera: "Monstera",
    price: "Indoor",
    indoor8: "$20",
};

