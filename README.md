# temp_express
## 一、项目结构

├─ bin            bin目录    
│  ├─ www	        项目入口文件    
├─ db    
│  ├─ dbConfig    数据库连接配置    
├─ log		        日志文件    
├─ public		      静态资源    
├─ routes	        路由配置    
├─ services	      业务处理    
├─ utils	        公用方法、工具    
│  ├─ constant    常量定义    
│  ├─ jwt         tokne验证    
│  ├─ logger      日志相关操作    
│  ├─ md5         md5加密解密    
│  ├─ query       sql查询封装    
├─ views	        页面    
├─ app.js	        express 入口    
├─ .eslintrc.js	  eslint 配置    
├─ package.json	  项目依赖包配置    
├─ README.md	    项目说明    

## 二、项目说明
Node、Express、MySQL项目模板

## 三、依赖包说明
- 代码检测和格式化：eslint、eslint-config-prettier、eslint-plugin-prettier、prettier-eslint
- 日志记录：morgan
- token解析与验证：express-jwt、jsonwebtoken
- 请求数据校验：express-validator