
const productFrame = document.querySelector('.ourProduct .product-frame');

      
    const products = async () =>{
        try{
            let productData =`http://localhost:3000/ourProduct`;
        
            const response = await fetch(productData);
            const products = await response.json();

                let elem ="";
                products.forEach((product) => {
                    let {image, title, body, initialPrice, discountedPrice, newProduct, percentage} = product;
                        
                        
                        elem +=` <div class="product-card">
                        <div class="product-image">
                            <img src="${image}" alt="${title}">
                            <div class="discount">${percentage}</div>
                           
    
                            <!-- OVERLAY HOVER EFFECT -->
                            <div class="product-pop-up">
                                <div class="overlay">
                                    <div class="button-container">
                                        <button type="submit">Add to cart
                                
                                        </button>
                                    </div>
                                    <div class="overlay-frame">
                                        <div class="overlay-icons"><a href="#">
                                            <svg class="gridicons-share" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                                                    fill="white" />
                                            </svg>
    
                                            <div class="share">Share</div>
                                            </a>
                                        </div>
                                        <div class="overlay-icons"><a href="">
                                                <div class="compare-svgrepo-com-1">
                                                    <svg class="group" width="14" height="14" viewBox="0 0 14 14"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                                                            fill="white" />
                                                    </svg>
    
                                                </div>
                                                <div class="compare">Compare</div>
                                            </a>
                                        </div>
                                        <div class="overlay-icons">
                                            <a href="#">
                                                <svg class="heart" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                                                        stroke="white" stroke-width="1.8" />
                                                </svg>
                                                <div class="like">Like</div>
                                            </a>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <!--  OVERLAY HOVER EFFECT STOP-->
                        <div class="product-meta"> 
                            <div class="product-name">
                                <h3>${title}</h3>
                                <h6>${body}</h6>
                            </div>
                            <div class="product-price">
                                <p>${discountedPrice}</p>
                                <span class="initial-price">${initialPrice}</span>
    
                            </div>  
                        
                        </div>
                    </div>
                  
                        
                        `

                productFrame.innerHTML = elem;

                }) 
                              
                }catch(error) {
                    console.log(error)
                }
                  
            
       

    }  
      window.addEventListener('DOMContentLoaded',async () => products())
      
    //   const popup = document.querySelector('.product-pop-up');
    //     let card = document.querySelector('.product-card');

    // card.addEventListener('mouseover',()=>{

    //     //  let hover = popup.parentElement;
    //     //     let hoverEffect = hover.querySelector('.product-pop-up');
    //     //     hoverEffect.style.display ="block";
            
    //   })
     