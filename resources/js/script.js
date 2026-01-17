document.addEventListener('DOMContentLoaded', () => {
    const stateForm = document.getElementById('stateForm');
    if (stateForm) {
        stateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const selectedState = document.getElementById('stateSelect').value;
            window.location.href = "destination.html?state=" + encodeURIComponent(selectedState);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const chosenState = urlParams.get('state');

    if (chosenState) {
        const heading = document.getElementById('heading');
        if (heading) {
            heading.innerHTML = "Exploring " + chosenState;
        }

        const stateClass = chosenState.replace(/\s+/g, '-');

        const allPlaces = document.getElementsByClassName('place');
        let found = false;

        for (let i = 0; i < allPlaces.length; i++) {
            if (allPlaces[i].classList.contains(stateClass)) {
                allPlaces[i].style.display = "block"; 
                found = true;
            } else {
                allPlaces[i].style.display = "none";
            }
        }

        if (!found && heading) {
            heading.innerHTML = "No destinations found for " + chosenState;
        }
    }
});