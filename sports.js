// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBVd_PoWEtLC-1OiQYi_0t1ueqnBDiv6yo",
    authDomain: "sports-buddy-14798.firebaseapp.com",
    projectId: "sports-buddy-14798",
    storageBucket: "sports-buddy-14798.appspot.com",
    messagingSenderId: "G-LSZC9XEE67",
    appId: "1:281289033208:web:9de139ada5a2b9393ec20d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference to Firebase Authentication
const auth = firebase.auth();
const db = firebase.firestore();

// Get elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const logoutBtn = document.getElementById('logout-btn');
const authContainer = document.getElementById('auth-container');
const userContainer = document.getElementById('user-container');
const userEmail = document.getElementById('user-email');

// Login event
login-btn.addEventListener('click', e => {
    const emailVal = email.value;
    const passVal = password.value;
    auth.signInWithEmailAndPassword(emailVal, passVal).catch(e => console.log(e.message));
});

// Register event
register-btn.addEventListener('click', e => {
    const emailVal = email.value;
    const passVal = password.value;
    auth.createUserWithEmailAndPassword(emailVal, passVal).catch(e => console.log(e.message));
});



// Logout event
logout-btn.addEventListener('click', e => {
    auth.signOut();
});

// Auth state listener
auth.onAuthStateChanged(user => {
    if (user) {
        authContainer.style.display = 'none';
        userContainer.style.display = 'block';
        userEmail.innerText = user.email;
    } else {
        authContainer.style.display = 'block';
        userContainer.style.display = 'none';
    }
});
