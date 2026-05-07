async function sendMessage() {

    const msg = document.getElementById("msg").value;

    const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: msg
        })
    });

    const data = await response.json();

    document.getElementById("output").innerHTML = data.reply;
}