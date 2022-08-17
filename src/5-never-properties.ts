interface UserPayload {
  status: number;
  users: string[];
}

interface LocationPayload {
  status: number;
  locations: string[];
}

function handlePayload(payload: UserPayload | LocationPayload): void {
  // Show `never` use-case
  // if (payload.users) {
  //   // Show union problem with "amountOfUsers"
  //   console.log(payload.users);
  // }

  // Show type guard solution
  // if ('users' in payload) {
  //   console.log(payload.amountOfUsers);
  // }
}
