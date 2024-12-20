const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const config = require('./dbConfig.json');
bcrypt = require('bcrypt');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const options = {
  tls: true,
  serverSelectionTimeoutMS: 3000,
  autoSelectFamily: false,
};

const client = new MongoClient(url,options);
const db = client.db('startup');
const userCollection = db.collection('user');
const membersCollection = db.collection('member');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function getMembers(){
  return membersCollection.find().toArray();
}
async function getMember(name, checkedIn){
  return membersCollection.findOne({name:name});
}
async function addMember(name, checkedIn){
  const member = {
    name: name,
    checkedIn: checkedIn
  }
  return membersCollection.insertOne(member);
}
async function removeMember(name){
  const member = await membersCollection.findOne({name: name})
  membersCollection.deleteOne(member);
  return membersCollection.find().toArray();
}
async function removeAllMembers(){
  membersCollection.deleteMany({});
  return new Array();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  getMembers,
  getMember,
  addMember,
  removeMember,
  removeAllMembers,
};
