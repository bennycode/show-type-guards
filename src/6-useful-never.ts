interface StreamResponse {
  status: StreamStatus;
}

enum StreamStatus {
  ONLINE,
  OFFLINE,
}

function handleResponse(response: StreamResponse): void {
  switch (response.status) {
    case StreamStatus.ONLINE:
      console.log('You are online.');
      break;
    case StreamStatus.OFFLINE:
      console.log('You are offline.');
      break;
    default:
      // Inspect "response.status"
      const status: never = response.status;
      throw new Error(`Unknown status "${status}"!`);
  }
}
