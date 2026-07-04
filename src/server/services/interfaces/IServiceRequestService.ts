import type { ServiceRequestPayload } from "@/types/serviceRequest";

export interface IServiceRequestService {
  submit(body: Partial<ServiceRequestPayload>): Promise<void>;
}
