# uz-image-cli

一个处理图片压缩和上传图片到阿里云OSS的node命令行工具

## 安装

首先安装uz-image-cli工具包，确保你的node环境>=16.8.1

```shell
npm install uz-image-cli -g
```

## 使用

使用`uz-image -h`查看所有命令，初次使用需要配置TINIFY_KEY和阿里云OSS相关信息

- TINIFY_KEY:本工具使用了[tinypng](https://tinypng.com/)作为压缩工具，需要申请相关的key
- REGION:阿里云Bucket所在地域
- ACCESS_KEY_ID,ACCESS_KEY_SECRET:访问阿里云API的密钥
- BUCKET:OSS名称
- FILE_OSS_PATH:图片将上传到哪个路径
- OSS_PATH:OSS的访问域名，上传完图片后用于拷贝链接
  
配置完即可使用`uz-image -z -u 文件路径`进行图片压缩上传
