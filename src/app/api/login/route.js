import { cookies } from 'next/headers'
export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')

  console.log(email);
  console.log(pass);


 

  // database call goes here

  const { MongoClient } = require('mongodb');
  const url = "mongodb+srv://adammatthewmaher:Password!!@cluster0.0y41kp6.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);
  const dbName = 'app'; // database name
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('login'); // collection name
  const findResult = await collection.find({"username":"sample@test.com"}).toArray();
    
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hash = bcrypt.hashSync(pass, saltRounds);
    
    
  console.log('Found documents =>', findResult);
  let valid = false
  if(findResult.length >0 && hashResult == true){
valid = true;
console.log("login valid")
// save a little cookie to say we are authenticated
console.log("Saving username and auth status")
cookies().set('auth', true);
cookies().set('username',email)
} else {
valid = false;
console.log("login invalid")
}

  //==========================================================




  // at the end of the process we need to send something back.
  return Response.json({ "data":"" + valid + ""})




  // at the end of the process we need to send something back.

}

