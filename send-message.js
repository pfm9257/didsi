const Discord = require("discord-user-bots");

async function sendMessage() {
    const token = process.env.DISCORD_TOKEN;
    
    if (!token) {
        console.error("Error: DISCORD_TOKEN environment variable is not set");
        process.exit(1);
    }
    
    const client = new Discord.Client();
    
    // Wait for connection before sending message
    return new Promise((resolve, reject) => {
        // Set up event handlers
        client.on("ready", async () => {
            console.log("Logged in successfully!");
            
            try {
                console.log("Sending message...");
                await client.send("911252893250781255", {
                    content: "!!work"
                });
                console.log("Message sent successfully!");
                resolve();
            } catch (error) {
                console.error("Error sending message:", error.message);
                reject(error);
            } finally {
                client.destroy();
                console.log("Disconnected from Discord");
            }
        });
        
        client.on("error", (error) => {
            console.error("Connection error:", error.message);
            reject(error);
        });
        
        // Login to Discord
        console.log("Logging in to Discord...");
        client.login(token).catch(error => {
            console.error("Login error:", error.message);
            reject(error);
        });
        
        // Set a timeout to prevent hanging
        setTimeout(() => {
            console.error("Connection timeout - taking too long to connect");
            client.destroy();
            reject(new Error("Connection timeout"));
        }, 30000); // 30 second timeout
    });
}

// Run the function with proper error handling
sendMessage()
    .then(() => {
        console.log("Script completed successfully");
        process.exit(0);
    })
    .catch(error => {
        console.error("Script failed:", error.message);
        process.exit(1);
    });
