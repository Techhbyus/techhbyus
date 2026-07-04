import { insertServiceRequest } from "@/server/repositories/serviceRequestRepository";
import { ValidationError } from "@/server/helpers/errors";
import type { ServiceRequestPayload } from "@/types/serviceRequest";
import type { IServiceRequestService } from "./interfaces/IServiceRequestService";

const MAX_LENGTHS = {
  name: 100,
  email: 190,
  business: 150,
  service: 100,
  details: 2000,
} as const;

class ServiceRequestService implements IServiceRequestService {
  async submit(body: Partial<ServiceRequestPayload>): Promise<void> {
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const business = (body.business ?? "").trim();
    const details = (body.details ?? "").trim();

    if (!name || !email || !service) {
      throw new ValidationError("Required fields are missing");
    }

    if (
      name.length > MAX_LENGTHS.name ||
      email.length > MAX_LENGTHS.email ||
      business.length > MAX_LENGTHS.business ||
      service.length > MAX_LENGTHS.service ||
      details.length > MAX_LENGTHS.details
    ) {
      throw new ValidationError("One or more fields are too long");
    }

    const payload: ServiceRequestPayload = { name, email, business, service, details };

    await insertServiceRequest(payload);
  }
}

export const serviceRequestService = new ServiceRequestService();
