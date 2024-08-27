# object 类

## equals方法

```java
/*
  equals 方法
  == 如果两边是引用类型，则比较内存地址，地址相同返回true，反之返回false
  equals 比较两个引用的内存地址
  
  equals方法的设计目的： 判断两个对象是否一样
  
  字符串比较使用equals，String类已经重写了equals 方法.
  不能使用 == 判断字符串是否相等
*/

public class Test{
    public static void main(String[] args){
        User user1 = new User();
        User user2 = new User();
        System.out.println(user1 == user2); // false
        
        User user3 = new User("沈万三", "12346");
        User user4 = new User("沈万三", "12346");
        // 根据业务需求， 名称和id相等则判断为一个对象，因此需要重写equals方法。重写之后判断结果为true
        System.out.println(user3.equals(user4)); // true
        
    }
}

class User{
    String name;
    String id;
    
    User(){
        
    }
    
    User(String name, String id){
        this.name = name;
        this.id = id;
    }
    
    // 根据业务需求， 名称和id相等则判断为一个对象，因此需要重写equals方法
    public boolean equals(Object obj){
        
        if(this == obj){
            return true;
        }
        
        if(obj instanceof User){
            User user = (User)obj;
            if(name.equals(user.name) && (id.equals(user.id))){
                return true;
            }
        }
        
        return false;
        
    }
    
}
```

## finalize 方法

```java
/*
  finalize方法
  finalize 方法由程序自动调用
  java对象如果没有引用指向它，则该java对象成为垃圾数据。等待垃圾回收器回收。
  垃圾回收器在回收这个Java对象之前会自动调用该对象的 finalize 方法
*/

public class Test{
    public static void main(String[] args){
        Person p = new Person();
        p = null;
        // 我们只能建议垃圾回收器回收垃圾
        System.gc();
    }
}

class Person{
    public void finalize() throws Throwable{
        System.out.println(this + "马上就要被回收了");
    }
}
```

## hashcode方法

```java
/*
  hashCode
*/

public class Test{
    public static void main(String[] args){
        // hashCode 返回的是该对象的哈希码值
        // java对象的内存地址是经过哈希算法得出的int类型的数值
        Test t = new Test();
        System.out.println(t.hashCode());
    }
}
```

