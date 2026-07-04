export interface ServiceRequestPayload {
  name: string;
  email: string;
  business?: string;
  service: string;
  details?: string;
  /** Honeypot field — real users never fill this in; bots often do. */
  honeypot?: string;
}

export interface ServiceRequestResponse {
  success: boolean;
  message: string;
}
