module.exports = {
    devServer: {  //server node est à l'url target
      proxy: {
        '^/': {   
      target: 'http://localhost:3000',  
      changeOrigin: true,
      secure:false,
      pathRewrite: {
          '^/': '/' //"toutes les requêtes avec endpoint ^/contact de localhost:8080 vont être réécrites et transférées vers "localhost:3000/contact"
        },
      logLevel: 'debug' 
  },
      }
    }
  };