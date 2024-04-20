const request = require('request');
const fs = require('fs');
const urlRequest = process.argv[2];
const filePath = process.argv[3];


request(urlRequest, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error('Error occurred:', err);
      return;
    }
    // Successful operation
    try {
      const stats = fs.statSync(filePath);
      console.log(`Successfully downloaded and saved ${stats.size} bytes to ${filePath}`);
    } catch (error) {
      console.error('Error retrieving file stats:', error);
    }
  });
});

