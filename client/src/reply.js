const output = document.getElementById("reply");

export function renderReply(data) {

    const reply = document.createElement("p")
    reply.innerHTML = data

    output.appendChild(reply)
}