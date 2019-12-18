const API_CATE = 'http://5dcb5e3b34d54a0014314e36.mockapi.io/api/js/cate';
const API = 'http://5dcb5e3b34d54a0014314e36.mockapi.io/api/js/aaaaa';

function getProducts(API) {
  axios.get(API)
    .then(function (response) {
      console.log(response);
      const products = response.data;
      let html = "";
      products.map(product => {
        html += `
        <section class="wrap">
          <section class="each_pro">
            <section class="img">
                <img style="cursor:pointer" onclick="setID(${product.id})" src="${product.Image}" alt="">
            </section>
            <section class="content">
              <a>${product.name}</a>
              <p>Price: $${product.Price}</p>
              <button style="cursor:pointer" onclick="setID(${product.id})">CHI TIẾT</button>
            </section>
          </section>
        </section>`;
      });
      $('.show_pro').append(html);
    }) 
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
getProducts(API);

function setID(id) {
  localStorage.setItem('id', id);
  window.location.href = "detail.html";
}

// $(window).load(function() {
//   $('.flexslider').flexslider({
//     animation: "slide"
//   });
// });
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
}

