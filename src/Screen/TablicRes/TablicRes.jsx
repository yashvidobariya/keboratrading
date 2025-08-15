import React from "react";
import logo from "../../Image/logo.png";
import pizza from "../../Image/pizza.jpeg";
import sandwich from "../../Image/sandwich.png";
import samosa from "../../Image/smosa.png";
import burger from "../../Image/burger.png";
import wine from "../../Image/win.png";
import samosaa from "../../Image/ssmosa.png";
import frankie from "../../Image/frankie.png";
import dabeli from "../../Image/dabeli.png";
import vadapav from "../../Image/vadapav.png";
import burgerr from "../../Image/burgerr.png";
import waterball from "../../Image/waterball.png";
import sevpuri from "../../Image/sevpuri.png";
import dahipuri from "../../Image/dahipuri.png";
import mgpizza from "../../Image/mgpizza.png";
import veggie from "../../Image/veggie.png";
import paneerpizza from "../../Image/paneerpizza.png";
import redpizza from "../../Image/redpizza.png";
import afpizza from "../../Image/afpizza.png";
import chole from "../../Image/chole.png";
import bhaji from "../../Image/bhaji.png";
import kajubutter from "../../Image/kajubutter.png";
import paneertikka from "../../Image/paneertikka.png";
import mixveg from "../../Image/mixveg.png";
import dumaaloo from "../../Image/dumaaloo.png";
import paneerbhurji from "../../Image/paneerbhurji.png";
import roti from "../../Image/roti.png";
import paratha from "../../Image/paratha.png";
import alooparatha from "../../Image/alooparatha.png";
import paneerparatha from "../../Image/paneerparatha.png";
import cabbageparatha from "../../Image/cabbageparatha.png";
import onionparatha from "../../Image/onionparatha.png";
import mixvegparatha from "../../Image/mixvegparatha.png";
import cheeseparatha from "../../Image/cheeseparatha.png";
import biryani from "../../Image/biryani.png";
import jeerarice from "../../Image/jeerarice.png";
import vegpulav from "../../Image/vegpulav.png";
import kashmiripulao from "../../Image/kashmiripulao.png";
import vegfriedrice from "../../Image/vegfriedrice.png";
import chillipaneer from "../../Image/chillipaneer.png";
import vegmanchurian from "../../Image/vegmanchurian.png";
import vegnoodles from "../../Image/vegnoodles.png";
import schezwannoodles from "../../Image/schezwannoodles.png";
import vegcheesesandwich from "../../Image/vegcheesesandwich.png";
import aloomasalasandwich from "../../Image/aloomasalasandwich.png";
import corncheesesandwich from "../../Image/corncheesesandwich.png";
import chillicheesesandwich from "../../Image/chillicheesesandwich.png";
import hawakado from "../../Image/hawakado.png";
import masalafries from "../../Image/masalafries.png";
import garlicbread from "../../Image/garlicbread.png";
import alootikki from "../../Image/alootikki.png";
import bruschetta from "../../Image/bruschetta.png";
import plaindosa from "../../Image/plaindosa.png";
import masaladosa from "../../Image/masaladosa.png";
import cheesedosa from "../../Image/cheesedosa.png";
import mysoremasaladosa from "../../Image/mysoremasaladosa.png";
import thali from "../../Image/thali.png";

import bananashek from "../../Image/bananashek.png";
import kajushek from "../../Image/kajushek.png";
import smilk from "../../Image/smilk.png";
import mint from "../../Image/mint.png";
import leaomon from "../../Image/leamon.png";
import love from "../../Image/love.png";
import apple from "../../Image/apple.png";

import img1 from "../../Image/1.png";
import img2 from "../../Image/2.png";
import img3 from "../../Image/3.png";
import img4 from "../../Image/4.png";

import dal from "../../Image/dal.jpeg";
import dalfry from "../../Image/dalfry.png";
import onionbhajiya from "../../Image/onionbhajiya.png";
import potetobhajiya from "../../Image/potetobhajiya.png";
import kumbhaniya from "../../Image/kumbhaniya.png";
import aloopuri from "../../Image/aloopuri.png";
import idli from "../../Image/idli.png";
import miniidli from "../../Image/miniidli.png";
import idli1 from "../../Image/idli1.png";
import sambar from "../../Image/sambar.png";
import dahivada from "../../Image/dahivada.png";
import utt from "../../Image/utt.png";
import utt1 from "../../Image/utt1.png";
import avocado from "../../Image/avocado.png";
import "./Tablic.css";

