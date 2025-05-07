<?php
        session_start();
        if (!isset($_SESSION['user_id'])) {
            echo '<p class="login-message">Please <a href="login.html">login</a> to book a babysitter.</p>';
        } else {
            echo '<form action="booking.php" method="POST">';
            echo '<input type="hidden" name="user_id" value="' . $_SESSION['user_id'] . '">';
            echo '<input type="text" name="client_name" placeholder="Your Name" required>';
            echo '<input type="email" name="client_email" placeholder="Your Email" required>';
            echo '<input type="number" name="num_children" placeholder="Number of Children" min="1" required>';
            echo '<input type="date" name="booking_date" required>';
            echo '<input type="time" name="booking_time" required>';
            echo '<select name="service_type" required>';
            echo '<option value="" disabled selected>Select Service Type</option>';
            echo '<option value="Date Night Care">Date Night Care</option>';
            echo '<option value="Regular Care">Regular Care</option>';
            echo '<option value="Emergency Care">Emergency Care</option>';
            echo '</select>';
            echo '<button type="submit">Submit Booking</button>';
            echo '</form>';
        }
        ?>