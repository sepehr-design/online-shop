
let favId = JSON.parse(localStorage.getItem('fav')) || [];
let buyId = JSON.parse(localStorage.getItem('buy')) || [];
let quantityId = JSON.parse(localStorage.getItem('buyQ')) || [];
/////////////////////////////////////MENU////////////////////////////////////////
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("bluerBack").classList.toggle("active");
    document.getElementById("sidebar").classList.replace("close","open");
})
document.getElementById("bluerBack").addEventListener("click", function() {
    document.getElementById("bluerBack").classList.remove("active");
    document.getElementById("sidebar").classList.replace("open","close");
})
document.getElementById("pick1").addEventListener("click", function() {
    document.getElementById("pick1").classList.add("sel1");
    document.getElementById("pick2").classList.remove("sel1");
    document.getElementById("menuItemList").classList.add("sel2");
    document.getElementById("categoriesList").classList.remove("sel2");
})
document.getElementById("pick2").addEventListener("click", function() {
    document.getElementById("pick2").classList.add("sel1");
    document.getElementById("pick1").classList.remove("sel1");
    document.getElementById("categoriesList").classList.add("sel2");
    document.getElementById("menuItemList").classList.remove("sel2");
})
////////////////////////////////////////EVENT LISTENER////////////////////////////
document.getElementById("favBtn").addEventListener("click", function() {
    if(+document.getElementById("favAll").innerHTML>0){
        document.getElementById("favorites").style.display="flex"
    }
    document.getElementById("favClose").addEventListener("click", function() {
        document.getElementById("favorites").style.display="none"
    })
})
document.getElementById("basketBtn").addEventListener("click", function() {
    document.getElementById("buy").style.display="flex"
    document.getElementById("buyClose").addEventListener("click", function() {
        document.getElementById("buy").style.display="none"
    })
})
document.getElementById("dirClose").addEventListener("click", function() {
    document.getElementById("dirProduct").style.display="none"
})


document.getElementById("elect1").addEventListener("mouseover", function() {
    localStorage.setItem("count","1")
})
document.getElementById("super1").addEventListener("mouseover", function() {
    localStorage.setItem("count","2")
})
document.getElementById("clo1").addEventListener("mouseover", function() {
    localStorage.setItem("count","3")
})

////////////////////////////////////////LOADER/////////////////////////////////////////////
window.onload = ()=>{
    setTimeout(stop,1000)
}
function stop(){
    document.getElementById('loader').classList.remove('loader');
    document.getElementById('loader').style.display = 'none';
}
////////////////////////////////////////UPPER////////////////////////////////////////////
let myUpButton= document.getElementById('upBtn');
myUpButton.addEventListener('click',goUp);
window.onscroll = function (){scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myUpButton.style.display = "block";
    }else {
        myUpButton.style.display = "none";
    }
}

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
////////////////////////////////////////FAVORITE///////////////////////////////////
function favorite(id){
    let id1 = "f"+id.slice(1);
    let id2 = "F"+id.slice(1);
    let check = false;
    if(pageCheck===0) {
        let fav1 = document.getElementById(id1).children[0];
        if (id === id2) {
            check = true;
        }
        fav1.classList.toggle("fa-regular");
        fav1.classList.toggle("fas");
        fav1.classList.toggle("red");
        if (!fav1.classList.contains("red") || check === true) {
            favId = favId.filter(fav => fav !== id.slice(1));
            localStorage.setItem("fav", JSON.stringify(favId));
            fRemove(id2)
        } else {
            favId.push(id.slice(1));
            localStorage.setItem("fav", JSON.stringify(favId))
            fJen(id.slice(1))
        }
    }
    else if (pageCheck!==0 && id === id2) {
        favId = favId.filter(fav => fav !== id.slice(1));
        localStorage.setItem("fav", JSON.stringify(favId));
        fRemove(id2)
    }
}

function fJen(ie){
    let i = +ie-1
    let output = `<div class="favoritesVal">
                <button class="favoritesImg" style='background-image: url("${products[i].image}");' id="I${products[i].id}" onclick="productPage(id)"></button>
                <button class="favoritesInfo" id="T${products[i].id}">
                    <span class="favoritesTitle">${products[i].name}</span>
                    <span class="favoritesType">${products[i].type}</span>
                    <span class="favoritesDes">${products[i].description}</span>
                </button>
                <div class="favoritesPrice">${products[i].price} تومان</div>
                <button class="favoritesFunc downBtn" id="F${products[i].id}" onclick="favorite(id)"><i class="fas fa-heart red"></i></button>
            </div>`
    document.getElementById("favoritesContainer").innerHTML += output;
    if(pageCheck===0){
        let childR = document.getElementById("f"+(products[i].id)).children[0];
        childR.classList.add("red");
        childR.classList.add("fas");
        childR.classList.remove("fa-regular");
    }
    document.getElementById("favAll").innerHTML = (+document.getElementById("favoritesContainer").childElementCount)-1;
}

function fRemove(id){
    for (let j=1;j<document.getElementById("favoritesContainer").childElementCount; j++){
        if (document.getElementById("favoritesContainer").children[j].children[3].id === id){
            document.getElementById("favoritesContainer").children[j].remove();
        }
    }
    if (document.getElementById("favoritesContainer").childElementCount===1){
        document.getElementById("favorites").style.display="none"
    }
    document.getElementById("favAll").innerHTML = (+document.getElementById("favoritesContainer").childElementCount)-1;
}

