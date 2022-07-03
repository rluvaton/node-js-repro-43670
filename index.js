import { Readable } from 'stream';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

(async () => {

  // If I remove the `sleep` function or move the code below outside the IIFE async function it works
  const data = Readable.from(['a', 'b', 'c', 'd', 'a', 'e']).toArray();

  console.log({ data });
})().catch((e) => {
  console.error(e);
}).then((data) => {
  console.log(data);
})
