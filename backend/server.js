const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;

        console.log("User Message:", userMessage);

        // Send message to n8n webhook
        const response = await fetch("http://localhost:5678/webhook/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: userMessage
            })
        });

        const data = await response.json();

        res.json({
            success: true,
            reply: data.reply
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            reply: "Something went wrong"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});