for (let i = 0; i < favId.length; i++) {
    fJen(favId[i]);
}
////////////////////////////////////////BUY/////////////////////////////////////
function bJen(ie){
    let i = +ie-1
    let output = `<div class="buyInfo">
                <button class="buyProductImg" id="P${products[i].id}" style='background-image: url("${products[i].image}");' onclick="productPage(id)"></button>
                <button class="buyProductInfo" id="X${products[i].id}">
                    <span>${products[i].name}</span>
                    <span class="buyProductInfoType">${products[i].type}</span>
                    <span>
                        <span>${products[i].price} </span>
                        <span> تومان</span>
                    </span>
                </button>
                <div class="buyProductPrice">
                    <div class="buyProductPriceAmount">
                        <button id="p${products[i].id}" onclick="buyAdd(id)">+</button>
                        <span id="q${products[i].id}">1</span>
                        <button id="m${products[i].id}" onclick="buyMins(id)">-</button>
                    </div>
                    <button id="D${products[i].id}" onclick="bRemove(id)"><i class="fas fa-trash"></i></button>
                </div>
            </div>`
    document.getElementById("buyContainer").innerHTML += output;
}

function bRemove(id) {
    for (let j = 1; j < document.getElementById("buyContainer").childElementCount; j++) {
        if (document.getElementById("buyContainer").children[j].children[2].children[1].id === id) {
            document.getElementById("buyContainer").children[j].remove();
            buyId.splice(j-1, 1);
            localStorage.setItem("buy",JSON.stringify(buyId));
            quantityId.splice(j-1,1);
            localStorage.setItem("buyQ",JSON.stringify(quantityId));
            document.getElementById("buyAll").innerHTML = (+document.getElementById("buyContainer").childElementCount)-1;
            if (pageCheck !==1){
                document.getElementById("c"+id.slice(1)).disabled = false;
                document.getElementById("c"+id.slice(1)).style.color = "black";
            }
        }
    }
}

function buy(id){
    bJen(id.slice(1));
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.color = "#00000040";
    buyAll();
    buySave(id,0);
    document.getElementById("buyAll").innerHTML = (+document.getElementById("buyContainer").childElementCount)-1;
}

function buyAll(){
    let price = 0;
    let priceAll = 0;
    for (let j=1;j<document.getElementById("buyContainer").childElementCount;j++){
        price= +document.getElementById("buyContainer").children[j].children[1].children[2].children[0].innerHTML;
        priceAll += price * +document.getElementById("buyContainer").children[j].children[2].children[0].children[1].innerHTML;
    }
    document.getElementById("buyNum").innerHTML = priceAll;
}

function buyAdd(id){
    let genId = "q"+ id.slice(1);
    let mId = "m"+ id.slice(1);
    +document.getElementById(genId).innerHTML++;
    document.getElementById(mId).disabled = false;
    buyAll()
    buySave(id,1);
}

function buyMins(id){
    let genId = "q"+ id.slice(1);
    if (+document.getElementById(genId).innerHTML===1){
        document.getElementById(id).disabled = true;
    }else {
        document.getElementById(id).disabled = false;
        +document.getElementById(genId).innerHTML--;
        buyAll();
        buySave(id,1);
    }
}

function buySave(id,check){
    let genId = id.slice(1);

    let store = document.getElementById("q" + id.slice(1)).innerHTML;
    if (check===1){
        let selEl = document.getElementById(id).parentElement.parentElement.parentElement;
        let arrEl = Array.from(selEl.parentElement.children);
        let selID = arrEl.indexOf(selEl)-1;
        quantityId[selID]=store;
        localStorage.setItem('buyQ', JSON.stringify(quantityId));
    }
    else {
        buyId.push(genId);
        localStorage.setItem('buy', JSON.stringify(buyId));
        quantityId.push(store);
        localStorage.setItem('buyQ', JSON.stringify(quantityId));
    }
}

for (let i = 0; i < buyId.length; i++) {
    bJen(buyId[i]);
    if (pageCheck !==1){
        document.getElementById("c"+buyId[i]).disabled = true;
        document.getElementById("c"+buyId[i]).style.color = "#00000040";

    }
    document.getElementById("q"+buyId[i]).innerHTML = quantityId[i];
    document.getElementById("buyAll").innerHTML = (+document.getElementById("buyContainer").childElementCount)-1;
    buyAll();
}
///////////////////////////////////////DIR/////////////////////////////////////
function productPage(id){
    let genId = id.slice(1)-1;

    document.getElementById("dirProduct").style.display="flex";
    document.getElementById("idShow").innerHTML = id+"/main";
    document.getElementById("dirImg").style.backgroundImage = `url('${products[genId].image}')`;
    document.getElementById("dirItemTitle").innerHTML = products[genId].name;
    document.getElementById("dirItemType").innerHTML = products[genId].type;
    document.getElementById("dirItemText").innerHTML = products[genId].description;
    document.getElementById("dirItemPriceText").innerHTML = products[genId].price + " تومان";
    document.getElementById("dirItemPriceText").parentElement.children[1].id="w"+(genId+1)
    if(document.getElementById("c"+id.slice(1)).disabled){
        document.getElementById("w"+id.slice(1)).disabled = true;
        document.getElementById("w"+id.slice(1)).style.color = "#00000040";
    }else {
        document.getElementById("w"+id.slice(1)).disabled = false;
        document.getElementById("w"+id.slice(1)).style.color = "#fff";
    }
}
