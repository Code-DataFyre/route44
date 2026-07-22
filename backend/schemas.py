from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, EmailStr

FormType = Literal["quote_request", "home_lead", "freight_intake"]


class SubmissionCreate(BaseModel):
    form_type: FormType
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: Optional[str] = None
    details: Optional[dict] = None


class SubmissionOut(BaseModel):
    id: int
    form_type: str
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: Optional[str] = None
    details: Optional[dict] = None
    created_at: datetime
