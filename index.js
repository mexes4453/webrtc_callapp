
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.cfg");
const http = require("http");
const server = http.createServer(app);
const { initMeetingServer } = require("./meeting-server");

initMeetingServer(server);


mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then( () => {
        console.log("Database Connected");
    })
    .catch( (error) => {
        console.log("Database connection failed");
        console.log(error.message);
        process.exit(1);
    }
);

app.use(express.json());
app.use("/api", require("./routes/app.routes"));

server.listen(process.env.port || 4000, function (){
    console.log("Ready!");
});


/* part 2 */
/* https://www.youtube.com/watch?v=Jr2-pN7UPsg&t=3220s */