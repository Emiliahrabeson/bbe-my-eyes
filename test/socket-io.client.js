import { io } from "socket.io-client";

// Connect to the Socket.IO server
const socket = io("http://localhost:3000");

// Connection successful
socket.on("connect", () => {
  console.log("connected to the server");
  console.log(`Socket ID: ${socket.id}`);

  // Send a message using your custom event
  socket.emit("client_message", "Welcome");
});

// Listen for the 'open' event your server sends on connection
socket.on("open", (data) => {
  console.log("open event received:", data);
});

// Listen for echo responses
socket.on("echo", (data) => {
  console.log("echo received:", data);
});

// Listen for location updates
socket.on("location_update", (data) => {
  console.log("location update received:", data);
});

// Listen for sensor updates
socket.on("sensor_update", (data) => {
  console.log("sensor update received:", data);
});

// Listen for text messages
socket.on("text_message", (data) => {
  console.log("text message received:", data);
});

// Listen for notifications
socket.on("notification", (data) => {
  console.log("notification received:", data);
});

// Handle disconnection
socket.on("disconnect", (reason) => {
  console.log("disconnected");
  console.log("reason:", reason);
});

// Handle errors
socket.on("connect_error", (error) => {
  console.error("connection error:", error.message);
});