const TablicRes = () => {
  const menuItems = [
    {
      title: "Samosa",
      price: "25 LE",
      description:
        "Crispy golden pastry filledwith a spicy mashed potatoand green pea mix, deep-fried to perfection",
      image: samosaa,
    },
    {
      title: "Frankie",
      price: "100 LE",
      description:
        "The delicious frankie recipe is asnack that everyone will enjoy andis a popular vegetarian street foodoption across India.",
      image: frankie,
    },
    {
      title: "Vadapav",
      price: "30 LE",
      description:
        "A beloved Mumbai streetclassic! Spiced potato pattydeep-fried to perfection,sandwiched in a soft pav bun,layered with tangy garlicchutney and served with afried green chili.",
      image: vadapav,
    },
    {
      title: "Dabeli",
      price: "80 LE",
      description:
        "A sweet and spicy Indian snackfeaturing mashed potato mixed withspecial dabeli masala, stuffed in atoasted bun with tamarind chutney,garlic chutney, crunchy peanuts",
      image: dabeli,
    },
    {
      title: "Burger",
      price: "120 LE",
      description:
        "A crispy veggie patty layeredwith lettuce, tomato, onions,and creamy mayo in a toastedbun.",
      image: burgerr,
    },
    {
      title: "Water Balls",
      price: "50 LE",
      description:
        "Crispy, hollow puris filled with spicy potato, tangy tamarindwater, and flavorful mint-coriander pani – a burst offlavor in every bite!",
      image: waterball,
    },
    {
      title: "sev puri",
      price: "60 LE",
      description:
        "Crunchy puris topped with spicy mashedpotatoes, choppedonions, tangy chutneys,and a generous sprinkleof crispy sev – a perfectstreet-style snack.",
      image: sevpuri,
    },
    {
      title: "Dahi Puri",
      price: "70 LE",
      description:
        "Delicate puris filled with potatoes and topped withsweet yogurt, tangy chutneys,and sev – a cool, creamy twistto the classic chaat.",
      image: dahipuri,
    },
    {
      id: 5,
      title: "Afredo Pasta",
      description: "WHITE SAUCE BLENDED WITHGARLIK AND PASTA.",
      price: "200 LE",
      image: afpizza,
    },
    {
      id: 4,
      title: "Red Source Pasta",
      description:
        "pasta in a tangy tomato -garlicsauce finished with herbs anda touch of relive oil200",
      price: "150 LE",
      image: redpizza,
    },
  ];

  const menuItem = [
    {
      id: 1,
      name: "Magghrerita Pizza",
      description:
        "A sweet and spicy Indian snack featuring mashed potato mixedwith special dabeli masala,stuffed in a toasted bun withtamarind chutney, garlicchutney, crunchy peanuts.",
      price: "220 LE",
      img: mgpizza,
    },
    {
      id: 2,
      name: "Veggie Delight",
      description:
        "A colorful mix of bell peppers, onions, tomatoes, olives, and sweetcorn on a cheesy tomato base —fresh, flavorful, and satisfying.",
      price: "250 LE",
      img: veggie,
    },
    {
      id: 3,
      name: "Paneer Pizza",
      description:
        "Tandoori-marinated paneer cubes, onions, and capsicum on a cheesytomato base — a perfect fusion ofIndian spice and Italian style.",
      price: "280 LE",
      img: paneerpizza,
    },
  ];

  const MenuItem = [
    {
      id: 1,
      name: "Kaju Butter Masala",
      description:
        "Kaju Butter Masala is a rich and creamy North Indian curry featuring cashews as the star ingredient.",
      price: "200 LE",
      img: kajubutter,
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      description:
        "Paneer Tikka Masala is a popular Indian curry where cubes of paneer are cooked in a sauce of your choice and best served with a fluffy naan or boiled rice.",
      price: "200 LE",
      img: paneertikka,
    },
    {
      id: 3,
      name: "Mix Vegetable",
      description:
        "This dish features a colorful assortment of seasonal produce, such as cauliflower, carrots, peas, and green beans, all harmoniously blended with aromatic spices and herbs for a satisfying culinary experience.",
      price: "200 LE",
      img: mixveg,
    },
    {
      id: 4,
      name: "Dum Aloo",
      description:
        "Baby potatoes cooked in a spicy curry made with yogurt and a touch of cream.",
      price: "200 LE",
      img: dumaaloo,
    },
    {
      id: 5,
      name: "Paneer Bhurji",
      description:
        "Paneer Bhurji is a scrambled paneer dish cooked with onions, tomatoes, and spices, creating a flavorful and quick-tomake meal. It's a versatile dish that pairs well with bread or as a filling for wraps.",
      price: "200 LE",
      img: paneerbhurji,
    },
  ];

  const itemmenu = [
    {
      id: 6,
      name: "Chapati Roti",
      description:
        "ERoti or Chapati is everydayIndian flatbread which ismade with only 2 ingredients-whole wheat flour (atta) andwater.",
      price: "20 LE",
      img: roti,
    },
    {
      id: 7,
      name: "Simple Paratha",
      description:
        "Paratha and roti are bothpopular Indian flatbreads,but they differ in texture andpreparation.Roti or Chapati is everydayIndian flatbread which ism",
      price: "30 LE",
      img: paratha,
    },
    {
      id: 8,
      name: "Aloo Paratha",
      description:
        "Stuffed with spiced mashed potatoes and fresh coriander. A classic North Indian breakfast.",
      price: "80 LE",
      img: alooparatha,
    },
    {
      id: 9,
      name: "Paneer Paratha",
      description:
        "Filled with grated paneer, green chilies, and mild spices for a flavorful bite.",
      price: "80 LE",
      img: paneerparatha,
    },
    {
      id: 10,
      name: "Cabbage Paratha",
      description:
        "Filled with grated cabbage, green chilies, and mild spices.",
      price: "80 LE",
      img: cabbageparatha,
    },
    {
      id: 11,
      name: "Onion Paratha",
      description: "Finely chopped onions blended with spices and herbs.",
      price: "80 LE",
      img: onionparatha,
    },
    {
      id: 12,
      name: "Mix Veg Paratha",
      description:
        "Whole wheat flatbread stuffed with spiced mixed vegetables, served with yogurt and pickle.",
      price: "100 LE",
      img: mixvegparatha,
    },
    {
      id: 13,
      name: "Cheese Paratha",
      description: "Stuffed with cheese and mild masala – kid's favorite!",
      price: "120 LE",
      img: cheeseparatha,
    },
  ];

  const itemmenus = [
    {
      id: 14,
      name: "Veg Biryani",
      description:
        "Fragrant basmati rice layered with spiced vegetables and herbs, cooked in traditional dum style.",
      price: "120 LE",
      img: biryani,
    },
    {
      id: 15,
      name: "Jeera Rice",
      description:
        "Simple and aromatic rice tempered with cumin seeds and ghee – perfect with any curry.",
      price: "60 LE",
      img: jeerarice,
    },
    {
      id: 16,
      name: "Veg Pulav",
      description:
        "Basmati rice cooked with seasonal vegetables and whole spices, mildly spiced and flavorful.",
      price: "120 LE",
      img: vegpulav,
    },
    {
      id: 17,
      name: "Kashmiri Pulao",
      description:
        "Mildly sweet rice dish cooked with saffron, dry fruits, and nuts – a royal delicacy.",
      price: "120 LE",
      img: kashmiripulao,
    },
    {
      id: 18,
      name: "Veg Fried Rice",
      description:
        "Wok-tossed rice with colorful vegetables and soy seasoning.",
      price: "120 LE",
      img: vegfriedrice,
    },
    {
      id: 19,
      name: "Masoor Dall",
      description:
        "Masoor dal, also known as red lentils, is a type of lentil popular in Indian cuisine. It is a quickcooking, protein-rich legume with a mild, earthy flavor.",
      price: "60 LE",
      img: vegpulav,
    },
    {
      id: 20,
      name: "Dal Makhani",
      description:
        "Dal Makhani is a rich and creamy Indian dish made with whole black lentils (uraddal), kidney beans (rajma), butter, and cream.",
      price: "100 LE",
      img: kashmiripulao,
    },
    {
      id: 21,
      name: "Toor Dal",
      description:
        "Toor dal, also known as pigeon pea or Arhar dal, is a popular lentil in Indian cuisine, known for its mild, nutty flavor and high protein content.",
      price: "80 LE",
      img: dal,
    },
    {
      id: 22,
      name: "Dal Fry",
      description:
        "Dal fry is a popular Indian dish featuring lentils (dal) cooked and then simmered in a flavorful, spiced oil or sauce called tadka or tarka.",
      price: "80 LE",
      img: dalfry,
    },
    {
      id: 22,
      name: "Onion Bhajiya",
      description:
        "Kanda Bhaji recipe with step by step photos. Kanda Bhaji are fried onion fritters.",
      price: "100 LE",
      img: onionbhajiya,
    },
    {
      id: 22,
      name: "poteto Bhajiya",
      description:
        "Potato Vada, also known as Batata Vada, is a popular Indian snack, especially in Maharashtra. It consists of a spicy mashed potato filling, coated in a gram flour (besan) batter, and deep-fried until golden brown and crispy.",
      price: "150 LE",
      img: potetobhajiya,
    },
    {
      id: 22,
      name: "Kumbhaniya Bhajiya",
      description:
        "Dal fry is a popular Indian dish featuring lentils (dal) cooked and then simmered in a flavorful, spiced oil or butter base known as tadka or tarka.",
      price: "100 LE",
      img: kumbhaniya,
    },
    {
      id: 23,
      name: "Poteto Puri",
      description:
        "Potato Bhajiya, also known as Aloo Pakora or Potato Fritters, is a popular Indian snack made by coating thinly sliced potatoes in a spiced chickpea flour batter and deep-frying them until golden and crispy.",
      price: "120 LE",
      img: aloopuri,
    },
  ];

  const chines = [
    {
      id: 19,
      name: "Chilli Paneer",
      description:
        "Fried paneer tossed in spicy garlic-soy sauce with peppers.",
      price: "120 LE",
      img: chillipaneer,
      category: "Chinese",
    },
    {
      id: 20,
      name: "Veg Manchurian",
      description: "Veg balls in spicy tangy sauce, perfect as a starter.",
      price: "120 LE",
      img: vegmanchurian,
      category: "Chinese",
    },
    {
      id: 21,
      name: "Veg Hakka Noodles",
      description: "Stir-fried noodles with mixed vegetables and soy sauce.",
      price: "120 LE",
      img: vegnoodles,
      category: "Chinese",
    },
    {
      id: 22,
      name: "Schezwan Noodles",
      description: "Spicy noodles with Schezwan sauce, ideal for heat lovers.",
      price: "120 LE",
      img: schezwannoodles,
      category: "Chinese",
    },
  ];

  const sandwichitem = [
    {
      id: 23,
      name: "Veg Cheese Grilled Sandwich",
      description:
        "Loaded with fresh veggies and melted cheese, grilled to crispy perfection.",
      price: "70 LE",
      img: vegcheesesandwich,
      category: "Sandwich",
    },
    {
      id: 24,
      name: "Aloo Masala Sandwich",
      description:
        "Spiced mashed potatoes with chutney and onions in grilled bread.",
      price: "120 LE",
      img: aloomasalasandwich,
      category: "Sandwich",
    },
    {
      id: 25,
      name: "Corn & Cheese Sandwich",
      description:
        "Creamy corn and cheese filling, freshly seasoned and toasted.",
      price: "120 LE",
      img: corncheesesandwich,
      category: "Sandwich",
    },
    {
      id: 26,
      name: "Chilli Cheese Sandwich",
      description:
        "Melted cheese with green chilies and herbs in a spicy toast.",
      price: "100 LE",
      img: chillicheesesandwich,
      category: "Sandwich",
    },
  ];

  const bread = [
    {
      id: 23,
      img: img1,
    },
    {
      id: 23,
      img: img2,
    },
    {
      id: 23,
      img: img3,
    },
    {
      id: 23,
      img: img4,
    },
  ];

  const hakka = [
    {
      id: 27,
      name: "avocado Toast",
      description:
        "Avocado toast is a simple, open-faced sandwich consisting of toasted bread topped with mashed or sliced avocado, often with additional toppings like tomato and lettuce.",
      price: "100 LE",
      img: avocado,
      category: "Sides & Toast",
    },
    {
      id: 28,
      name: "Masala Fries",
      description: "Crispy fries tossed in tangy Indian masala seasoning.",
      price: "60 LE",
      img: masalafries,
      category: "Sides & Toast",
    },
    {
      id: 29,
      name: "Garlic Bread with Cheese",
      description: "Toasted bread loaded with garlic butter and melted cheese.",
      price: "80 LE",
      img: garlicbread,
      category: "Sides & Toast",
    },
    {
      id: 30,
      name: "Aloo Tikki",
      description: "Spiced potato patties served with chutneys, curd, and sev.",
      price: "60 LE",
      img: alootikki,
      category: "Sides & Toast",
    },
    {
      id: 31,
      name: "Bruschetta",
      description:
        "Toasted bread topped with fresh tomato, garlic, basil, and olive oil.",
      price: "100 LE",
      img: bruschetta,
      category: "Sides & Toast",
    },
  ];

  const south = [
    {
      id: 32,
      name: "Plain Dosa",
      description:
        "Crispy golden rice-lentil crepe, served with coconut chutney and sambar.",
      price: "60 LE",
      img: plaindosa,
      category: "South Indian",
    },
    {
      id: 33,
      name: "Masala Dosa",
      description:
        "A classic dosa filled with mildly spiced mashed potato stuffing.",
      price: "100 LE",
      img: masaladosa,
      category: "South Indian",
    },
    {
      id: 34,
      name: "Cheese Dosa",
      description: "Dosa stuffed with melted cheese for a fusion twist.",
      price: "130 LE",
      img: cheesedosa,
      category: "South Indian",
    },
    {
      id: 35,
      name: "Mysore Masala Dosa",
      description:
        "Spicy red chutney spread inside with potato masala stuffing.",
      price: "140 LE",
      img: mysoremasaladosa,
      category: "South Indian",
    },
    {
      id: 6,
      name: "Chhole Bhature (WITH ACHAR)",
      description:
        "A North Indian favorite! Fluffy, deep-fried bhature served with spicy andflavorful chickpea curry (chhole),garnished with onions, lemon, andtangy pickles – a hearty andsatisfying meal any time of the day.",
      price: "120 LE",
      img: chole,
      category: "South Indian",
    },
    {
      id: 7,
      name: "Pav Bhaji",
      description:
        "Pav bhaji is a popular Indian street food consisting of a spicymashed vegetable curry (bhaji)served with soft bread rolls(pav).",
      price: "150 LE",
      img: bhaji,
      category: "South Indian",
    },
    {
      id: 8,
      name: "Steamed Idli",
      description:
        "Soft, steamed rice cakesserved with coconutchutney and hot sambar.",
      price: "60 LE",
      img: idli,
      category: "South Indian",
    },
    {
      id: 9,
      name: "Mini Idli In Sambar",
      description:
        "Tiny idlis soaked in tangysambar and garnishedwith coriander.",
      price: "80 LE",
      img: miniidli,
      category: "South Indian",
    },
    {
      id: 10,
      name: "Fried Idli",
      description: "Crisp-fried idli cubestossed in South Indiantempering.",
      price: "80 LE",
      img: idli1,
      category: "South Indian",
    },
    {
      id: 11,
      name: "Sambar",
      description:
        "Spicy, tangy lentil soupcooked with vegetables andtamarind — a must-havedip.",
      price: "20 LE",
      img: sambar,
      category: "South Indian",
    },
    {
      id: 12,
      name: "Dahi Vada",
      description:
        "Lentil fritters soaked inyogurt, topped with spicesand chutney..",
      price: "120 LE",
      img: dahivada,
      category: "South Indian",
    },
    {
      id: 13,
      name: "Onion Uttapam",
      description:
        "Thick dosa topped with finelychopped onions, chili, andcoriander.",
      price: "100 LE",
      img: utt,
      category: "South Indian",
    },
    {
      id: 14,
      name: "Vegetable Uttapam",
      description: "Soft uttapam loaded with colorful mixed vegetables",
      price: "130 LE",
      img: utt1,
      category: "South Indian",
    },
  ];

  const dessret = [
    {
      id: 23,
      name: "Banana Milk Shek",
      price: "180 LE",
      img: bananashek,
    },
    {
      id: 24,
      name: "Kaju thik Shek",
      price: "200 LE",
      img: kajushek,
    },
    {
      id: 25,
      name: "strawberry milk shek",
      price: "220 LE",
      img: smilk,
    },
    {
      id: 26,
      name: "aavakado Juice",
      price: "100 LE",
      img: avocado,
    },
  ];

  const sheesha = [
    {
      id: 23,
      name: "Lemon",
      img: leaomon,
    },
    {
      id: 24,
      name: "Love",
      img: love,
    },
    {
      id: 25,
      name: "Mint",
      img: mint,
    },
    {
      id: 25,
      name: "Doble Apple",
      img: apple,
    },
  ];

  return (
    <div className="flyer-wrapper">
      <header className="flyer-header">
        <h1>Now Serving Delicious Moments</h1>
        <p className="subheading">Open Daily | 10:00 AM – 2:00 AM</p>
      </header>

      <div className="image-grid">
        <img src={pizza} alt="Pizza" />
        <img src={sandwich} alt="Sandwich" />
        <img src={samosa} alt="Samosa" />
        <img src={burger} alt="Burger" />
      </div>

      <section className="flyer-details">
        <img src={logo} alt="logo" />
        <h2>WE'RE OPEN</h2>
        <p>{/* <strong>Form 10.00 am to 02.00 am</strong> */}</p>
        <p>
          <a href="tel:+23233059586">Vishal Rudani +232 33059586</a>
        </p>
        <div>
          <p>
            43, Koinkaidu Road, Next to Legecy Club Opera, Kono, Sierra Leone
          </p>
        </div>
      </section>
      <div className="Menu-main-div">
        <h1>Bar Menu</h1>
        <div className="card-grid">
          <div className="card">
            <img src={wine} alt="Soft Drinks" />
            <div className="card-content">
              <h3>Bar Menu</h3>
              <ul>
                {" "}
                <li>
                  Herbal Bitter<span>20 LE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li>
                Bita Kola<span>20 LE</span>
              </li>
              <li>
                Fruit Wine <span>25 LE</span>
              </li>
              <li>
                Big Daddy <span>25 LE</span>
              </li>
              <li>
                Orange Vodka<span>25 LE</span>
              </li>
              <li>
                Kiss N fly (Red Wine) <span>25 LE</span>
              </li>
              <li>
                Charger <span>25 LE</span>
              </li>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li>
                Star <span>30 LE</span>
              </li>
              <li>
                Cody's (300 ML) <span>30 LE</span>
              </li>
              <li>
                Amstel Lager<span>35 LE</span>
              </li>
              <li>
                Mutzig <span>35 LE</span>
              </li>
              <li>
                Guiness<span>40 LE</span>
              </li>
              <li>
                Vody <span>50 LE</span>
              </li>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <ul>
                <li>
                  Cody's White<span>60 LE</span>
                </li>
                <li>
                  Beck's <span>60 LE</span>
                </li>
                <li>
                  Heineken <span>60 LE</span>
                </li>
                <li>
                  Cody's Black <span>70 LE</span>
                </li>
                <li>
                  Budweiser<span>70 LE</span>
                </li>
                <li>
                  Carlsber <span>60 LE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Menu-main-div">
        {/* <h1>Bar Menu</h1> */}
        <div className="card-grid">
          <div className="card">
            <div className="card-content">
              <ul>
                <li className="name-border">
                  <span>Name</span>
                  <span></span>
                  <span></span>
                  <span>30 ML</span>
                  <span>Price</span>
                </li>
                <li>
                  6 PM Grain Blended
                  <span>20 LE</span>
                  <span>120 LE</span>
                </li>
                <li>
                  Magic Sharkling
                  <span></span>
                  <span>20 LE</span>
                  <span>250 LE</span>
                </li>
                <li>
                  Tassenberg
                  <span></span>
                  <span></span>
                  <span>20 LE</span>
                  <span>250 LE</span>
                </li>
                <li>
                  8 PM Dark Rum
                  <span></span>
                  <span>25 LE</span>
                  <span>280 LE</span>
                </li>
                <li>
                  8 PM Fire
                  <span></span>
                  <span></span>
                  <span>30 LE</span>
                  <span>300 LE</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <li className="name-border">
                <span>Name</span>
                <span></span>
                <span></span>
                <span>30 ML</span>
                <span>Price</span>
              </li>
              <li>
                Dom Bosco
                <span></span>
                <span></span>
                <span>30 LE</span>
                <span>300 LE</span>
              </li>
              <li>
                Reserve 7<span></span>
                <span></span>
                <span></span>
                <span>30 LE</span>
                <span>300 LE</span>
              </li>
              <li>
                Legend Premium
                <span></span>
                <span>30 LE</span>
                <span>300 LE</span>
              </li>
              <li>
                Grand Master's
                <span></span>
                <span>30 LE</span>
                <span>300 LE</span>
              </li>
              <li>
                The Honest Man
                <span></span>
                <span>30 LE</span>
                <span>350 LE</span>
              </li>
              <li>
                Magic Moment
                <span></span>
                <span>30 LE</span>
                <span>350 LE</span>
              </li>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li className="name-border">
                <span>Name</span>
                <span></span>
                <span></span>
                <span>30 ML</span>
                <span>Price</span>
              </li>
              <li>
                Malibu
                <span></span>
                <span></span>
                <span>40 LE</span>
                <span>800 LE</span>
              </li>
              <li>
                Ballantines
                <span> </span>
                {/* <span></span> */}
                <span>45 LE</span>
                <span>900 LE</span>
              </li>
              <li>
                Red Label
                <span></span>
                <span></span>
                <span>45 LE</span>
                <span>900 LE</span>
              </li>
              <li>
                Teacher's
                <span></span>
                <span></span>
                <span>40 LE</span>
                <span>950 LE</span>
              </li>
              <li>
                Chapari
                <span></span>
                <span></span>
                <span></span>
                <span>30 LE</span>
                <span>1000 LE</span>
              </li>
              <li>
                Red Label
                <span></span>
                <span></span>
                <span></span>
                <span>45 LE</span>
                <span>1000 LE</span>
              </li>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li className="name-border">
                <span>Name</span>
                <span></span>
                <span></span>
                <span>30 ML</span>
                <span>Price</span>
              </li>
              <ul>
                <li>
                  Jameson
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>45 LE</span>
                  <span>1000 LE</span>
                </li>
                <li>
                  Jameson
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>50 LE</span>
                  <span>1200 LE</span>
                </li>
                <li>
                  Black Label
                  <span></span>
                  <span></span>
                  <span>60 LE</span>
                  <span>1500 LE</span>
                </li>
                <li>
                  Chivas
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>60 LE</span>
                  <span>1700 LE</span>
                </li>
                <li>
                  Double Black
                  <span></span>
                  <span></span>
                  <span>70 LE</span>
                  <span>2000 LE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Menu-main-div">
        <h1>Soft Drinks</h1>
        <div className="card-grid">
          <div className="card">
            <img src={wine} alt="Soft Drinks" />
            <div className="card-content">
              <h3>Soft Drinks</h3>
              <ul>
                <li>
                  Water Bottle<span>10LE, 20 LE</span>
                </li>
                <li>
                  Apple Cedae<span>20 LE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li>
                Bintu <span>20 LE</span>
              </li>
              <li>
                Viromo <span>20 LE</span>
              </li>
              <li>
                Tonic<span>20 LE</span>
              </li>
              <li>
                Tropical<span>20 LE</span>
              </li>
              <li>
                Siera Mange <span>20 LE</span>
              </li>
              <li>
                Mega Cola <span>20 LE</span>
              </li>
              <li>
                King cola<span>20 LE</span>
              </li>
              <li>
                Vandam<span>20 LE</span>
              </li>
              <li>
                24 Hours <span>20 LE</span>
              </li>
              <li>
                Fresh Up <span>20 LE</span>
              </li>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li>
                Mummy Fruity<span>20 LE</span>
              </li>
              <ul>
                <li>
                  X-Tra Tropical<span>25 LE</span>
                </li>
                <li>
                  Commando <span>25 LE</span>
                </li>
                <li>
                  Pepsi <span>30 LE</span>
                </li>
                <li>
                  Sprite <span>30 LE</span>
                </li>
                <li>
                  Cocacola<span>30 LE</span>
                </li>
                <li>
                  Fanta <span>30 LE</span>
                </li>
                <li>
                  7 Up<span>30 LE</span>
                </li>
                <li>
                  Maltina <span>30 LE</span>
                </li>
                <li>
                  Vimto Fruit Flavour <span>30 LE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <ul>
                <li>
                  Vimto Sparking <span>35 LE</span>
                </li>
                <li>
                  Lucozade <span>35 LE</span>
                </li>
                <li>
                  Vita Milk<span>40 LE</span>
                </li>
                <li>
                  Dite Coke<span>50 LE</span>
                </li>
                <li>
                  Redbull <span>60 LE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="fastfood-div">
        <h1>Fast Food Menu</h1>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="menu-content-div">
                <h3 className="menu-title">{item.title}</h3>
                <p className="menu-description">{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Pizaa And Pasta</h1>
        <div className="menu-grid">
          {menuItem.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Punjabi Dishes</h1>
        <div className="menu-grid">
          {MenuItem.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Chapati & Paratha</h1>
        <div className="menu-grid">
          {itemmenu.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Rice Dishes</h1>
        <div className="menu-grid">
          {itemmenus.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Chines</h1>
        <div className="menu-grid">
          {chines.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
{/*         <h1 className="menu-title">Hawakado Toast</h1> */}
        <div className="menu-grid">
          {sandwichitem.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Sandwich</h1>
        <div className="menu-grid">
          {hakka.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">South Dishes</h1>
        <div className="menu-grid">
          {south.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="limited-plate-container">
        <h1 className="heading">LIMITED PLATE</h1>

        <div className="limited-plate-wrapper">
          <div className="limited-plate-image">
            <img src={thali} alt="Limited Plate" />
          </div>

          <div className="menu-info">
            <h2 className="menu-heading">WHAT'S INCLUDED</h2>
            <ul className="menu-list">
              <li>WATER BALL</li>
              <li>SAMOSA / VADAPAV</li>
              <li>SABJI</li>
              <li>4 ROTI</li>
              <li>DAL-FRY</li>
              <li>PAPAD</li>
              <li>ACHAR</li>
              <li>DAHI</li>
            </ul>
          </div>

          <div className="note-price-wrapper">
            <div className="note-box">
              <button className="note-btn">NOTE</button>
              <p className="note-text">
                DON’T WASTE FOOD
                <br />
                NO SHARING
              </p>
            </div>
            <div className="price-badge">
              ₹350 LE <br />
              LIMITED
            </div>
          </div>
        </div>

        <div className="food-items-grid">
          <div className="food-item">
            <img src={samosaa} alt="Samosa" />
            <p>SAMOSA</p>
          </div>
          <div className="food-item">
            <img src={waterball} alt="Water Ball" />
            <p>WATER BALL</p>
          </div>
          <div className="food-item">
            <img src={vadapav} alt="Vadapav" />
            <p>VADAPAV</p>
          </div>
        </div>
      </div>

      <div className="fastfood-div">
        {/* <h1 className="menu-title">Hawakado Toa</h1> */}
        <div className="menu-grid">
          {dessret.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  {/* <p>{item.description}</p> */}
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">Best Sheesha In Town</h1>
        <p className="center-fastfood">Only 150 LE</p>
        <div className="menu-grid">
          {sheesha.map((item, index) => (
            <div className="menu-card">
              <img src={item.img} alt={item.name} className="menu-image" />
              <div className="menu-content-div" key={item.id}>
                <div className="menu-text">
                  <h4>{item.name}</h4>
                  {/* <p>{item.description}</p> */}
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="fastfood-div">
        <h1 className="menu-title">We'are Selling Fresh Bread Daily</h1>
        <p className="center-fastfood">
          30 LE 1 Packet small Bread, 50LE 1 Packet big bread
        </p>
        <div className="menu-grid">
          {bread.map((item, index) => (
            <img src={item.img} alt="bread" className="menu-image" />
            // </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default TablicRes;
