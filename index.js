function createComponent(searchProduct){
    const promise = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchProduct}`)
    
    promise.then((res)=>{
        return res.json()
    }).then((product)=>{
        console.log(product);
        const results = document.querySelector("section");
        for (const item of product.results ) {
        
        const productEl = document.createElement("article");
        productEl.classList.add('product');
        results.appendChild(productEl);
        const productContainerImageEl = document.createElement("div");
        productContainerImageEl.classList.add('procuct_image');
        productEl.appendChild(productContainerImageEl);
        const imageEl = document.createElement("img");
        imageEl.src = item.thumbnail;
        productContainerImageEl.appendChild(imageEl);

        const productContainerDescriptEl = document.createElement("div");
        productContainerDescriptEl.classList.add('product_description');
        const descriptionTitle = document.createElement("h3");
        const titleLink =  document.createElement('a');
        titleLink.href = item.permalink;
        titleLink.target = '_blank';
        titleLink.textContent = item.title;
        descriptionTitle.appendChild(titleLink);

        const descriptionDetails = document.createElement("h5");
        descriptionDetails.textContent = 'Vendidos 12345';
        productEl.appendChild(productContainerDescriptEl);
        productContainerDescriptEl.appendChild(descriptionTitle);
        productContainerDescriptEl.appendChild(descriptionDetails);

        const productContainerPriceEl = document.createElement("div");
        const priceTitleEl = document.createElement('h2'); 
        priceTitleEl.textContent = '$ ' + item.price.toString();
        productContainerPriceEl.classList.add('price');
        productEl.appendChild(productContainerPriceEl);
        productContainerPriceEl.appendChild(priceTitleEl);
    
        }
    })
}    
function listenSeach(){
    document.addEventListener('submit',(e)=>{
    e.preventDefault();
    const product = e.target['search_product'].value;
    const contentResults = document.querySelector('.result_search');
    contentResults.innerHTML = "";
    createComponent(product);    
    })
}
function main(){
listenSeach()

}
main();