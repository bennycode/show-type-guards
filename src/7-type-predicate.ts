import axios, {AxiosError} from 'axios';

// Runtime check that guarantees the type in a specific scope
const isAxiosError = (error: unknown): error is AxiosError => {
  if (error && typeof error === 'object') {
    return 'isAxiosError' in error;
  }
  return false;
};

(async () => {
  try {
    await axios.get('https://www.typescriptlang.org/not-found');
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // Show properties using "IntelliSense"
      console.error(`Failed with HTTP status "${error.response?.status}".`);
    }
  }
})();
