const Discord = require("discord-user-bots");

async function sendMessage() {
    // Get token from environment variable
    const token = process.env.DISCORD_TOKEN;
    
    if (!token) {
        console.error("Error: DISCORD_TOKEN environment variable is not set");
        process.exit(1);
    }
    
    const client = new Discord.Client();
    
    try {
        console.log("Logging in to Discord...");
        
        // Login to Discord
        await client.login(token);
        console.log("Logged in successfully!");
        
        // Send the message
        console.log("Sending message...");
        await client.send("911252893250781255", {
            content: "!!work"
        });
        console.log("Message sent successfully!");
        
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    } finally {
        // Clean up
        client.destroy();
        console.log("Disconnected from Discord");
    }
}

// Run the function
sendMessage();
