# 📸 QR Code Generator (Node.js CLI Project)

A simple Node.js command-line tool that generates a QR code image from a user-provided URL and saves the URL to a `.txt` file.

---

## 🚀 Features

- ✅ Accepts URL input via command line
- ✅ Generates a QR code PNG image
- ✅ Saves the original URL in a text file
- ✅ Easy to run and lightweight

---

## 🧰 Tech Stack

- **Node.js** – JavaScript runtime
- **Inquirer** – For CLI prompts
- **qr-image** – For generating the QR code
- **fs (File System)** – To read/write files

---

## 📦 Installation

> Requires [Node.js](https://nodejs.org/) installed on your system.

1. **Clone or Download** this project:

```bash
git clone https://github.com/your-username/qr-code-generator-nodejs.git
cd qr-code-generator-nodejs
```

2. **Install Dependencies**:

```bash
npm install inquirer qr-image
```

---

## ▶️ Usage

Run the app using the following command:

```bash
node index.js
```

You will be prompted to enter a URL. The app will:

- Generate a QR code PNG and save it as `qr_image.png`
- Save the URL to a text file named `URL.txt`

---

## 🧪 Example

```
? Enter your URL: https://github.com/
File has been saved!
```

**Generated Files:**

- `qr_image.png` → The QR code image
- `URL.txt` → The plain-text file containing the entered URL

---

## 📁 Project Structure

```
📦 qr-code-generator-nodejs
├── index.js          # Main app file
├── qr_image.png      # (Generated) QR code image
├── URL.txt           # (Generated) Stored URL
├── package.json
└── README.md         # Project documentation
```

---

## 🔒 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 👨‍💻 Author

**Meet Panchal**
