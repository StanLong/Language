# File

```java
/*
    File
    File 类和流无关，不能通过该类完成文件的读和写
    File 是文件和目录路径名的抽象表示形式
    
*/

import java.io.*;
public class Test{
    
    public static void main(String[] args) throws Exception{
        String path = "Test.java";
        
        File file = new File(path);
        System.out.println(file.getAbsolutePath()); // 获取文件的绝对路径
        System.out.println(file.getName()); // 获取文件名
        System.out.println(file.getParent()); // 获取父路径
        System.out.println(file.isDirectory()); // 判断 file 是否是个目录
        System.out.println(file.isFile()); // 判断file是否是个文件
        System.out.println(file.length()); // 获取文件的字节数
        System.out.println(file.exists()); // 查看文件或者路径是否存在

        
        String path2 = "test2";        
        File file2 = new File(path2);
        if(!file2.exists()){ // 如果路径不存在，就创建一个
            file2.mkdir(); 
        }
    }
}
```

```java
/*
    递归找出指定目录下的所有目录及文件
    
*/

import java.io.*;
public class Test{
    
    public static void main(String[] args) throws Exception{
        String path = "D:/StanLong/git_repository/Java";
        File file = new File(path);
        m1(file);
    }
    
    public static void m1(File f){
        
        if(f.isFile()){
            return;
        }
        
        File[] fs = f.listFiles();
        
        for(File subFile : fs){
            System.out.println(subFile.getAbsolutePath());
            m1(subFile);
        }
    }
}
```

