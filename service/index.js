const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';


// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let members = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;
// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

console.log(apiRouter)
// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  //const user = users[req.body.email];
  const user = await DB.getUser(req.body.email);
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    //const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    const user = await DB.createUser(req.body.email, req.body.password);
    // users[user.email] = user;
    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  //const user = users[req.body.email];
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      //user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  // const user = Object.values(users).find((u) => u.token === req.body.token);
  // if (user) {
  //   delete user.token;
  // }
  res.clearCookie(authCookieName);
  res.status(204).end();
});
apiRouter.get('/members', async (_req, res) => {
  const members = await DB.getMembers();
  const membersList = []

    // Assuming each member has an '_id' property as a unique key
    members.forEach(member => {
      membersList.push(member);
    });

  res.send(membersList);
});
// 
apiRouter.post('/member', async (req, res) => {
  const member = await DB.addMember(req.body.name, req.body.chechIn)
  //const member = updateMember(req.body, members);
  res.send(member);
});
apiRouter.delete('/remove', (req, res) => {
  console.log(req.body)
  const members = DB.removeMember(req.body.memberName);
  //members= members.filter((_, i) => i !== req.body.i);
  const membersList = []

    // Assuming each member has an '_id' property as a unique key
    members.forEach(member => {
      membersList.push(member);
    });
  res.send(membersList);
});
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUser(localStorage.getItem('userName'));
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});


// 
secureApiRouter.delete('/clear', (req, res) => {
  members = [];
  res.send();
});

// 
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//
function updateMember(newMember, members) {
  members = [...members, newMember]

  return members
}

