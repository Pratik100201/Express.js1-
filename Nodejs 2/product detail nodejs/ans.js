const http = require("http");
const { workerData } = require("worker_threads");
const  port = 3000;
const hostname = 'DESKTOP-S4NKAS1'
const datamen = [ {
    "id": "P001",
    "name": "Men's Classic T-Shirt",
    "brand": "XYZ Apparel",
    "price": 19.99,
    "color": "Black",
    "size": "L",
    "category": "Clothing",
    "description": "A comfortable and stylish black t-shirt for men.",
    "rating": 4.5,
    "image": "https://example.com/images/p001.jpg"
  }, {
    "id": "P002",
    "name": "Men's Slim Fit Jeans",
    "brand": "ABC Denim",
    "price": 49.99,
    "color": "Blue",
    "size": "32/34",
    "category": "Clothing",
    "description": "Slim fit jeans for men in a classic blue color.",
    "rating": 4.2,
    "image": "https://example.com/images/p002.jpg"
  }, {
    "id": "P003",
    "name": "Men's Leather Wallet",
    "brand": "DEF Accessories",
    "price": 29.99,
    "color": "Brown",
    "category": "Accessories",
    "description": "A high-quality leather wallet for men with multiple card slots and a cash compartment.",
    "rating": 4.8,
    "image": "https://example.com/images/p003.jpg"
  },{
    "id": "P004",
    "name": "Men's Sports Watch",
    "brand": "GHI Timepieces",
    "price": 89.99,
    "color": "Silver",
    "category": "Watches",
    "description": "A stylish and durable sports watch for men with a stainless steel strap.",
    "rating": 4.6,
    "image": "https://example.com/images/p004.jpg"
  },{
    "id": "P005",
    "name": "Men's Running Shoes",
    "brand": "JKL Footwear",
    "price": 79.99,
    "color": "Black/White",
    "size": "10",
    "category": "Shoes",
    "description": "Lightweight and comfortable running shoes for men.",
    "rating": 4.4,
    "image": "https://example.com/images/p005.jpg"
  }]

  const datawomen = [{
    "id": "P101",
    "name": "Women's Floral Maxi Dress",
    "brand": "ABC Fashion",
    "price": 59.99,
    "color": "Pink",
    "size": "M",
    "category": "Clothing",
    "description": "A beautiful floral maxi dress for women, perfect for summer occasions.",
    "rating": 4.5,
    "image": "https://example.com/images/p101.jpg"
  },{
    "id": "P102",
    "name": "Women's Skinny Jeans",
    "brand": "DEF Denim",
    "price": 49.99,
    "color": "Blue",
    "size": "28/32",
    "category": "Clothing",
    "description": "Comfortable and stylish skinny jeans for women in a classic blue color.",
    "rating": 4.2,
    "image": "https://example.com/images/p102.jpg"
  },{
    "id": "P103",
    "name": "Women's Leather Handbag",
    "brand": "GHI Accessories",
    "price": 89.99,
    "color": "Black",
    "category": "Bags",
    "description": "A high-quality leather handbag for women with multiple compartments and a detachable strap.",
    "rating": 4.8,
    "image": "https://example.com/images/p103.jpg"
  },{
    "id": "P104",
    "name": "Women's Fashion Watch",
    "brand": "JKL Timepieces",
    "price": 69.99,
    "color": "Rose Gold",
    "category": "Watches",
    "description": "A trendy and elegant fashion watch for women with a rose gold finish.",
    "rating": 4.6,
    "image": "https://example.com/images/p104.jpg"
  },{
    "id": "P105",
    "name": "Women's Running Shoes",
    "brand": "MNO Footwear",
    "price": 79.99,
    "color": "Gray/Pink",
    "size": "7",
    "category": "Shoes",
    "description": "Lightweight and comfortable running shoes for women with stylish gray and pink accents.",
    "rating": 4.4,
    "image": "https://example.com/images/p105.jpg"
  }]
const Server = http.createServer((req,res)=>{
    if(req.url =="/"){
    res.statusCode = 200 ;
    res.setHeader = ("Content-type","text/plain")
    res.end("Welcome to Men & Women Dummy Data")
    }
    if(req.url =="/men"){
        res.statusCode = 200 ;
        res.setHeader = ("Content-type","text/plain")
        res.end(JSON.stringify(datamen))
    }
    if(req.url == "/women"){
        res.statusCode = 200 ;
        res.setHeader = ("Content-type","text/plain")
        res.end(JSON.stringify(datawomen))
    }
    else if(req.url == "/other"){
        res.statusCode = 500;
        res.setHeader = ("Content-type","text/plain")
        res.end("Page Not Found")
    }
})
Server.listen(port,()=>{
    console.log(`Server is rinning on ${hostname} : ${port}`)
})