import { path } from "../config/path.js";

// export const copy = () => {
//     return app.gulp.src(app.path.src.files)
//     .pipe(app.gulp.dest(app.path.build.files));
// }
export const copy = () => {
    return app.gulp.src(app.path.src.css)
    .pipe(app.gulp.dest(app.path.build.css));
}
export const copySVG = () => {
    return app.gulp.src(app.path.src.svg)
    .pipe(app.gulp.dest(app.path.build.images));
}
    //.pipe(app.gulp.src(app.path.src.svg))