import 'dotenv/config';

// package imports
import cors from 'cors'
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import SessionStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import mongoClient from './config/db.js';
import path from 'path';


// routes
import indexRoutes from './routes/indexRoutes.js';
// import categoryRoutes from './server/routes/foodRoutes.js';

mongoClient();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL, 'http://localhost:5173'],
  methods: 'GET,PUT,POST,DELETE',
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: SessionStore.create({
        mongoUrl: process.env.SESSION_STORAGE,
    }),
    cookie: {
        httpOnly: true,
    },
}));

app.use('/api/', indexRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.MODE === "production") {
  app.use(express.static(path.join(__dirname1, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "dest", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});

export default app;
