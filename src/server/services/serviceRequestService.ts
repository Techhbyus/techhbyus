import { insertServiceRequest } from "@/server/repositories/serviceRequestRepository";
import { ValidationError } from "@/server/helpers/errors";
import type { ServiceRequestPayload } from "@/types/serviceRequest";
import type { IServiceRequestService } from "./interfaces/IServiceRequestService";

class ServiceRequestService implements IServiceRequestService {
  async submit(body: Partial<ServiceRequestPayload>): Promise<void> {
    if (!body.name || !body.email || !body.service) {
      throw new ValidationError("Required fields are missing");
    }

    const payload: ServiceRequestPayload = {
      name: body.name,
      email: body.email,
      business: body.business || "",
      service: body.service,
      details: body.details || "",
    };

    await insertServiceRequest(payload);
  }
}

export const serviceRequestService = new ServiceRequestService();
