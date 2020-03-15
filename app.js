var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var nutrition_add_form = require('./routes/nutrition_add_form');
var nutrition_add = require('./routes/nutrition_add');
var nutrition_remove_form = require('./routes/nutrition_remove_form');
var nutrition_remove = require('./routes/nutrition_remove');
var nutrition_edit_no = require('./routes/nutrition_edit_no');
var nutrition_edit_form = require('./routes/nutrition_edit_form');
var nutrition_edit = require('./routes/nutrition_edit');

var activ_add_form = require('./routes/activ_add_form');
var activ_add = require('./routes/activ_add');
var activ_remove_form = require('./routes/activ_remove_form');
var activ_remove = require('./routes/activ_remove');
var activ_edit_no = require('./routes/activ_edit_no');
var activ_edit_form = require('./routes/activ_edit_form');
var activ_edit = require('./routes/activ_edit');

var aboutus_edit_no = require('./routes/aboutus_edit_no');
var aboutus_edit_form = require('./routes/aboutus_edit_form');
var aboutus_edit = require('./routes/aboutus_edit');

var recipe_add_form = require('./routes/recipe_add_form');
var recipe_add = require('./routes/recipe_add');
var recipe_remove_form = require('./routes/recipe_remove_form');
var recipe_remove = require('./routes/recipe_remove');
var recipe_edit_no = require('./routes/recipe_edit_no');
var recipe_edit_form = require('./routes/recipe_edit_form');
var recipe_edit = require('./routes/recipe_edit');

var userrecipe_add_form = require('./routes/userrecipe_add_form');
var userrecipe_add = require('./routes/userrecipe_add');
var userrecipe_remove_form = require('./routes/userrecipe_remove_form');
var userrecipe_remove = require('./routes/userrecipe_remove');
var userrecipe_edit_no = require('./routes/userrecipe_edit_no');
var userrecipe_edit_form = require('./routes/userrecipe_edit_form');
var userrecipe_edit = require('./routes/userrecipe_edit');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/nutrition/add/form', nutrition_add_form);
app.use('/nutrition/add', nutrition_add);
app.use('/nutrition/remove/form', nutrition_remove_form);
app.use('/nutrition/remove', nutrition_remove);
app.use('/nutrition/edit/no', nutrition_edit_no);
app.use('/nutrition/edit/form', nutrition_edit_form);
app.use('/nutrition/edit', nutrition_edit);

app.use('/activ/add/form', activ_add_form);
app.use('/activ/add', activ_add);
app.use('/activ/remove/form', activ_remove_form);
app.use('/activ/remove', activ_remove);
app.use('/activ/edit/no', activ_edit_no);
app.use('/activ/edit/form', activ_edit_form);
app.use('/activ/edit', activ_edit);

app.use('/aboutus/edit/no', aboutus_edit_no);
app.use('/aboutus/edit/form', aboutus_edit_form);
app.use('/aboutus/edit', aboutus_edit);

app.use('/recipe/add/form', recipe_add_form);
app.use('/recipe/add', recipe_add);
app.use('/recipe/remove/form', recipe_remove_form);
app.use('/recipe/remove', recipe_remove);
app.use('/recipe/edit/no', recipe_edit_no);
app.use('/recipe/edit/form', recipe_edit_form);
app.use('/recipe/edit', recipe_edit);

app.use('/userrecipe/add/form', userrecipe_add_form);
app.use('/userrecipe/add', userrecipe_add);
app.use('/userrecipe/remove/form', userrecipe_remove_form);
app.use('/userrecipe/remove', userrecipe_remove);
app.use('/userrecipe/edit/no', userrecipe_edit_no);
app.use('/userrecipe/edit/form', userrecipe_edit_form);
app.use('/userrecipe/edit', userrecipe_edit);

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
