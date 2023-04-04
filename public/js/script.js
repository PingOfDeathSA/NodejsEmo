

//Geting Data From Top Banner
let carts = document.querySelectorAll(".add-cart");
let cartMain = document.querySelectorAll(".add-cart2");
let cartMain3 = document.querySelectorAll(".add-cart3");


for (let i = 0; i < cartMain.length; i++) {
  cartMain3[i].addEventListener('click', () => {
    const productDetail3 = cartMain3[i].parentElement;
      const nameofproductMain3 = productDetail3.querySelector('h5').innerHTML;
      const PriceMain3 = productDetail3.querySelector('.Price3').innerHTML;
      const ImageMain3 = productDetail3.querySelector('.ProductCard3').src;
    //  console.log(productDetail3)
    My_Product_Data3 = [
                        
      {

      Name : nameofproductMain3,
      Price : PriceMain3,
      Image: ImageMain3,

      }

]
// console.log(nameofproductMain3)
//   console.log(PriceMain3)
//   console.log(ImageMain3)
 console.log(My_Product_Data3)

})
}




for (let i = 0; i < cartMain.length; i++) {
  cartMain[i].addEventListener('click', () => {
    const productDetail = cartMain[i].parentElement;
     const nameofproductMain = productDetail.querySelector('h5').innerHTML;
     const PriceMain = productDetail.querySelector('.items').innerHTML;
     const ImageMain = productDetail.querySelector('.ProductCardMain').src;

    My_Product_Data = [
                        
      {

      Name : nameofproductMain,
      Price : PriceMain,
      Image: ImageMain,

      }

]
// console.log(ImageMain)
//   console.log(PriceMain)
//   console.log(nameofproductMain)
 console.log(My_Product_Data)

})
}

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    const productDetails = carts[i].parentElement;
     const nameofproduct = productDetails.querySelector('h5').innerHTML;
     const Price = productDetails.querySelector('.priceItem').innerHTML;
     const Image = productDetails.querySelector('.ProductCard').src;
     My_Banner_Data = [
                        
                  {

                  BannerName : nameofproduct,
                  BannerPrice : Price,
                  BannerImage: Image,

                  }
    
    ]
     console.log(My_Banner_Data)
     console.log(My_Banner_Data.length)

  })
}



for (let i = 0; i < cartMain.length; i++) {
  cartMain[i].addEventListener('click', () => {
    cartNumbers();

  })
}
for (let i = 0; i < cartMain3.length; i++) {
  cartMain3[i].addEventListener('click', () => {
    cartNumbers();

  })
}
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(My_Banner_Data);

  })
}




function cartNumbers(Banner) {
  console.log('the banner clicked is ',Banner)
  let productNumber = localStorage.getItem('cartNumbers');
  productNumber = parseInt(productNumber);





  if (productNumber) {
      localStorage.setItem('cartNumbers', productNumber + 1);
      document.querySelectorAll('.span-cart').forEach((el) => {
          el.textContent = productNumber + 1;
      });
  } else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelectorAll('.span-cart').forEach((el) => {
          el.textContent = 1;
      });
  }
}

function onlocalstorage() {
  let productNumber = localStorage.getItem('cartNumbers');
  if (productNumber) {
      document.querySelectorAll('.span-cart').forEach((el) => {
          el.textContent = productNumber;
      });
  }
}

onlocalstorage();




// const passwordInput = document.querySelector('#password');
// const password2Input = document.querySelector('#password2');

// function validatePassword() {
//   if (passwordInput.value !== password2Input.value) {
//     password2Input.setCustomValidity("Passwords don't match");
//   } else {
//     password2Input.setCustomValidity("");
//   }
// }

// passwordInput.addEventListener('input', validatePassword);
// password2Input.addEventListener('input', validatePassword);
          
//           const passwordToggle = document.querySelector('#password-toggle');
        
//           passwordToggle.addEventListener('click', function() {
//             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//             passwordInput.setAttribute('type', type);
//             passwordToggle.querySelector('i').classList.toggle('fa-eye');
//             passwordToggle.querySelector('i').classList.toggle('fa-eye-slash');
//           });
        
//           function validatePassword() {
//             if (passwordInput.value !== password2Input.value) {
//               password2Input.setCustomValidity("Passwords don't match");
//             } else {
//               password2Input.setCustomValidity("");
//             }
//           }
  









// call updateEmployeeTax initially to set the value






