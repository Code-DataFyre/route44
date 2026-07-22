import json
import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from database import get_cursor, init_db
from schemas import SubmissionCreate, SubmissionOut

app = FastAPI(title="Route 44 Backend")

frontend_origin = os.environ.get("FRONTEND_ORIGIN", "http://localhost:5183")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin, "http://localhost:5183"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    init_db()


@app.get("/api/health")
def health():
    with get_cursor() as cur:
        cur.execute("SELECT 1;")
        cur.fetchone()
    return {"status": "ok"}


@app.post("/api/submissions", response_model=SubmissionOut)
def create_submission(payload: SubmissionCreate):
    try:
        with get_cursor() as cur:
            cur.execute(
                """
                INSERT INTO submissions
                    (form_type, name, email, company, phone, service, message, details)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id, form_type, name, email, company, phone, service,
                          message, details, created_at;
                """,
                (
                    payload.form_type,
                    payload.name,
                    payload.email,
                    payload.company,
                    payload.phone,
                    payload.service,
                    payload.message,
                    json.dumps(payload.details) if payload.details is not None else None,
                ),
            )
            row = cur.fetchone()
        return row
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Could not save submission") from exc
