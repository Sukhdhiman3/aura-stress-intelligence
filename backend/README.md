# Stress Detection Backend

## Setup Instructions

### 1. Create Virtual Environment
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Setup Model Directory
Create a `models/` folder and place your trained models:
```
backend/
├── models/
│   ├── audio_model.h5
│   ├── facial_model.h5
│   ├── physio_model.h5
│   ├── survey_model.h5
│   ├── physio_scaler.pkl
│   ├── survey_scaler.pkl
│   ├── survey_encoder.pkl
│   ├── C2_values.npy
│   ├── C3_values.npy
│   ├── C4_values.npy
│   ├── C5_values.npy
│   └── C6_values.npy
├── app.py
├── requirements.txt
└── README.md
```

### 4. Run the Backend
```bash
python app.py
```

The backend will run on `http://localhost:5000`

## API Endpoints

### POST /api/predict-stress
Main endpoint for stress prediction. Accepts:
- `imageData`: Base64 encoded image from webcam
- `audioData`: Audio blob data
- `physiologicalData`: Object with EDA, BVP, Temp, X, Y, Z values
- `surveyData`: Object with survey responses

Returns:
- `stressLevel`: "low", "moderate", or "high"
- `confidence`: Percentage confidence
- `modalityContributions`: Individual modality scores
- `insights`: Array of analysis insights

### GET /api/health
Health check endpoint to verify models are loaded.

## Deployment Options

### Option 1: Local Development
- Run Flask development server
- Frontend connects to `http://localhost:5000`

### Option 2: Docker Deployment
```bash
# Create Dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

# Build and run
docker build -t stress-detector-backend .
docker run -p 5000:5000 stress-detector-backend
```

### Option 3: Cloud Deployment
- **Heroku**: Simple deployment with git push
- **Google Cloud Run**: Serverless container deployment
- **AWS EC2**: Full control server deployment
- **Railway**: Modern cloud platform

## Frontend Integration

The backend is designed to work with your existing frontend. No changes needed to the frontend code - it will automatically connect to the backend when available.

## Model Requirements

Ensure your models are saved in the correct format:
- TensorFlow/Keras models as `.h5` files
- Scalers and encoders as `.pkl` files using pickle
- Categorical values as `.npy` files using numpy

## Troubleshooting

1. **Models not loading**: Check file paths in `models/` directory
2. **CORS errors**: Ensure Flask-CORS is installed and configured
3. **Memory issues**: Consider using model quantization for large models
4. **Audio processing**: May need to adjust audio preprocessing based on your model's training data