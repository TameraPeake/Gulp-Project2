var gulp   = require('gulp');
var deploy = require("gulp-gh-pages");

var options = {
    remoteUrl: "https://github.com/TameraPeake/Gulp-Project2.git",
    branch: "master"};
gulp.task('deploy', function () {
    gulp.src("./dist/helloworld1.html")
        .pipe(deploy(options));
});


/*
[21:20:45] Error: Command failed: git push --set-upstream origin master
Logon failed, use ctrl+c to cancel basic credential prompt.
*/
