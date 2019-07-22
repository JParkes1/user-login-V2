// User Login

// Event Listener
document.getElementById('LoginBtn').addEventListener('click', LoginAttempt)

// Event Function
function LoginAttempt() {
    let username = document.getElementById('UserN').value;
    let password = document.getElementById('PassW').value;
    username = username.toLowerCase();
    password = password.toLowerCase();

    // Sucessful user name and password
    if (username == 'joe parkes' && password == 'summer school') {
        alert('Sign In Successful!')
    } else {
        alert('Sign In Unsuccessful!')
    }
}