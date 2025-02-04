 
const plusSigns = document.querySelectorAll(".plus-sign");

plusSigns.forEach((plusSign) => {
    
    plusSign.addEventListener("click", function () {
        
        
        const menuItem = plusSign.closest(".menu-item");

        
        const dishDetails = menuItem.querySelector(".dish-details");

       
        if (dishDetails.style.display === "none" || dishDetails.style.display === "") {
            dishDetails.style.display = "block"; // Show the details
            plusSign.innerHTML = "-"; // Change to minus
        } else {
            dishDetails.style.display = "none"; // Hide the details
            plusSign.innerHTML = "+"; // Change back to plus
        }
    });
});


const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

    
    button.addEventListener("click", function () {

        
        const filterType = this.dataset.category; 
        document.querySelectorAll(".menu-item").forEach((menuItem) => {
            if (filterType === "all" || menuItem.classList.contains(filterType)) {
                
                menuItem.style.display = "block"; 
            } else {
                
                menuItem.style.display = "none"; 
            }
        });
    });
});




const reservationForm = document.getElementById("reservation-form");

const confirmationMessage = document.getElementById("confirmation-message");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    
    
    const date = document.getElementById("date").value;

    
    const people = document.getElementById("people").value;

    
    confirmationMessage.textContent = `Thank you, ${name}! Your reservation for ${people} people on ${date} has been confirmed.`;

   
    reservationForm.reset();
});