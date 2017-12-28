# 2-Page-App

## Features

|Terminal Command|Tools|Status|
|:-----------|:-------|:-------|
|**Carousel**|jquery plugin|*pending*|
|**Responsivity**|media queries|*pending*|
|**layout**|CSS Grid|*pending*|
|**Authentification**|jquery plugin|*pending*|
|**Carousel**|jquery plugin|*pending*|


## CLI commands

+ npm init
+ npm i gulp --save-dev
+ npm i gulp-concat --save-dev
+ npm i gulp-uglify --save-dev
+ npm i gulp-rename --save-dev
+ npm i gulp-sourcemaps --save-dev
+ npm i gulp-sass --save-dev
+ npm i del --save-dev
+ npm i gulp-util --save-dev

## additions

+ touch gulpfile.js

---
Privilege a single "app.js" file script-linked in your html
```html
    <script src="./build/app.js"></script>
```
---
##### *gulpfile.js test*

```js
"use strict";

var gulp = require('gulp');

gulp.task("Hello", function() {
  console.log("Hello Funk");
})
```
-run "gulp Hello"

---

**gulp default** has any number of params in an Array that will call other tasks in turn.

```js
gulp.task("default",["Hello"], function() {
  console.log("Ran 'Hello' having fired default");
})
```

--run "gulp" *this will fire the *default**

---
### Of course, these can be es6-ified:
```js
"use strict";
var gulp = require('gulp');

gulp.task("faces", () => console.log("🤓 😭 🤣 😲"))

gulp.task("default",["faces"], () =>
  console.log("Ran 'FACES' having fired default")
);
```
---
### gulp-concat tasks

Note: Gulp is smart enough *NOT* to concat javascript that won't run as a single file. Syntax error-ridden js will not compile.

```js
gulp.task('concatScripts', () =>
  gulp.src(['js/jquery-3.2.1.min.js',
  'js/firstJS.js',
  'js/secondJS.js',
  'js/thirdJS.js'])
  .pipe(concat('app.js'))
  //takes str that will create name for newly concatted file
  .pipe(gulp.dest('./build'))
);
```

---
## uglification:

gulpfile.js
```js
gulp.task('minifyScripts', () =>
  gulp.src('build/app.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./build')
    )
  )
```

---

## enter SASS

** (using sass and sourcemaps) **

gulpfile.js
```js
gulp.task('compileSass', () =>
  gulp.src('scss/master.scss')
      .pipe(maps.init())
      .pipe(sass())
      .pipe(rename('styles.css'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('./build/css')
    )
  )
```

---
## build task

One big problem with this:

*gulp.task("build", ["concatScripts",'minifyScripts','compileSass']);*

gulp runs them concurrently...

We must, therefore, run them serially.
+ add concatScripts as a dependency of minifyScripts
```diff
- gulp.task('minifyScripts', () =>
+ gulp.task('minifyScripts', ["concatScripts"], () =>

```
+ we are certain, in our arrow, functions that concatScripts explicitly returns what it's creating

+ with concat as a dependency of minify, we can remove concat from the build task
```diff
- gulp.task("build", ['concatScripts', 'minifyScripts','compileSass']);
+ gulp.task("build", ['minifyScripts','compileSass']);
```

## Implementing *Watch* & *globbing*

Simply add a new task & call it watch
```js
gulp.task('watchSass', () =>
  gulp.watch(["scss/**/*.scss"], ["compileSass"])
)
```


|First Argument|Second Argument|
|:-----------|:-------|
|"**" -- look for any folder|task to run when change detected|


## Production-ready files piped to 'dist' folder
```js
gulp.task("build", ['minifyScripts', 'compileSass'], () =>
  gulp.src(
    [
      'build/css/styles.css',
      'build/js/app.min.js',
      'index.html',
      'img/**'
    ],
    { base: './' } // this creates directory structure within 'dist' folder
  )
    .pipe(gulp.dest('dist'))
);
```


## Cleaning your folders/files when rebuilding
Both folders contain "gulped" files & are deleted.
This is to be put in the default task to be performed upon each default "gulp" call.
```js
gulp.task('clean', () =>
  del(['dist', 'build']),
  console.log("Deleting 'dest' and 'dist' folders")
)
```

### The default gulp task
```js
gulp.task("default", ["clean"], () =>
  gulp.start("build")
);
```

## The final file
```js
"use strict";
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename"),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del');

gulp.task('concatScripts', () =>
  gulp.src(['js/jquery-3.2.1.min.js',
    'js/firstJS.js',
    'js/secondJS.js',
    'js/thirdJS.js'])
    .pipe(concat('app.js')) //takes str that will name concatted file
    .pipe(gulp.dest('./build/js'))
);

gulp.task('minifyScripts', ["concatScripts"], () =>
  gulp.src('build/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./build/js')
    )
)

gulp.task('compileSass', () =>
  gulp.src('scss/master.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./build/css')
    )
)

gulp.task('watchSass', () =>
  gulp.watch(["scss/**/*.scss"], ["compileSass"])
  // "**" -- look for any folder
  // "*.scss" -- watch any SASS file
)

gulp.task('clean', () =>
  del(['dist', 'build']),
  console.log("Deleting 'dest' and 'dist' folders")
)

gulp.task("build", ['minifyScripts', 'compileSass'], () =>
  gulp.src(
    [
      'build/css/styles.css',
      'build/js/app.min.js',
      'index.html',
      'img/**'
    ],
    { base: './' } // this creates directory structure within 'dist' folder
  )
    .pipe(gulp.dest('dist'))
);

gulp.task("default", ["clean"], () =>
  gulp.start("build")
);
```

<div style="background: slategrey; border: 2px solid coral"><h3 style="color: wheat">Nota Bene:</h3>
<p style="color: white">take note of file directory in the dist folder's refs to css & js</p>

```html
<link rel="stylesheet" href="./build/css/styles.css">
<script src="./build/js/app.min.js"></script>
```
</div>