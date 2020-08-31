module.exports = {
    devServer: {  //server node est à l'url target
      proxy: {
        '^/api': {   
      target: 'http://localhost:3000',  
      changeOrigin: true,
      secure:false,
      pathRewrite: {
          '^/api': '' //"toutes les requêtes avec endpoint /api/xxx de localhost:8080 vont être réécrites et transférées vers "localhost:3000/"
        },
      logLevel: 'debug' 
  },
      }
    }
  };

// http:localhost:8080/api/xxx -> http://localhost:3000/xxxx
