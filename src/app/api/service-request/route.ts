import type { NextRequest } from "next/server";
import { handleServiceRequestSubmission } from "@/server/controllers/serviceRequestController";

export async function POST(req: NextRequest) {
  return handleServiceRequestSubmission(req);
}