# QR Code Generator (Node.js CLI Project)

This is a simple Node.js command-line application that generates a QR code image from a user-provided URL. It also saves the URL into a `URL.txt` file for reference.

## 🧰 Technologies Used

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer) - for interactive CLI input
- [qr-image](https://www.npmjs.com/package/qr-image) - to generate the QR code
- [fs (File System)](https://nodejs.org/api/fs.html) - to handle file writing

## 📦 Installation

Make sure you have Node.js installed. If not, download it from [https://nodejs.org/](https://nodejs.org/).

1. Clone this repository or download the project folder.
2. Open the terminal and navigate to the project directory.
3. Install the required dependencies using the command:

```bash
npm install inquirer qr-image

▶️ How to Run
Once the dependencies are installed, run the script using:

node index.js

You will be prompted to enter a URL.
Example:
? Enter your URL: https://github.com/

After entering the URL:
A QR code image will be generated and saved as qr_image.png in the current directory.
The same URL will be saved to a text file called URL.txt.

📁 Output Files
qr_image.png: The generated QR code image.
URL.txt: A text file containing the entered URL.

🧠 How It Works
Prompts the user for a URL using inquirer.
Generates a QR code using qr-image and saves it as qr_image.png.
Saves the provided URL in URL.txt.

✅ Sample Output
? Enter your URL: https://www.google.com
File has been saved!

qr_image.png will contain a scannable QR code.
URL.txt will contain: https://www.google.com

📄 License
This project is open source and available under the MIT License.

🔗 Author
Meet Panchal