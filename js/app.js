pageCheck =0;

const elect = document.getElementById("elect");
const superM= document.getElementById("superM");
const clot=document.getElementById("clot");

//////////////////////////////////////PRODUCT JEN//////////////////////////////////
function pJenSel(){
    let j = 0;
    let k = 0;
    let l = 0;
    for (let i=0;i<products.length;i++){
        let idMaker1 = "f"+products[i].id
        let idMaker2 = "c"+products[i].id
        let idMaker3 = "i"+products[i].id
        let idMaker4 = "t"+products[i].id
        if (elect.children.length<6&&products[i].type==="الکترونیک"){
            document.getElementById("elect").innerHTML+=pJen(i)
            document.getElementById("elect").children[j].children[0].id=idMaker3;
            document.getElementById("elect").children[j].children[1].id=idMaker4;
            document.getElementById("elect").children[j].children[4].children[0].id=idMaker1;
            document.getElementById("elect").children[j].children[4].children[1].id=idMaker2;
            imgMaker(i,idMaker3);
            j++;
        }
        else if (superM.children.length<6&&products[i].type==="سوپر مارکت"){
            document.getElementById("superM").innerHTML+=pJen(i)
            document.getElementById("superM").children[k].children[0].id=idMaker3;
            document.getElementById("superM").children[k].children[1].id=idMaker4;
            document.getElementById("superM").children[k].children[4].children[0].id=idMaker1;
            document.getElementById("superM").children[k].children[4].children[1].id=idMaker2;
            imgMaker(i,idMaker3);
            k++;
        }
        else if (clot.children.length<6&&products[i].type==="پوشاک"){
            document.getElementById("clot").innerHTML+=pJen(i)
            document.getElementById("clot").children[l].children[0].id=idMaker3;
            document.getElementById("clot").children[l].children[1].id=idMaker4;
            document.getElementById("clot").children[l].children[4].children[0].id=idMaker1;
            document.getElementById("clot").children[l].children[4].children[1].id=idMaker2;
            imgMaker(i,idMaker3);
            l++;
        }
    }
}
function pJen(i){
    let output = "<div class=\"product\">";
    output += "<div class=\"productImage\" onclick='productPage(id)'></div>";
    output += "<div class=\"productInfo\" onclick='productPage(id)'>";
    output += products[i].name;
    output += "</div>";
    output += "<div class=\"productType\">";
    output += products[i].type;
    output += "</div>";
    output += "<div class=\"productPrice\">"
    output += products[i].price + " تومان";
    output += "</div>";
    output += "<div class=\"productFunc\">"
    output += `<button class="downBtn productFuncBtn" onclick="favorite(id)">`
    output +=  "<i class=\"fa-regular fa-heart\"></i></button>"
    output +=  `<button class="downBtn productFuncBtn" onclick="buy(id)">`
    output +=  "<i class=\"fas fa-basket-shopping\"></i></button>" +"</div>"

    output += "</div>"
    return output;
}
function imgMaker(i,idMaker3){
    const primaryImageUrl = products[i].image;
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
/////////////////////////////////////
pJenSel();







