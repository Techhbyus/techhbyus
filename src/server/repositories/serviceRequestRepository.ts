import pool from "@/server/db/pool";
import type { ServiceRequestPayload } from "@/types/serviceRequest";

export async function insertServiceRequest(payload: ServiceRequestPayload): Promise<void> {
  await pool.query(
    `
    INSERT INTO service_requests
    (name, email, business, service, details)
    VALUES ($1, $2, $3, $4, $5)
    `,
    [
      payload.name,
      payload.email,
      payload.business || "",
      payload.service,
      payload.details || "",
    ]
  );
}
