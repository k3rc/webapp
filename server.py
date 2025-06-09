from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()
UPLOAD_DIR="uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app.add_middleware(CORSMiddleware,
    allow_origins=["*"],allow_methods=["*"],allow_headers=["*"],
)

@app.post("/upload")
async def upload(file: UploadFile=File(...)):
    path=os.path.join(UPLOAD_DIR,file.filename)
    with open(path,"wb") as f: f.write(await file.read())
    return {"filename":file.filename}

@app.get("/tracks")
def tracks():
    return {"tracks": os.listdir(UPLOAD_DIR)}

@app.get("/track/{fn}")
def track(fn:str):
    return FileResponse(os.path.join(UPLOAD_DIR,fn), media_type="audio/mpeg")
