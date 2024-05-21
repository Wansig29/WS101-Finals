document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Check if all fields are filled
    if (!firstName || !lastName || !email || !street || !city || !zip || !paymentMethod) {
        alert('Please fill out all required fields.');
        return;
    }

    // Display the collected information
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Customer Details</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Street:</strong> ${street}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Zip:</strong> ${zip}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
    `;
});
