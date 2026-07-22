"""Standalone heartbeat: run a trivial query to keep the free Postgres
instance active. Intended to run on a schedule (Render Cron Job, every
5 minutes) as its own short-lived process."""

from database import get_cursor

if __name__ == "__main__":
    with get_cursor() as cur:
        cur.execute("SELECT 1;")
        cur.fetchone()
    print("Heartbeat OK")
