/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  buildWhatsAppDirectUrl,
  formatWhatsAppMessage,
  validateBookingForm,
} from '../services/businessService';
import { BookingRequest, BookingValidationResult } from '../types';

export interface BookingSubmissionOutcome {
  success: boolean;
  errors?: Record<string, string>;
  whatsAppUrl?: string;
  formattedMessage?: string;
}

export function handleBookingSubmission(
  request: BookingRequest
): BookingSubmissionOutcome {
  const validation: BookingValidationResult = validateBookingForm(request);

  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  const message = formatWhatsAppMessage(request);
  const whatsAppUrl = buildWhatsAppDirectUrl(message);

  return {
    success: true,
    whatsAppUrl,
    formattedMessage: message,
  };
}
