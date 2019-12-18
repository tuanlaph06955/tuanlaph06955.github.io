function getPro(){
    let newArray = JSON.parse(localStorage.getItem('proCart'));
    // console.log(newArray);
    let showList = document.querySelector('tbody');

    let tt = 0;
    let html="";
    newArray.map(pro => {
        html += `
        <tr>
            <td id="namePro">${pro.name}</td>
            <td id="imgPro"><img id="anh" src="${pro.Image}"> </td>
            <td id="pricePro">$${pro.Price}</td>
            <td id="qtyPro">${pro.qtyPro}</td>
            <td id="totalPro">$${pro.Price * pro.qtyPro}</td>
            <td><button id="delete" onclick="remove(${pro.id})">Xóa</button></td>
            </tr>
        `;
        tt += pro.Price * pro.qtyPro;
    });

    showList.innerHTML=html;
    document.querySelector("#tt").innerHTML=`$${tt}`;
    

    // console.log(tt);
}
getPro();   

// console.log(JSON.parse(localStorage.getItem('proCart')));

function remove(id){
  let cart = JSON.parse(localStorage.getItem('proCart'));
  let newC = cart.filter(x => x.id != id);
  localStorage.setItem("proCart", JSON.stringify(newC));
  location.reload();
}