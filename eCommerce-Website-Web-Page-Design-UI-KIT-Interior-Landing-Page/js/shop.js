
const shopPage = document.querySelector('.shopFrame');

      
    const products = async () =>{
        try{
            let productData =`http://localhost:3000/shop`;
        
            const response = await fetch(productData);
            const products = await response.json();

                let elem ="";
                 products.forEach((product) => {
                    let {id,image, title, body, price, discountedPrice, newProduct, percentage} = product;
                        
                        
                elem +=` 
                       

                        <div class="product_card">
                            <div class="product_image">
                                <img src="${image}" alt="${title}">
                                <div class="discount">${percentage}</div>
                                <!--<div class="new">${newProduct}</div>-->

                            </div>
                            <div class="product_meta">
                                <h3>${title}</h3>
                                <h6>${body}</h6>
                                <h6 class="price">${discountedPrice} <small>${price}</small> </h6>
                                
                            </div>
                                            
    
                        </div>  
                         
                       
                                                     
                    `
                          
                    
                shopPage.innerHTML = elem;
                

                }) 
                              
                }catch(error) {
                    console.log(error)
                }
                  
            
       

    }  
      window.addEventListener('DOMContentLoaded',async () => products())