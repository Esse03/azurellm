import {renderReply} from "./reply.js";

let history = JSON.parse(localStorage.getItem("history")) || [];

export async function prompt(e) {
    e.preventDefault();

    const chatInput = document.querySelector("#chat");
    const promptText = chatInput.value.trim();
    if (!promptText) return;

    // Save human message locally first
    history.push(["human", promptText]);

    renderReply(promptText);

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ history }) // send full history INCLUDING your new message
    };

    try {
        const response = await fetch("http://localhost:3000/", options);
        if (response.ok) {
            const data = await response.text();

            // After bot replies, THEN save bot message
            history.push(["assistant", data]);

            if (history.length > 20) {
                history = history.slice(-20);
            }

            localStorage.setItem("history", JSON.stringify(history));

            console.log(data);

            renderReply(data)
        } else {
            console.error("Request failed with status:", response.status);
        }
    } catch (err) {
        console.error("Fetch error:", err);
    }

    chatInput.value = "";
}


