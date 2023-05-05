/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

//**********************************************************************************************************************/
//    Vijay M : JavaScript Code - Begins
//**********************************************************************************************************************/

    // Data structure containing all product data displayed on the webpage
    const PRODUCTS = {
        product_1: {
            id: "product_1",
            name: "Sweets, snacks and savories",
            description: "Hand-carved traditional Maori style bone Koru pendant",
            price: 50,
            stars: 1,
            image: "assets/img/portfolio/1.png"
        }, product_2: {
            id: "product_2",
            name: "Model War Canoe",
            description: "Maori model war canoe of carved wood, with a raised stern and a prow in the shape of a human head",
            price: 200,
            stars: 5,
            image: "assets/img/portfolio/2.png"
        }, product_3: {
            id: "product_3",
            name: "Maori Warrior Figure",
            description: "Vintage prominent Maori Tekoteko warrior figure",
            price: 30,
            stars: 4,
            image: "assets/img/portfolio/3.png"
        }, product_4: {
            id: "product_4",
            name: "Handicraft Brass Flower Vase",
            description: "This fine Maori work is a handcrafted piece of brassware considered highly attractive and artistic",
            price: 150,
            stars: 2,
            image: "assets/img/portfolio/4.png"
        }, product_5: {
            id: "product_5",
            name: "Natural Paua Shell Beads",
            description: "Approximately 15 to 17 Abalone 15x25 mm beads on a 15-inch strand",
            price: 50,
            stars: 3,
            image: "assets/img/portfolio/5.png"
        }, product_6: {
            id: "product_6",
            name: "Religion",
            description: "Approximately 15 to 17 Abalone 15x25 mm beads on a 15-inch strand",
            price: 50,
            stars: 3,
            image: "assets/img/portfolio/6.png"
        }
    };
    
    /**
       Generates the HTML for displaying one product given its id in the
       PRODUCTS object. This function follows a clone-find-update approach:
       1. CLONE an HTML element to use as a template
       2. FIND the elements using selectors
       3. UPDATE the elements to customize their content
    
       @param    {number} productId An identifier in the PRODUCTS object to display
    
       @returns  {string} A string with the HTML of the product.
    */
    function getProductHTML(productId) {
        console.log("3. inside getProductHTML fn.")
        // Obtain product data from the PRODUCTS object
        const product = PRODUCTS[productId];
    
        // CLONE an HTML element to use as a template
        const productHTML = $("#product-template").clone();
    
        // Delete id to avoid duplicates
        productHTML.prop('id', '');
    
        // FIND and UPDATE the product's name
        productHTML.find(".product-name").text(product.name);
        productHTML.find(".product-price").text(product.price.toFixed(2));
    
        // FIND and UPDATE the product's image properties
        productHTML.find("img").
            prop("src", product.image).
            prop("alt", product.name);
    
        // Customize the product's reviews    
        const starHTML = productHTML.find(".product-reviews").find("div");
        for (let starsCounter = 2; starsCounter <= product.stars; starsCounter++) {
            const newStartHTML = starHTML.clone();
            productHTML.find(".product-reviews").append(newStartHTML);
        }
    
        // Remove .d-none to make the product visible
        productHTML.removeClass("d-none");
    
        return productHTML;
    }
    
    /**
        Show all products in the application's homepage
    
        @returns  No value.
    */
    function showProducts(products) {
        console.log("2. Inside Show Products")
        // Traverse the products object
        for (let product of products) {
            //const product = PRODUCTS[productId];
    
            // Generate each product's HTML
            const productHTML = getProductHTML(product.id);
            $('#products').append(productHTML);
        }
        console.log("4. after appending productHTML into Products")
    }
    
    function search() {
        // 1. Create a new search result object (will be empty in the beginning)
            const results = [];
    
        // 2. Capture User's query
            const query = $('#searchQuery').val().toLowerCase().trim();
            console.log (query);
        
        // 3. Search over the PRODUCTS object for a given user's query
              // Match user's query against product's name and description
              // Update results object with matching products.
    
            for (const productId in PRODUCTS) {
                const product = PRODUCTS[productId];
    
                if (product.name.toLowerCase().includes(query)) {
                    results.push(product);
                }
            }
        
    
        // 4. Show products matching the user's query.
            console.log(results);
            $('#products').empty();
            showProducts(results);
    
    }
    
    // 5. Register the search function so it is executed when the user keys in a query. (from the Javascript itself instead of from HTML)
$("#searchQuery").on('keyup',search);
console.log("1. after adding event to searchQuery")
    
showProducts(Object.values(PRODUCTS));
    
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

//**********************************************************************************************************************/
//    Vijay M : JavaScript Code - Ends
//**********************************************************************************************************************/


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//IIFE
