import serverModule from "../dist/server/index.js";

const server = serverModule.default ?? serverModule;

export default async function handler(request, response) {
  const origin = `https://${request.headers.host}`;
  const url = new URL(request.url, origin);
  const fetchRequest = new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? null : request,
  });

  const fetchResponse = await server.fetch(fetchRequest);

  response.statusCode = fetchResponse.status;
  fetchResponse.headers.forEach((value, key) => response.setHeader(key, value));

  const body = await fetchResponse.arrayBuffer();
  response.end(Buffer.from(body));
}
