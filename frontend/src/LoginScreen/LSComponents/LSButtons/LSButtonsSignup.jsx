function handleClick() {
    fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())  // Read response as text first
    .then(text => {
        console.log("Raw response:", text); // Check if it's valid JSON
        try {
            const data = JSON.parse(text);
            timedMessage(data[0]); // Adjust if the response structure differs
        } catch (error) {
            console.error("Error parsing JSON:", error);
            timedMessage("Signup failed: Invalid response");
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
        timedMessage("Signup failed: Network error");
    });
}
