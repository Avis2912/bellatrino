document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const submitButton = document.getElementById("submit");

    let selectedRating = 0;

    // Event listener for star rating selection
    stars.forEach((star) => {
        star.addEventListener("click", () => {
            selectedRating = parseInt(star.getAttribute("data-rating"));

            // Set all stars up to the selected one as selected
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("selected");
            }

            // Remove the selected class from stars after the selected one
            for (let i = selectedRating; i < stars.length; i++) {
                stars[i].classList.remove("selected");
            }
        });
    });

    // Event listener for form submission
    submitButton.addEventListener("click", () => {
        if (selectedRating === 0) {
            alert("Please select a star rating.");
        } else {
            if (selectedRating < 5) {
                // Create a JSON object with the data you want to send
                var jsonData = {
                    "Rating": selectedRating,
                    // Add other data properties as needed
                };

              alert("hi");
                // Make an HTTP POST request to Airtable API
                var base = new Airtable({apiKey: 'pat3c6dUOi0N91von.7202d21329df78a07fc75004903e842c4290e3b1177eb4090d74a301d5b91c37'}).base('appinf92FHB1IP3Cj');


                base('QR_Contacts').create(
                    [{ "fields": jsonData }],
                    function (err, record) {
                        if (err) {
                            console.error('Error creating record:', err);
                            alert('Error submitting data.');
                        } else {
                            alert('Data submitted successfully.');
                        }
                    }
                );

                alert("Thank you for your rating!");
            } else {
                // Redirect to Google search link or other action for rating >= 5
                window.location.href = "https://www.google.com/search?q=bellatrino+pizza&rlz=1C1CHBF_enUS1073&oq=bellatrino+pizza&aqs=chrome.0.69i59.3503j0j1&sourceid=chrome&ie=UTF-8#lrd=0x864e98e18f0ab5bd:0xb7b4ae2a435706af,1,,,,";
            }
        }
    });
});
