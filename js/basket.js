

function ShowAlert(){
    let basket = JSON.parse(localStorage.getItem('basket'))


    
    if(basket.length === 0){
        document.querySelector('#alert').classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }
    else{
        document.querySelector('#alert').classList.add('d-none')
        document.querySelector('table').classList.remove ('d-none')


        let list = ''

        basket.forEach(item => {
            
            list += `
            <tr> 
                <td> ${item.id}</td>
                <td><img src="${item.image}" alt=""></td>
                <td>${item.name}</td>
                <td>
                    <input id="count" min='1' type="number" value=${item.count}>
                </td>
                <td id="price">${item.price}</td>
                <td
                    <button id="del" class="btn btn-danger">
                       <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr> 
            `
            
        });

        document.querySelector('tbody').innerHTML=list
        ShowTotalPrice()
        TotalAmount()
    }
}
ShowAlert()


function ShowTotalPrice(){
    let total = document.querySelector('#count').value
    let price = document.querySelector('#price').value
    document.querySelector("#result").innerHTML = total * price;

}
ShowTotalPrice()

function TotalAmount(){
    let total = document.querySelector('#count').value
    document.querySelector("#total").innerHTML = total 
    total++
}
TotalAmount()


let delt = document.querySelector('#del')

for(let delet of delt){
    delet.addEventListener('click', function(e){
        e.preventDefault()
        let basket = JSON.parse(localStorage.getItem('basket'))
        let all_del = e.target.e.target.parentElement.parentElement.parentElement.id
        basket.push()= []
        all_del.push()= []
        console.log(delet);
    })
}