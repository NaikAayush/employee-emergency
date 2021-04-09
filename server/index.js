const express = require("express");
const axios = require("axios");
const WebSocket = require("ws");
const url = require('url');
// const {v4: uuidv4} = require("uuid");

// const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./orange-ey-gds-firebase.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://orange-ey-gds-default-rtdb.firebaseio.com/"
})
// const db = admin.firestore();
// const storage = admin.storage();
// const bucket = storage.bucket();
const db = admin.database()

const app = express();
const cors = require("cors");
app.use(cors({origin: true}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

// exports.api = functions.https.onRequest(app);

const wss1 = new WebSocket.Server({noServer: true});
const wss2 = new WebSocket.Server({noServer: true});
const db_root = "test/"
const db_child = "/location"

// Listens for realtime updates and updates DB
wss1.on("connection", function (ws, request) {
  let firstMsg = true

  const query = new URL(request.url, "ws://localhost/").searchParams;
  console.log("query", query)

  const id_ = query.get("id")

  console.log("id", id_)

  if (id_ === null || id_ === undefined) {
    ws.send("Could not find id in request parameters")
    ws.close()
  }

  ws.send("let's goooo " + id_)

  const ref = db.ref(db_root + id_ + db_child);

  ws.on("message", function (data) {
    try {
      let dataObj = JSON.parse(data)
      ref.set(dataObj)
      ws.send(`Got data: ${JSON.stringify(dataObj)}, firstMsg: ${firstMsg}, id_: ${id_}`)
    } catch (error) {
      ws.send("Error: " + error)
    }

  })
});


wss2.on("connection", function (ws, request) {
  const query = new URL(request.url, "ws://localhost/").searchParams;
  console.log("query", query)

  const id_ = query.get("id")
  console.log("id", id_)

  if (id_ === null || id_ === undefined) {
    ws.send("Could not find id in request parameters")
    ws.close()
  }

  ws.send("let's goooo " + id_)

  const ref = db.ref(db_root + id_ + db_child)

  ref.on("value", (snapshot) => {
    const data = snapshot.val();
    ws.send(JSON.stringify(data))
  })
});


const server = app.listen(5050)
server.on('upgrade', function upgrade(request, socket, head) {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/update') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } else if (pathname === '/listen') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

