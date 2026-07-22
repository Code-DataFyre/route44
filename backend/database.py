import os
from contextlib import contextmanager

import psycopg2
import psycopg2.extras
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.environ["DATABASE_URL"]


@contextmanager
def get_connection():
    conn = psycopg2.connect(DATABASE_URL)
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


@contextmanager
def get_cursor():
    with get_connection() as conn:
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        try:
            yield cur
        finally:
            cur.close()


def init_db():
    with get_cursor() as cur:
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS submissions (
                id SERIAL PRIMARY KEY,
                form_type TEXT NOT NULL,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                company TEXT,
                phone TEXT,
                service TEXT,
                message TEXT,
                details JSONB,
                created_at TIMESTAMPTZ NOT NULL DEFAULT now()
            );
            """
        )
