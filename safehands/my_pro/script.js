 // Load or get user data from localStorage
 let userData = JSON.parse(localStorage.getItem('userData')) || {};
 const urlParams = new URLSearchParams(window.location.search);
 const userName = urlParams.get('name') || userData.name || 'Not provided';
 const userEmail = urlParams.get('email') || userData.email || 'Not provided';

 // Save user data to localStorage if coming from login
 if (urlParams.get('name') && urlParams.get('email')) {
     userData = { name: userName, email: userEmail };
     localStorage.setItem('userData', JSON.stringify(userData));
 }

 // Update Navbar based on login status
 document.addEventListener('DOMContentLoaded', () => {
     const userData = JSON.parse(localStorage.getItem('userData'));
     const loginLink = document.getElementById('login-link');
     const profileLink = document.getElementById('profile-link');

     if (userData && userData.email) {
         loginLink.style.display = 'none';
         profileLink.style.display = 'block';
     } else {
         loginLink.style.display = 'block';
         profileLink.style.display = 'none';
     }
 });

 // Display user data
 document.getElementById('user-name').textContent = userName;
 document.getElementById('user-email').textContent = userEmail;

 // Load bookings from localStorage
 function loadBookings() {
     const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
     const bookingList = document.getElementById('booking-list');
     bookingList.innerHTML = '';

     if (bookings.length === 0) {
         bookingList.innerHTML = '<p>No bookings yet.</p>';
     } else {
         bookings.forEach(booking => {
             if (booking.email === userEmail) {
                 const bookingItem = document.createElement('div');
                 bookingItem.className = 'booking-item';
                 bookingItem.textContent = `Booking: ${booking.service} - Date: ${booking.date}`;
                 bookingList.appendChild(bookingItem);
             }
         });
     }
 }

 // Initial load
 loadBookings();

 // Change Password logic
 async function changePassword() {
     const newPassword = document.getElementById('new-password').value.trim();
     const confirmPassword = document.getElementById('confirm-password').value.trim();
     const statusMessage = document.getElementById('status-message');

     if (!newPassword || !confirmPassword) {
         statusMessage.textContent = "Please fill in both fields.";
         statusMessage.style.color = "red";
         return;
     }

     if (newPassword !== confirmPassword) {
         statusMessage.textContent = "Passwords do not match.";
         statusMessage.style.color = "red";
         return;
     }

     if (newPassword.length < 6) {
         statusMessage.textContent = "Password must be at least 6 characters long.";
         statusMessage.style.color = "red";
         return;
     }

     try {
         const response = await fetch(`https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users?contact_info=eq.${encodeURIComponent(userEmail)}`, {
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json",
                 "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc",
                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc",
                 "Prefer": "return=minimal"
             },
             body: JSON.stringify({
                 pass: newPassword
             })
         });

         if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
         }

         statusMessage.textContent = "Password updated successfully!";
         statusMessage.style.color = "green";
         document.getElementById('new-password').value = '';
         document.getElementById('confirm-password').value = '';
     } catch (error) {
         console.error("Fetch error in Change Password:", error.message, error.stack);
         statusMessage.textContent = "Network error. Please try again later.";
         statusMessage.style.color = "red";
     }
 }

 // Logout function
 function logout() {
     localStorage.removeItem('userData');
     localStorage.removeItem('bookings');
     window.location.href = 'http://127.0.0.1:5500/index.html';
 }