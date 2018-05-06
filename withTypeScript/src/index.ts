import * as functions from "firebase-functions";

const message = (): any => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`with async TypeScript Cloud Async Function`);
    }, 5000);
  });
};

export let helloWorldTypeScript = functions.https.onRequest(
  async (req, res) => {
    let world: string = await message();
    res.status(200).send(`Hello ${world}`);
  }
);
