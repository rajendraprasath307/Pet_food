// const navbars= document.getElementById("navbar");
// window.openNav =function(){
//     navbars.style.left="0";
// }
// window.closeNav =function(){
//     navbars.style.left="-100%"
// };

function openNav() {
    const navbars = document.getElementById("navbar");
    navbars.style.left = "0";
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".close-btn").style.display = "block";
}

function closeNav() {
    const navbars = document.getElementById("navbar");
    navbars.style.left = "-100%";
    document.querySelector(".menu-toggle").style.display = "block";
    document.querySelector(".close-btn").style.display = "none";
}

// section images

let slideindex=0;
let images= document.querySelectorAll(".slideimages");
let slideIntervel;

function slideshow() {
    for(let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    slideindex++;
    if(slideindex > images.length){
        slideindex = 1;
    }
    images[slideindex - 1].style.display = "block";
}

function startintervel(){
    slideIntervel = setInterval( () => {
        slideshow()
    },2000)
}

startintervel();

function plusSlides(step){
    clearInterval(slideIntervel);
    slideindex += step-1;

    if ( slideindex < 0 ){
        slideindex = images.length - 1;
    }
    else if ( slideindex >= images.length){
        slideindex=0;
        }
    slideshow();
    startintervel();
}


// horizontal scrollable container for pet categories

const petCategories = document.querySelector('.pet-categories');
        let startX = 0;
        let isDragging = false;
        
        petCategories.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
        });
        
        petCategories.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
        
            const currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
        
            petCategories.scrollLeft += diffX;
            startX = currentX;
        });
        
        petCategories.addEventListener('touchend', () => {
            isDragging = false;
        });
// Function to handle click on pet category
document.querySelectorAll('.pet-category').forEach(item => {
    item.addEventListener('click', event => {
        const category = item.getAttribute('id');
        switch (category) {
            case 'dog':
                alert('You clicked on Dog!');
                // Perform actions specific to Dog category
                break;
            case 'cat':
                alert('You clicked on Cat!');
                // Perform actions specific to Cat category
                break;
            case 'bird':
                alert('You clicked on Bird!');
                // Perform actions specific to Bird category
                break;
            case 'fish':
                alert('You clicked on Fish!');
                // Perform actions specific to Fish category
                break;
            case 'rabbit':
                alert('You clicked on Rabbit!');
                // Perform actions specific to Rabbit category
                break;
            case 'mouse':
                alert('You clicked on Guinea pig!');
                // Perform actions specific to Mouse category
                break;
            default:
                // Handle unknown category
                alert('Unknown category!');
                break;
        }
    });
});


// Add event listeners to coupon buttons
document.querySelectorAll('.coupon-btn').forEach(button => {
    button.addEventListener('click', () => {
      const couponAmount = parseInt(button.dataset.amount); // Get the coupon amount from the button's data attribute
      const userAmount = parseInt(prompt('Enter your spend amount (in ₹):')); // Prompt user for spend amount

      if (isNaN(userAmount)) {
        alert('Invalid amount entered. Please enter a valid number.');
        return; // Exit function if user input is not a number
      }

      const discount = Math.min(userAmount, couponAmount); // Calculate the discount (minimum of userAmount and couponAmount)
      alert(`Discount: ₹ ${discount}/-`); // Display the discount in an alert message
    });
  });
