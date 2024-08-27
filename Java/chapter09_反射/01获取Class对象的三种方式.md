# 反射

## 反射机制

1.反射机制中主要掌握的类

```
java.lang.Class;//代表这个类或对象
java.lang.reflect.Constructor;//代表构造方法
java.lang.reflect.Field;//代表属性
java.lang.reflect.Method;//代表方法
java.lang.reflect.Modifier;//代表修饰符
```

2.反射主要是指程序可以访问，检测和修改他本身的状态或者形容为的一种能力，并根据自身行为的状态和结果，调整或者修改应用所描述行为的状态和相关的语义。

3.功能：

（1）反编译 .class -->.java
（2）通过反射机制访问java对象的属性，方法，构造方法等。

我们先写一个基础类

```java
public class Employee {
  
  private String name;
  
  public Employee(){
    
  }
  public Employee(String name) {
    this.name = name;
  }
  public void work() {
    System.out.println(name+"在工作！");
  }
}
```

```java
/*
    反射
    获取Class对象的三种方式
*/
import java.util.Date;
public class Test{
    
    public static void main(String[] args) throws Exception{
        //获取Class类型对象的三种方式
        //第一种方式
        Class c1 = Class.forName("Employee");
        //c1引用保存内存地址指向堆中对象，该对象代表的是 Employee 整个类
        
        //第二种方式
        //java中每个类型class属性
        Class c2 = Employee.class;
        
        //第三种方法
        //java语言中任何一个java对象都有getClass方法
        Employee d = new Employee();
        Class c3 = d.getClass();//c3是运行时类（d的运行时类是 Employee
        
        //c4代表Date这个类
        Class c4 = Date.class;
        Class c5 = Class.forName("java.util.Date");//必须写类的全名，类全名带有包名
        Date d1 = new Date();
        Class c6 = d1.getClass();
    }
}
```

## 通过反射机制获取对象

修改 Employee 类

```java
public class Employee {
  
  static {
    System.out.println("A.....");
  }
  
  private String name;
  
  public Employee(){
    System.out.println("我是一个无参数构造方法");
  }
  
  public Employee(String name) {
    this.name = name;
  }
  public void work() {
    System.out.println(name+"在工作！");
  }
}
```

```java
/*
    反射
    通过反射机制来获取对象
*/
public class Test{
    
    public static void main(String[] args) throws Exception{
        //不会执行静态语句块
        Class c = Employee.class;
        System.out.println("=====");
        //下面的语句会执行静态语句块和无参构造方法
        Employee a = new Employee(); 
        Class c2 = a.getClass();
        
        //获取Class类型的对象之后，可以创建该“类”的对象
        Object o = c.newInstance();//调用了 Employee 的无参数构造方法和静态语句块
        
        System.out.println(o.toString());
    }
}
```

