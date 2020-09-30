const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
	return gulp
		.src("app/scss/styles.scss")
		.pipe(sass())
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./app/",
		},
		port: 8080,
		ui: {
			port: 8081,
		},
	});
	gulp.watch("app/scss/**/*.scss", style);
	gulp.watch("app/*.html").on("change", browserSync.reload);
	gulp.watch("app/js/**/*.js").on("change", browserSync.reload);
}

exports.default = watch;
