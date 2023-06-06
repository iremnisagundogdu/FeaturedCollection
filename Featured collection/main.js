const productContainers = [...document.querySelectorAll('.product-container')];
const btnnext = [...document.querySelectorAll('.btn-next')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    btnnext[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})

