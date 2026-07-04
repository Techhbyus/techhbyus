export interface ServiceRequestPayload {
  name: string;
  email: string;
  business?: string;
  service: string;
  details?: string;
}

export interface ServiceRequestResponse {
  success: boolean;
  message: string;
}
