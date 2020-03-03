const { watch, series, src, dest } = require('gulp');
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const minifyCSS = require('gulp-csso')
 
function css() {
	return src('less/index.less')
		.pipe(less())
      .pipe(postcss([autoprefixer()]))
		.pipe(gcmq())
//		.pipe(minifyCSS())
		.pipe(dest('css'))
};

exports.css = css;

exports.default = function() {
	watch('less/*.less', css)
};


