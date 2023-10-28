let text = document.querySelector('#text');
let content = document.querySelector('.content');
let v;

text.addEventListener('input', (e) => {
    v = e.target.value;
    
    if ( v.length >= 255 - 25 ) {
        content.classList.add('active')
    } else {
        content.classList.remove('active')
    }

    if ( v.length >= 255 ) {
        e.target.value = e.target.value.substr(0,254)
    }
    content.querySelector('span').textContent = v.length
})