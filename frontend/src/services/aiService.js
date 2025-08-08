export async function askAI(question) {
    try {
        const response = await fetch("http://localhost:5000/api/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();
        return data.answer || "No answer received.";
    } catch (error) {
        console.error("Error asking AI:", error);
        return "Error connecting to AI service.";
    }
}
