const Iphone = document.querySelector('.Iphone')
const samsung = document.querySelector('.samsung')

Iphone.addEventListener('click', function(event) {
    let clickTarget = event.target
    let activeButton = Iphone.querySelector('.active')
    let priceItem = Iphone.querySelector('.price')
    let currentPrice
    let activeButtonColor = Iphone.querySelector('.active-border')

    if (clickTarget.classList.contains('color-btn') && !clickTarget.classList.contains('active-border')){
        clickTarget.classList.add('active-border')
        activeButtonColor.classList.remove('active-border')
    }

    if (clickTarget.classList.contains('btn') && !clickTarget.classList.contains('active')){
        clickTarget.classList.add('active')
        activeButton.classList.remove('active')
    }

    currentPrice = clickTarget.getAttribute('data-size')
    if (currentPrice === 'medium') {
        priceItem.textContent = 'цена 80.000 руб.'
    }

    if (currentPrice === 'large') {
        priceItem.textContent = 'цена 180.000 руб.'
    }
 })
