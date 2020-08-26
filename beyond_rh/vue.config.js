module.exports = {
    devServer: {  //server node est à l'url target
      proxy: {
        'http://localhost:3000': {   
      target: 'http://localhost:3000',  
      changeOrigin: true,
      ws: true,
      secure:false,
      pathRewrite: {
          '^/api': '/api' //rewrite path
        },
      router: {
          //when request.headers.host == 'http://localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'http://localhost:3000': 'http://localhost:8080',
      },
      logLevel: 'debug' 
  },
      }
    }
  };