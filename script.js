let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let input = document.querySelector('.count-section input')
let cartHolder = document.querySelector('.cart-holder')
let alue = 0
let imageThumb = document.querySelectorAll('.thumbnails img')
plus.onclick = ()=>{
    input.value++
    alue = input.value
}

minus.onclick = ()=>{
    input.value--
    alue = input.value
}

let submitBtn = document.querySelector('.cart-btn button')
let orderBtn = document.querySelector('.ordered-btn button')

let cartContainer = document.querySelector('.cart-container')
function appear(){
    if(cartContainer.style.display=='none'){
        cartContainer.style.display='block'
    }else{
        cartContainer.style.display='none'
    }
}
let cartIcon = document.querySelector('.cart')
cartIcon.onclick = appear

submitBtn.onclick = ()=>{
    let cunit = document.querySelector('.cunit')
    cunit.textContent = alue
    cunit.style.display='flex'
    let template = document.querySelector('.added-cart')
    let orderBtn = document.querySelector('.ordered-btn')
    if(alue>=1){
        let emptyCart = document.querySelector('.empty-cart')
        emptyCart.style.display='none'
        orderBtn.style.display='block'
        let newOrder = template.cloneNode(true)
        newOrder.style.display='flex'
        let price = newOrder.querySelector('.priced')
        price.textContent = '$125.00'
        let unit = newOrder.querySelector('.unit')
        unit.textContent = alue
        let amount = newOrder.querySelector('.amount')
        let amt = parseFloat(price.textContent.replace('$', ''))*alue
        amount.textContent = '$' + amt.toFixed(2)
        cartHolder.insertBefore(newOrder, orderBtn)
        let remove = newOrder.querySelector('.remove')
        function del(){
            alue -= unit.textContent
            if(alue == 0){
                cunit.style.display='none'
            }
            unit.textContent = alue
            let amt = parseFloat(price.textContent.replace('$', ''))*alue
            amount.textContent = '$' + amt.toFixed(2)
            cartHolder.removeChild(newOrder)
            orderBtn.style.display='none'
            input.value = alue
            emptyCart.style.display='block'
        }

        remove.onclick = del
        orderBtn.onclick = ()=>{
            alert('order recieved');
            del()
        }

    }else{
        orderBtn.style.display='none'
    }
}

let arr =['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg']

let disImage = document.querySelector('.display-image img')
let next = document.querySelector('.post')
let pre = document.querySelector('.pre')
let count = 0
for(let i=0; i<imageThumb.length; i++){
    imageThumb[0].classList.add('add')
    imageThumb[i].addEventListener('click', ()=>{
        if(imageThumb[i]){
            disImage.src = arr[i]
        }
        imageThumb.forEach(e=>{
            e.classList.remove('add')
        })
        imageThumb[i].classList.add('add')
    })
    next.onclick = (e)=>{
        count = (count + 1) % arr.length
        disImage.src = arr[count]
    }
    pre.onclick = (e)=>{
        count = (count - 1) % arr.length
        if (count < 0){
            disImage.src = arr[0]
        }else{
            disImage.src = arr[count]
        }
    }
}

let menu = document.querySelector('.logo img')
let close = document.querySelector('.nav-links img')
let link = document.querySelector('.nav-links')

close.onclick = ()=>{
    link.style.display='none'
}

menu.onclick = ()=>{
    link.style.display='flex'
}

window.addEventListener('resize', ()=>{
    if (window.innerWidth>550){
        link.style.display='flex'
    }else{
        link.style.display='none'
    }
})




