export interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export async function postJson<TPayload extends object>(
  endpoint: string,
  payload: TPayload,
  fallbackError: string,
): Promise<ApiResponse> {
  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Network error. Please check your connection and try again.");
  }

  let data: ApiResponse;
  try {
    data = (await response.json()) as ApiResponse;
  } catch {
    throw new Error(fallbackError);
  }

  if (!response.ok || data.success === false) {
    throw new Error(data.error || fallbackError);
  }

  return data;
}
