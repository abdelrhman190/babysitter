const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        const signupForm = document.getElementById('signup-form');
        const signinForm = document.getElementById('signin-form');
        const statusMessage = document.createElement('div');
        statusMessage.className = 'status';
        document.querySelector('.form-container.sign-up').appendChild(statusMessage);
    
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });
    
        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            const name = document.getElementById('signup-name').value.trim();
            const contactInfo = document.getElementById('signup-contact-info').value.trim();
            const password = document.getElementById('signup-password').value.trim();
    
            if (!name || !contactInfo || !password) {
                statusMessage.textContent = "Please fill in all fields.";
                statusMessage.style.color = "red";
                return;
            }
    
            try {
                const response = await fetch("https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/profiles", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc",
                        "Prefer": "return=representation"
                    },
                    body: JSON.stringify({
                        name: name,
                        contact_info: contactInfo,
                        pass: password,
 
                    })
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    statusMessage.textContent = "Account created successfully!";
                    statusMessage.style.color = "green";
                    signupForm.reset();
                } else {
                    console.error(data);
                    statusMessage.textContent = "Error creating account: " + (data.message || JSON.stringify(data));
                    statusMessage.style.color = "red";
                }
            } catch (error) {
                console.error("Fetch error:", error);
                statusMessage.textContent = "Network error. Please try again later.";
                statusMessage.style.color = "red";
            }
        });
