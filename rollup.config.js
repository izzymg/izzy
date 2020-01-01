import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    file: "build/bundle/bundle.js",
    format: "cjs",
  },
  plugins: [
    // Only livereload & serve when watching
    !production && livereload(),
    !production && serve("build"),
  ],
};