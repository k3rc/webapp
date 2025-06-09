# server.py
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# CORS настройка
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Upload endpoint
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as f:
        f.write(await file.read())
    return {"filename": file.filename}

# Получить список треков
@app.get("/tracks")
def list_tracks():
    files = os.listdir(UPLOAD_DIR)
    return {"tracks": files}

# Стриминг трека
@app.get("/track/{filename}")
def get_track(filename: str):
    file_path = os.path.join(UPLOAD_DIR, filename)
    return FileResponse(path=file_path, media_type="audio/mpeg")
