import { parse } from 'cookie';

export async function GET(req, res) {
  // Make a note we are on the API. This goes to the console.
  console.log("checking auth");

  // Parse cookies from the request headers
  const cookies = parse(req.headers.cookie || '');

  // Get the 'auth' cookie
  let record = cookies.auth;
  console.log(record);

  // At the end of the process, send something back.
  res.json({ "status": "" + (record ? record : 'No auth cookie') + "" });
}
