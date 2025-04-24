const serviceFilter = document.getElementById('serviceFilter');
        const ratingFilter = document.getElementById('ratingFilter');
        const babysitterList = document.getElementById('babysitterList');
        const cards = babysitterList.getElementsByClassName('babysitter-card');

        function filterBabysitters() {
            const service = serviceFilter.value;
            const rating = ratingFilter.value;

            Array.from(cards).forEach(card => {
                const cardService = card.getAttribute('data-service');
                const cardRating = parseFloat(card.getAttribute('data-rating'));

                const serviceMatch = !service || cardService === service;
                const ratingMatch = !rating || cardRating >= parseFloat(rating);

                card.style.display = serviceMatch && ratingMatch ? 'block' : 'none';
            });
        }

        serviceFilter.addEventListener('change', filterBabysitters);
        ratingFilter.addEventListener('change', filterBabysitters);
    