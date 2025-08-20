const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Turf Booking</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 {
                color: #2c3e50;
                text-align: center;
            }
            .status {
                background: #e8f5e8;
                border: 1px solid #4caf50;
                border-radius: 4px;
                padding: 10px;
                margin: 20px 0;
                text-align: center;
                color: #2e7d32;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🏟️ Turf Booking System</h1>
            <div class="status">
                ✅ Server is running successfully!
            </div>
            <p>Welcome to the Turf Booking application. The server is now running and ready for development.</p>
            <p>You can start building your turf booking features here.</p>
        </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(\`🏟️  Turf Booking server running on http://localhost:\${PORT}\`);
});