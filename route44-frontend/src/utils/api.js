/**
 * Backend API client
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

/**
 * Submit a form payload to the backend.
 * @param {{form_type: string, name: string, email: string, company?: string, phone?: string, service?: string, message?: string, details?: object}} payload
 */
export async function submitForm(payload) {
  const response = await fetch(`${API_BASE_URL}/api/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.detail ? JSON.stringify(body.detail) : "Failed to submit form");
  }

  return response.json();
}
