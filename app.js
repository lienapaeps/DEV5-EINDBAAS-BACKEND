const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
// const passport = require('./passport/passport');
const config = require('config');
const getRawBody = require('raw-body')
const bodyParser = require('body-parser')

// routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const donutsRouter = require('./routes/donuts');

// mongoose connection
mongoose.connect(config.get("Database.connectionString"));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// app.use(express.bodyParser({limit: '2mb'}));
// app.use(express.limit('4M'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// api routes
app.use('/', indexRouter)
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/donuts', donutsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
