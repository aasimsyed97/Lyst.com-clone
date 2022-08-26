let menProducts = [
    {
      id: 1,
          type:"pants",
          brand:"Canada Goose",
          image: "https://cdna.lystit.com/200/250/tr/photos/saksoff5th/ea7c27d4/boss-by-hugo-boss-Navy-Maine3-Jeans.jpeg",
          name: "BOSS by HUGO BOSS",
      price: 608.02 ,
      strickedoff: "$1,075",
      categories: "Cloths",
    },
    {
      id: 2,
          type:"Dress",
          brand:"Nasty Gal",
          image: "https://cdna.lystit.com/520/650/n/photos/mytheresa/f7378fb1/nanushka-multicoloured-Martin-Wool-And-Silk-Overshirt.jpeg",
          name: "Men's Brown Martin Wool And Silk Overshirt",
      price: 59,
      strickedoff: "$104.00",
      categories: "Cloths",
    },
    {
      id: 3,
          type:"shirt",
          brand:"Nasty Gal",
          image: "https://assets.ajio.com/medias/sys_master/root/20211225/2R7l/61c63867f997ddf8f1610590/-473Wx593H-463553545-brown-MODEL5.jpg",
          name: "Solid Slim Fit Shirt",
      price: 31 ,
      strickedoff: "$65.00",
      categories: "Cloths",
    },
    {
      id: 4,
          type:"T-shirt",
          brand:"Stone Island",
          image: "https://cdna.lystit.com/200/250/tr/photos/thehut/dbcff7e3/lacoste-White-Pima-T-shirt.jpeg",
          name: "Men's White Regular Fit Logo Crew Neck",
      price: 288,
      strickedoff: "$480.00",
      categories: "Cloths",
    },
    {
      id: 4,
          type:"shirt",
          brand:"Nasty Gal",
          image: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/fac0d292/nanushka-Beige-Gestreiftes-Hemd-Venci.jpeg",
          name: "Men's Venci Striped Shirt", 
      price: 51 ,
      strickedoff: "$73.00",
      categories: "Cloths",
    },
    {
      id: 5,
          type:"T-shirt",
          brandF:"Canada Goose",
          image: "https://cdna.lystit.com/520/650/n/photos/eraldo/bb54fd04/palm-angels-Black-Bear-print-T-shirt.jpeg",
          name: "Men's Black Bear Graphic T-shirt",
      price: 650.06 ,
      strickedoff: "$945.00",
      categories: "Cloths",
    },
    {
      id: 6,
          type:"Coat",
          brand:"Canada Goose",
          image: "https://cdna.lystit.com/200/250/tr/photos/vitkac/3f49466f/nanushka-cream-jasper-Straight-Jeans.jpeg",
          name: "Men's Natural Gannon Straight-fit Jeans-1",
      price: 608,
      strickedoff: "$970.00",
      categories: "Cloths",
    },
    {
      id: 7,
          type:"pants",
          brand:"Sachin & Babi",
          image: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/e5156b00/nanushka-neutrals-Jean-Gannon.jpeg",
          name: "Men's Natural Gannon Straight-fit Jeans",
      price: 795,
      strickedoff: "$0.00",
      categories: "Cloths",
    },
    {
      id: 8,
          type:"sweater",
          brand:"Jacquemus",
          image: "https://cdna.lystit.com/200/250/tr/photos/giglio/3f1b568d/lacoste-Green-Sweater.jpeg",
          name: "Men's Green Suit Vest",
      price: 480,
      strickedoff: "$0.00",
      categories: "Cloths",
    },
    {
      id: 9,
          type:"sweater",
          brand:"Gucci",
          image: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/a69183fe/nanushka-blue-Striped-Polo-Sweater.jpeg",
          name: "Men's Blue Striped Polo Sweater",
      price: 430,
      strickedoff: "$0.00",
      categories: "Cloths",
    },
    {
      id: 10,
          type:"sweater",
          brand:"Michael Kors",
          image: "https://cdna.lystit.com/200/250/tr/photos/cettire/0911678e/palm-angels-Multi-Logo-Patch-Striped-Jumper.jpeg",
          name: "Men's Striped Crew-neck Sweater",
      price: 459,
      strickedoff: "$0.00",
      categories: "Cloths",
    },
    {
      id: 11,
          type:"sweater",
          brand:"Gucci",
          image: "https://cdna.lystit.com/520/650/n/photos/scottsmenswear/00e98feb/nike-grey-Sportswear-Club-Sweatshirt.jpeg",
          name: "Men's Gray Club Crew Sweat",
      price: 470,
      strickedoff: "$29.00",
      categories: "Cloths",
    },
    {
      id: 12,
          type:"Boot",
          brand:"Michael Kors",
          image: "https://cdna.lystit.com/200/250/tr/photos/cettire/0075fdbb/off-white-co-virgil-abloh-Black-Pascal-Tool-Knit-Sweater.jpeg",
          name: "Men's Black Pascal Tool Knit Sweater",
      price: 540,
      strickedoff: "$29.00",
      categories: "Shoes",
    },
    {
      id: 13,
          type:"Boot",
          brand:"Gucci",
          image: "https://cdna.lystit.com/200/250/tr/photos/mytheresa/6dd74f33/alexander-mcqueen-black-Sneakers-oversize.jpeg",
          name: "men's Black GG Supreme And Leather Ankle Boots",
      price: 734,
      strickedoff: "$29.00",
      categories: "Shoes",
    },
    {
      id: 14,
          type:"shoes",
          brand:"Men's White Suede & Leather-trim Sneaker",
          image: "https://cdna.lystit.com/520/650/n/photos/ruelala/b765830c/versace-White-Suede-Leather-trim-Sneaker.jpeg",
          name: "Women's Black Sandals Mallory",
      price: 106,
      strickedoff: "$139.00",
      categories: "Shoes",
    },
    {
      id: 15,
          type:"Flat",
          brand:"Gucci",
          image: "https://asset2.ruecdn.com/images/product/131215/1312157031_RLLDTH_1.jpg",
          name: " Black GG Rubber Slides",
      price: 348,
      strickedoff: "$29.00",
      categories: "Shoes",
    },
    {
      id: 16,
          type:"Flat",
          brand:"Michael Kors",
          image: "https://images.lvrcdn.com/mediumRetina75I/260/004_ac249b3e-5929-45c1-8c33-6cec0592d902.JPG",
          name: "Trigreca Logo Mesh & Leather Sneakers - Green",
      price: 249,
      strickedoff: "$794.00",
      categories: "Shoes",
    },

  ];
  
  let menProductData=()=>{
    return menProducts;
  }

  function displayData(displayArea,data) {
    data.map( (el) =>{
      let div = document.createElement("div");
      div.setAttribute("class", "proImgInfo");
      div.style.border="1px solid lightgray"
      let img_div = document.createElement("div");
      img_div.setAttribute("class", "photoboss");
      let image = document.createElement("img");
      image.setAttribute("class", "photo");
      image.style.width="100%";
      image.style.height="100%"
      image.src = el.image;
      img_div.append(image);
      img_div.style.height="60%";
  
      let details=document.createElement("div");
      details.style.padding="5%";
      let brandnames = document.createElement("p");
      brandnames.style.fontSize="20px";
      brandnames.style.fontWeight="bold";
      brandnames.innerText = el.brand;
      let names = document.createElement("p");
      names.innerText = el.name;
  
      let strikedPrice = document.createElement("p");
      strikedPrice.innerText=el.strickedoff;
      strikedPrice.style.textDecoration="line-through"
      strikedPrice.style.marginLeft="20%";
      let price = document.createElement("p");
      price.innerText = "$"+el.price;
      price.style.color="green";
     
      let priceDiv=document.createElement("div");
      priceDiv.setAttribute("id","pricediv");
      priceDiv.style.display="flex";
      priceDiv.append(price,strikedPrice)
      // let percentOff=document.createElement("p");
  
      details.append(brandnames,names, priceDiv);
      div.append(img_div,details);
      div.addEventListener("click", productDetail);
      function productDetail(){
        localStorage.setItem("productDetails",JSON.stringify(el));
        window.location.href="productDetails.html";
      }
      displayArea.append(div);
    });
  }
  
  export {menProductData,displayData};