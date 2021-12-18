import { fetch } from "../utils/request";

export const fetchUserMockup = async () => {
  const { data } = await fetch({
    url: "users",
    method: "get",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT, PATCH, TRACE",
      "Access-Control-Allow-Headers":
        "Allow, Content-Encoding, Content-Length, Content-Type, ETag, Expires, Last-Modified, Location, Server, Vary",
      "Access-Control-Expose-Headers":
        "Allow, Content-Encoding, Content-Length, Content-Type, ETag, Expires, Last-Modified, Location, Server, Vary",
      "Access-Control-Max-Age": "300",
    },
  });
  return data;
};
