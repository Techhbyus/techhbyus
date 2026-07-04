import type { NextRequest } from "next/server";
import { serviceRequestService } from "@/server/services/serviceRequestService";
import { ValidationError } from "@/server/helpers/errors";
import { successResponse, errorResponse } from "@/server/helpers/apiResponse";
import { isRateLimited } from "@/server/helpers/rateLimiter";
import type { ServiceRequestPayload } from "@/types/serviceRequest";

export async function handleServiceRequestSubmission(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return errorResponse("Too many requests. Please try again in a few minutes.", 429);
  }

  const body = (await req.json()) as Partial<ServiceRequestPayload>;

  if (body.honeypot) {
    return successResponse("Request submitted successfully");
  }

  try {
    await serviceRequestService.submit(body);
    return successResponse("Request submitted successfully");
  } catch (error) {
    if (error instanceof ValidationError) {
      return errorResponse(error.message, 400);
    }

    console.error("DATABASE ERROR:", error);
    return errorResponse("Something went wrong", 500);
  }
}
