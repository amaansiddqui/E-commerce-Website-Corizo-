// Function to handle logout
function handleLogout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    window.location.href = 'User/login.html'; // Redirect to login page
}




