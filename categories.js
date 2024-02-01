document.addEventListener('click' , ()=> {
    const More = document.getElementById('more')
    let currPage = 1

    async function moreProducts(page){
        const res = await fetch('https://fakestoreapi.com/products/category/jewelery?&page=${page}')
        const products = await res.json()
        return products

    }

    function displayProducts(products) {
        const container = document.getElementById('category')
        products.forEach (product => {
            const productDiv = createElement('div')
            productDiv.className = 'product-card'
            productDiv.innerHTML = `
            <img src=${product.image} alt=${product.title}>
            <h3 id="prd-title">${product.title}</h3>
            <p id="prd-price">$ ${product.price}</p>
            <p id="prd-category">${product.category}</p>
            <p id="prd-description">${product.description}</p>
            <p id="prd-rating">${product.rating.rate} (${product.rating.count} reviews)</p>
            `
            container.appendChild(productDiv)
        })
    }

    More.addEventListener('click', async() => {
        const products = await getProducts(currPage)
        displayProducts(products)
        currPage++
    })
    
    More();
    
})