const clientSecret = process.env.REACT_APP_CLIENT_SECRET_KEY;

export const randomHash = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const hash = window.btoa(`${randomHash(10)}:${clientSecret}`);

export const basicString = `Basic ${hash}`;
