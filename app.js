const createError = require('http-errors');
const express = require('express');
const { sessionSecret } = require('./config');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { restoreUser } = require('./auth');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const questionRouter = require('./routes/question');
const answerRouter = require('./routes/answer');
const commentRouter = require('./routes/comment');
const categoryRouter = require('./routes/category');
const searchRouter = require('./routes/search');
const likeRouter = require('./routes/like');
const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();
app.use(restoreUser);
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/questions', questionRouter);
app.use('/answers', answerRouter);
app.use('/comments', commentRouter);
app.use('/categories', categoryRouter);
app.use('/search', searchRouter);
app.use('/likes', likeRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// test test test
module.exports = app;
