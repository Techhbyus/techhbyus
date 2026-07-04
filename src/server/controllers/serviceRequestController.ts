import type { NextRequest } from "next/server";
import { serviceRequestService } from "@/server/services/serviceRequestService";
import { ValidationError } from "@/server/helpers/errors";
import { successResponse, errorResponse } from "@/server/helpers/apiResponse";
import type { ServiceRequestPayload } from "@/types/serviceRequest";

export async function handleServiceRequestSubmission(req: NextRequest) {
  const body = (await req.json()) as Partial<ServiceRequestPayload>;

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
