module.exports =
  {
    files: ["./dist/**"],
    port: 80,
    host: "alpha.lgbt",
    server: {
      baseDir: ["./src/"],
      routes: {
        "/node_modules": "./node_modules"
      },
      directory: true
    },
    browser: "chrome",
    open: "external"
  }
