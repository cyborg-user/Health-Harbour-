let generatedOTP = null;

function sendOTP() {
    const phone = document.getElementById('phone').value;
    if (!phone) {
        alert('Please enter your phone number.');
        return;
    }

    // Mock OTP generation (in a real app, this would be sent via SMS/email)
    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    alert(`OTP sent to ${phone}: ${generatedOTP}`); // In real app, send OTP via SMS/email

    // Show OTP input field and verify button
    document.getElementById('otpGroup').style.display = 'block';
    document.getElementById('verifyBtn').style.display = 'block';
    document.getElementById('message').innerText = '';
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otp').value;
    if (!enteredOTP) {
        alert('Please enter the OTP.');
        return;
    }

    if (enteredOTP == generatedOTP) {
        document.getElementById('message').innerText = 'OTP verified! Redirecting...';
        document.getElementById('message').style.color = 'green';
        // Redirect to the main app page after successful verification
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Replace with your dashboard URL
        }, 2000);
    } else {
        document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
}