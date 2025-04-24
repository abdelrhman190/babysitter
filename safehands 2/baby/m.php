<?php
            require_once 'db_connect.php';
            $stmt = $pdo->query("SELECT * FROM babysitters");
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<div class="babysitter-card" data-service="' . $row['service_type'] . '" data-rating="' . $row['avg_rating'] . '">';
                echo '<h3>' . htmlspecialchars($row['name']) . '</h3>';
                echo '<p>' . htmlspecialchars($row['description']) . '</p>';
                echo '<p>Service: ' . htmlspecialchars($row['service_type']) . '</p>';
                echo '<div class="rating">';
                for ($i = 1; $i <= 5; $i++) {
                    echo $i <= $row['avg_rating'] ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                }
                echo '</div>';
                echo '<form class="rating-form" action="rating.php" method="POST">';
                echo '<input type="hidden" name="babysitter_id" value="' . $row['id'] . '">';
                echo '<select name="rating" required>';
                echo '<option value="" disabled selected>Rate (1-5)</option>';
                for ($i = 1; $i <= 5; $i++) {
                    echo '<option value="' . $i . '">' . $i . ' Stars</option>';
                }
                echo '</select>';
                echo '<textarea name="comment" placeholder="Your comment" rows="3"></textarea>';
                echo '<button type="submit">Submit Rating</button>';
                echo '</form>';
                echo '</div>';
            }
            ?>