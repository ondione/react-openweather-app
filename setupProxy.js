import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function(app){
 
  app.use(
    createProxyMiddleware('/weather', {
      target:`${process.env.REACT_APP_API_OPENWEATHER}`,
      changeOrigin:true,
      pathRewrite:{
        '^/weather':""
      },
      headers:{
        Connexion:"keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api',{
      target:"http://localhost/Projectangular2/api/v1",
      changeOrigin:true,
      pathRewrite:{
        '^/api':""
      },
      headers:{
          Connexion:"keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/weatherIcon',{
      target:"",
      changeOrigin:true,
      pathRewrite:{
        '^/weatherIcon':""
      },
      headers:{
        Connexion:"keep-alive"
      }
    })
  )
};
