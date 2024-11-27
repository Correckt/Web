// Simulated "database" for users
const users = {};

// Registration function
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    const regMsg = document.getElementById("reg-msg");

    if (username && password) {
        if (users[username]) {
            regMsg.textContent = "Username already exists!";
        } else {
            users[username] = password;
            regMsg.textContent = "Account created successfully!";
        }
    } else {
        regMsg.textContent = "Please fill out all fields.";
    }
}

// Login function
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const loginMsg = document.getElementById("login-msg");

    if (users[username] === password) {
        loginMsg.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "https://rickroll.it";
        }, 1000); // Redirect after 1 second
    } else {
        loginMsg.textContent = "Invalid username or password.";
    }
}