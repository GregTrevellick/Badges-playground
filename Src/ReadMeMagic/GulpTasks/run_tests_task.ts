import * as gulp from "gulp";

const run = require("gulp-run");

gulp.task("run_karma_tests", () => {
    return run("karma start ./UnitTestConfig/karma.conf.js").exec();
});