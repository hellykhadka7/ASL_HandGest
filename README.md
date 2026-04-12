# ✋ SignLang — Real-Time Gesture Recognition

A real-time hand gesture recognition web application that detects sign language gestures using a webcam and converts them into text instantly.

Built with a modern full-stack setup using React, FastAPI, and Machine Learning.

---

## 🌐 Live Demo

👉 https://signspeak-realtime.vercel.app/

---

## 📸 Preview

![App Preview](./preview.png)

---

## ✨ Features

- 🎥 Real-time webcam-based gesture detection  
- ⚡ Instant prediction with minimal latency  
- 🧠 Machine Learning model trained on hand landmarks  
- 🔤 Converts gestures into text output  
- 📊 Confidence score display  
- 🧾 Gesture history tracking  
- 🌑 Clean modern UI (monochrome theme)

---

## 🏗️ Tech Stack

### Frontend
- React (Vite + TypeScript)
- Tailwind CSS
- Framer Motion

### Backend
- FastAPI (Python)
- Uvicorn

### Machine Learning
- MediaPipe (hand tracking)
- Scikit-learn (RandomForest)

---

## ⚙️ How It Works

1. Webcam captures hand gesture
2. MediaPipe extracts hand landmarks (21 points)
3. Features are processed into a vector
4. Trained ML model predicts the gesture
5. Output is displayed in real-time

---

## 📂 Project Structure

```

ASL_HandGest/
│
├── frontend/        # React frontend
│   ├── src/
│   └── public/
│
├── backend/         # FastAPI backend
│   ├── main.py
│   ├── model/
│   └── utils/
│
└── README.md

````

---

## 🧪 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ASL_HandGest.git
cd ASL_HandGest
````

---

### 2️⃣ Run Backend

```bash
cd backend
python -m venv web_env
web_env\Scripts\activate   # Windows
source web_env/bin/activate # Mac/Linux

pip install -r requirements.txt
python main.py
```

Backend runs at:

```
http://localhost:8000
```

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 4️⃣ Environment Variable

Create `.env` in frontend:

```
VITE_BACKEND_URL=http://localhost:8000
```

---

## 📊 Model Details

* Algorithm: Random Forest Classifier
* Input: Hand landmarks (x, y coordinates)
* Features: ~35 extracted features
* Classes: A - Z (expandable to full alphabet)

---

## 🚧 Future Improvements

* 🔤 Full gesture support
* 🎤 Speech output (Text-to-Speech)
* 📱 Mobile optimization
* 🤖 Deep Learning model (CNN/LSTM)
* 🌍 Multi-language support

---

## 💡 Motivation

This project aims to reduce communication barriers by enabling real-time translation of sign language into text using accessible web technologies.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

---

## 👨‍💻 Author

Gaurab Khadka
GitHub: [https://github.com/github.com/hellykhadka7](https://github.com/hellykhadka7)

---

⭐ If you found this useful, consider giving it a star!

```

---

# 🔥 IMPORTANT IMPROVEMENTS (DO THIS NOW)

### 1. Add Preview Image
Take screenshot and add:
```

frontend/public/preview.png




