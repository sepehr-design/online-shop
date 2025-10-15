pageCount = +localStorage.getItem("count");
let elLen =[];
let stLen =[];
let clLen =[];
let j=0;
let k = 0;
let l = 0;
////////////////////////////////
for (let i=0; i<products.length; i++) {

    if (products[i].type==="الکترونیک") {
        elLen[j] = products[i];
        j++;
    }else if(products[i].type==="سوپر مارکت"){
        stLen[k] = products[i];
        k++;
    }else if(products[i].type==="پوشاک"){
        clLen[l] = products[i];
        l++;
    }
}

//////////////////////////////////////PRODUCT JEN//////////////////////////////////

function pJen(i,type){
    let output = "<div class=\"product\">";
    output += "<div class=\"productImage\" onclick='productPage(id)'></div>";
    output += "<div class=\"productInfo\" onclick='productPage(id)'>";
    output += type[i].name;
    output += "</div>";
    output += "<div class=\"productType\">";
    output += type[i].type;
    output += "</div>";
    output += "<div class=\"productPrice\">"
    output += type[i].price + " تومان";
    output += "</div>";
    output += "<div class=\"productFunc\">"
    output += `<button class="downBtn productFuncBtn" onclick="favorite(id)" aria-label="favoriteBtn">`
    output +=  "<i class=\"fa-regular fa-heart\"></i></button>"
    output +=  `<button class="downBtn productFuncBtn" onclick="buy(id)" aria-label="shoppingCart">`
    output +=  "<i class=\"fas fa-basket-shopping\"></i></button>" +"</div>"

    output += "</div>"
    return output;
}
function imgMaker(i,idMaker3,type){
    const primaryImageUrl = type[i].image;
    const fallbackImageUrl = 'https://sepehr-design.github.io/main-page/img/image-not-found-scaled.png';
    const img = new Image();
    img.src = primaryImageUrl;

    img.onload = () => {
        // Primary image loaded successfully
        document.getElementById(idMaker3).style.backgroundImage = `url('${primaryImageUrl}')`;
    };

    img.onerror = () => {
        // Primary image failed to load, use fallback
        document.getElementById(idMaker3).style.backgroundImage = `url('${fallbackImageUrl}')`;
    };
}
function pJenPro(i,type) {
    let idMaker1 = "f"+type[i].id
    let idMaker2 = "c"+type[i].id
    let idMaker3 = "i"+type[i].id
    let idMaker4 = "t"+type[i].id
    document.getElementById("products").innerHTML+=pJen(i,type)
    document.getElementById("products").children[i].children[0].id=idMaker3;
    document.getElementById("products").children[i].children[1].id=idMaker4;
    document.getElementById("products").children[i].children[4].children[0].id=idMaker1;
    document.getElementById("products").children[i].children[4].children[1].id=idMaker2;
    imgMaker(i,idMaker3,type);
}
/////////////////////////////////////////PAGE-CHECK///////////////////////////////////////////////
if (pageCount === 0) {
    pageCheck=1;
}else if (pageCount === 1) {
    document.getElementById("productName").innerHTML=elLen[0].type;
    for (let i = 0; i < elLen.length; i++) {
        pJenPro(i,elLen);
    }
    pageCheck=0;
}else if (pageCount === 2){
    document.getElementById("productName").innerHTML=stLen[0].type;
    for (let i = 0; i < stLen.length; i++) {
        pJenPro(i,stLen);
    }
    pageCheck=0;
}else if (pageCount === 3){
    document.getElementById("productName").innerHTML=clLen[0].type;
    for (let i = 0; i < clLen.length; i++) {
        pJenPro(i,clLen);
    }
    pageCheck=0;
}