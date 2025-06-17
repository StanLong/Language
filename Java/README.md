# Java
Java从入门到入土



# jar

使用jar命令直接修改jar包中的配置文件

```shell
-- 列出jar下所有目录及目录下文件
jar tf test.jar

-- 取出jar包中的指定文件
jar xf test.jar BOOT-INF/classes/application.yml
-- 取出来的文件会放在当前路径的BOOT-INF/classes下

#更新配置文件application.yml到test.jar包内
jar uf test.jar BOOT-INF/classes/application.yml

-t #列出归档目录 
-x #从档案中提取指定的 (或所有) 文件 
-u #更新现有的归档文件 
-f #指定归档文件名 
```

