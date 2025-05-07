document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const signupStatusMessage = document.querySelector('.sign-up .status');
    const signinStatusMessage = document.querySelector('.sign-in .status');

    if (!signupStatusMessage || !signinStatusMessage) {
        console.error("Status message elements not found!");
        throw new Error("Status message elements not found in DOM");
    }

    registerBtn.addEventListener('click', () => {
        console.log("Register button clicked");
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        console.log("Login button clicked");
        container.classList.remove("active");
    });

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Sign Up form submitted");

        const name = document.getElementById('signup-name').value.trim();
        const contactInfo = document.getElementById('signup-contact-info').value.trim();
        const password = document.getElementById('signup-password').value.trim();

        if (!name || !contactInfo || !password) {
            console.log("Validation failed: Missing fields");
            signupStatusMessage.textContent = "Please fill in all fields.";
            signupStatusMessage.style.color = "red";
            return;
        }

        try {
            const response = await fetch("https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users?select=*", {
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
                    pass: password
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Sign Up response:", response.status, "Data:", data);

            if (response.ok) {
                console.log("Sign Up successful");
                signupStatusMessage.textContent = "Account created successfully! Email: " + contactInfo;
                signupStatusMessage.style.color = "green";
                signupForm.reset();

                const verifyResponse = await fetch(`https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users?contact_info=eq.${encodeURIComponent(contactInfo)}&select=*`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc"
                    }
                });

                if (!verifyResponse.ok) {
                    throw new Error(`HTTP error in verification! Status: ${verifyResponse.status}`);
                }

                const verifyData = await verifyResponse.json();
                console.log("Verification after Sign Up:", verifyResponse.status, verifyData);
            } else {
                console.error("Error response:", data);
                signupStatusMessage.textContent = "Error creating account: " + (data.message || JSON.stringify(data));
                signupStatusMessage.style.color = "red";
            }
        } catch (error) {
            console.error("Fetch error in Sign Up:", error.message, error.stack);
            if (signupStatusMessage) {
                signupStatusMessage.textContent = "Network error. Please try again later.";
                signupStatusMessage.style.color = "red";
            }
        }
    });

    // Sign In logic
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Sign In form submitted");

        const contactInfo = document.getElementById('signin-contact-info').value.trim();
        const password = document.getElementById('signin-password').value.trim();

        if (!contactInfo || !password) {
            console.log("Validation failed: Missing fields");
            if (signinStatusMessage) {
                signinStatusMessage.textContent = "Please fill in all fields.";
                signinStatusMessage.style.color = "red";
            }
            return;
        }

        try {
            const response = await fetch(`https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users?contact_info=eq.${encodeURIComponent(contactInfo)}&select=*`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Sign In response:", response.status, "Raw data:", data);

            if (response.ok && Array.isArray(data) && data.length > 0) {
                const user = data[0];
                console.log("User data:", user);
                if (user.pass === password) {
                    console.log("Sign In successful");
                    if (signinStatusMessage) {
                        signinStatusMessage.textContent = "Sign in successful!";
                        signinStatusMessage.style.color = "green";
                    }
                    signinForm.reset();
                    console.log("Redirecting to profile page...");
                    // Pass user data to profile page via URL parameters
                    const redirectUrl = `/index.html?name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.contact_info)}`;
                    window.location.replace(redirectUrl);
                } else {
                    console.log("Invalid password");
                    if (signinStatusMessage) {
                        signinStatusMessage.textContent = "Invalid email or password.";
                        signinStatusMessage.style.color = "red";
                    }
                }
            } else {
                console.log("User not found - Data length:", data.length, "Response status:", response.status, "Data type:", typeof data);
                if (signinStatusMessage) {
                    signinStatusMessage.textContent = "Invalid email or password.";
                    signinStatusMessage.style.color = "red";
                }
            }
        } catch (error) {
            console.error("Fetch error in Sign In:", error.message, error.stack);
            if (signinStatusMessage) {
                signinStatusMessage.textContent = "Network error. Please try again later.";
                signinStatusMessage.style.color = "red";
            } else {
                console.error("signinStatusMessage is not available in DOM");
            }
        }
    });
});