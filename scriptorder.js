// for order script
document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity');
    const totalPriceElement = document.getElementById('totalPrice');
    const serviceChargeElement = document.getElementById('servicecharge');
    const deliveryFeeElement = document.getElementById('deliveryfee');
    const orderForm = document.getElementById('orderForm');
    
    const modal = document.getElementById('signupModal');
    const closeModal = document.querySelector('.close');
    const confirmOrderButton = document.getElementById('confirmOrder');

    function updateTotal() {
        let total = 0;
        quantities.forEach(qty => {
            const price = parseInt(qty.dataset.price);
            const quantity = parseInt(qty.value) || 0;
            const subtotal = price * quantity;
            qty.closest('tr').querySelector('.subtotal').textContent = `₱${subtotal}`;
            total += subtotal;
        });

        let serviceCharge = total * 0.05;
        let deliveryFee = total * 0.10;
        let overall = total + serviceCharge + deliveryFee

        totalPriceElement.textContent = `₱${overall}`;
        serviceChargeElement.textContent = `₱${serviceCharge.toFixed(2)}`;
        deliveryFeeElement.textContent = `₱${deliveryFee.toFixed(2)}`;
    }

    quantities.forEach(qty => {
        qty.addEventListener('input', updateTotal);
    });

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = "block"; // Show the sign-up pop-up
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none"; // Close the modal when clicking the "X"
    });

    confirmOrderButton.addEventListener('click', function() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email === "" || password === "") {
            alert("Please enter your email and password to proceed.");
            return;
        }

        alert(`Order confirmed!\nTotal: ${totalPriceElement.textContent}\nEmail: ${email}`);
        modal.style.display = "none"; // Close the modal after submission
    });

    updateTotal();
});




// end of order script




document.addEventListener('DOMContentLoaded', () => {
    const searchicon1 = document.querySelector('#searchicon1');
    const searchicon2 = document.querySelector('#searchicon2');
    const searchinput1 = document.querySelector('#searchinput1');
    const searchinput2 = document.querySelector('#searchinput2');

    // Toggle visibility of search input when clicking on search icon 1
    searchicon1.addEventListener('click', function() {
        toggleSearch(searchinput1);
        // Hide the second search bar if it's visible
        if (searchinput2.style.display === 'flex') {
            searchinput2.style.display = 'none';
        }
    });

    // Toggle visibility of search input when clicking on search icon 2
    searchicon2.addEventListener('click', function() {
        toggleSearch(searchinput2);
        // Hide the first search bar if it's visible
        if (searchinput1.style.display === 'flex') {
            searchinput1.style.display = 'none';
        }
    });

    // Function to toggle the visibility of the search input
    function toggleSearch(searchInput) {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'flex';
        } else {
            searchInput.style.display = 'none';
        }
    }
});

// Sidebar toggle
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block'; 
        cross.style.zIndex = '2';
    }, 200);
    headerbar.style.right = '0'; // Slide in from the right
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';  // Hide the cross icon when clicked
    headerbar.style.right = '-100%'; // Slide out to the right
});




document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('#slideContainer .slide');

    // Show the first slide initially
    showSlides();

    // Add click event to each slide to cycle to the next slide
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlides();
        });
    });

    function showSlides() {
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? 'block' : 'none';
        });
    }
});
