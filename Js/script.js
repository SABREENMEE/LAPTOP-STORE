
'use strict';

        const navbar = document.querySelector("[data-navbar]");
        const navToggler = document.querySelector("[data-nav-toggler]");
        const header = document.querySelector("[data-header]");
        const productsButton = document.querySelector("[data-products-button]");

        navToggler.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });

        window.addEventListener("scroll", function () {
            header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
        });

        // Function to show all products when the "Products" button is clicked
        function showAllProducts() {
            // Add your code here to show all products, e.g., displaying hidden product elements
        }

        productsButton.addEventListener("click", showAllProducts);


