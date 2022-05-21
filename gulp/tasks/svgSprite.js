import svgSprites from 'gulp-svg-sprite';

export const svgSprite = () => {
  return app.gulp
    .src(`${app.path.src.svgIcons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <% error.message %>',
        }),
      ),
    )
    .pipe(
      svgSprites({
        mode: {
          stack: {
            sprite: '../icons/icons.svg',
            example: true,
          },
        },
      }),
    )
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};
