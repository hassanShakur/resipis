import { TIMEOUT_SECS } from '../config/config';

const requestTimeout = (secs) =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(
          `Request took too long! Timeout after ${secs} seconds`
        )
      );
    }, secs * 1000);
  });

const FetchRecipes = async (url) => {
  try {
    const res = await Promise.race([
      fetch(url),
      requestTimeout(TIMEOUT_SECS),
    ]);
    const data = await res.json();

    if (!res.ok) {
      // console.log(res);
      //status, statusText
      throw new Error(res);
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export default FetchRecipes;
