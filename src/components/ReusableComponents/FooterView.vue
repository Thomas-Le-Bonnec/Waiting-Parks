<template>
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p><i class="fas fa-envelope"></i> Email: info@example.com</p>
                <p><i class="fas fa-phone"></i> Phone: (123) 456-7890</p>
            </div>

            <div class="footer-section">
                <h3>Follow Us</h3>
                <p><a href="#"><i class="fab fa-facebook"></i> Facebook</a></p>
                <p><a href="#"><i class="fab fa-twitter"></i> Twitter</a></p>
                <p><a href="#"><i class="fab fa-instagram"></i> Instagram</a></p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2023 Waiting Parks. All rights reserved.</p>
        </div>
    </footer>
</template>
  
<style scoped>
footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    margin-top: 2.5rem;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    padding: 0 50px;
}

.footer-section {
    flex: 1;
    margin-right: 20px;
}

h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

a {
    color: #fff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.footer-bottom {
    text-align: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #555;
}
</style>
  