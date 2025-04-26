const output = document.getElementById("reply");

export function renderReply(data, sender) {

    const reply = document.createElement("p")
    reply.innerHTML = data
    reply.classList.add(sender);

    output.appendChild(reply)

    output.scrollTop = output.scrollHeight;
}