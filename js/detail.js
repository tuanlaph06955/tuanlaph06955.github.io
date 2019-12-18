const API = 'http://5dcb5e3b34d54a0014314e36.mockapi.io/api/js/aaaaa';
  
let id = localStorage.getItem('id');
  function getID() {
    window.localStorage;
    axios.get(`${API}/${id}`)
      .then(function (response) {
        const pro = response.data;
        // console.log(response);
        let id = `${pro.id}`;
        document.querySelector("#id").innerHTML = `${id}`;
        // console.log(id);

        let name = `${pro.name}`;
        document.querySelector(".mid h2").innerHTML= `${name}`;
  
        let price = `${pro.Price}`;
        document.querySelector(".mid p1").innerHTML= `${price}`;
  
        let detail = `${pro.Detail}`;
        document.querySelector(".mid h4").innerHTML= `${detail}`;
  
        $(".left").append(`<img id="anh" width="350" src="${pro.Image}">`);
      });
  }
  getID();

    var manganh=[];
    manganh[0]="img/banner1.jpg"
    manganh[1]="img/banner2.jpg"
    manganh[2]="img/banner3.jpg"
    var i=0;
    function next(){
        i++;
        document.getElementById("anh").src=manganh[i];
        if(i==manganh.length-1){
            i=-1;
        }
        setTimeout(next,2000);
    }
    window.onload=function(){
        next();
    };

$(window).load(function() {
// The slider being synced must be initialized first
$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
});

$('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
});
});

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

function addPro(){

    let idPro = document.querySelector('#id').innerHTML;
    let namePro = document.querySelector(".mid h2").innerHTML;
    let imgPro = document.querySelector(".left img").src;
    // console.log(imgPro);
    let pricePro = document.querySelector(".mid p1").innerHTML;
    let qtyPro = $("#number").val();
    // console.log(qtyPro);

    axios.get(`${API}/${id}`)
    .then(function(response){
        const product = response.data;
        // console.log(product);
        if (localStorage.getItem('proCart')) {
            const proCart = JSON.parse(localStorage.getItem('proCart'));
            // console.log(proCart);
            check = false;
            proCart.map(x=>{
                if(product.id == x.id){
                    x.qtyPro += parseInt(qtyPro);
                    localStorage.setItem("proCart", JSON.stringify(proCart));
                    check = true;
                }
            });
            
            if (check == false) {
                product.qtyPro = parseInt(qtyPro);
                proCart.push(product);
                localStorage.setItem("proCart", JSON.stringify(proCart));
            }
        }else{
            product.qtyPro = parseInt(qtyPro);
            localStorage.setItem("proCart", JSON.stringify([product]));
        }
    
    alert("Đã thêm sản phẩm vào giỏ hàng");
    
    });
    
}
addPro();
