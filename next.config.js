module.exports = {
  env: {
    customKey: "my-value"
  },

  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],

  exportTrailingslash: true,

  //Ejemplo para produccion, para subir en servidor apache (config de rutas).
  exportPathMap: function() {
    const paths = {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/registro": { page: "/registro" },
      "/about": { page: "/about" }
    };

    return paths;
  }
};
