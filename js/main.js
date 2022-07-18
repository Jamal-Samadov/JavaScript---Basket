if(localStorage.getItem('basket') === null){
    localStorage.setItem('basket',JSON.stringify([]))
}

let add = document.querySelectorAll('.btn')


for(let btn of add){
    btn.addEventListener('click', function(e){
        e.preventDefault()
        let basket = JSON.parse(localStorage.getItem('basket'))
        let prod_id = e.target.parentElement.parentElement.parentElement.id
        let prod_img = e.target.parentElement.previousElementSibling.src
        let prod_name = e.target.previousElementSibling.previousElementSibling.innerHTML
        let prod_price = e.target.previousElementSibling.innerHTML

        let exist_Prod = basket.find(item => item.id === prod_id)


        if(exist_Prod === undefined){
            basket.push({
                id:prod_id,
                image:prod_img,
                name:prod_name,
                price:prod_price,
                count: 1,
                date:new Date()
            })  
        }
        else{
            exist_Prod.count += 1
        }
        localStorage.setItem('basket', JSON.stringify(basket))
        ShowCount() 

    })
} 


function ShowCount(){
    let basket = JSON.parse(localStorage.getItem('basket'))
    let count = basket.length

    document.querySelector('#count').innerHTML = count
}

ShowCount()

