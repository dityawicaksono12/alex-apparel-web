import serverless from "serverless-http";

import { createServer } from "../server";

// Wrap the Express app so all /api/* routes are handled by the serverless function
const handler = serverless(createServer());

export default handler;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
