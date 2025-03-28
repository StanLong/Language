# 特质trait

## 基本概念和用法

Scala语言中，采用特质trait（特征）来代替接口的概念，也就是说，多个类具有相同的特质（特征）时，就可以将这个特质（特征）独立出来，采用关键字trait声明。 可以理解trait 等价于(interface + abstract class)。

Scala中的特质（trait）和Java中的接口（interface）在概念和使用上有一些区别：

- 默认实现：在Java中，接口只能定义方法的签名，而没有默认实现。而在Scala的特质中，除了可以定义方法签名外，还可以定义方法的具体实现。这样，在混入（mix in）特质的类中，可以直接使用特质中定义的方法的默认实现。
- 多重继承：在Java中，类只能单继承，但是可以实现多个接口。而在Scala中，一个类可以混入多个特质，实现了多重继承的效果。这使得Scala的特质更加灵活，并且可以解决多继承带来的冲突问题。
- 字段的定义：特质和接口都可以定义字段，但在Scala特质中，字段可以包含具体的初始值。而在Java接口中，字段只能是常量（即静态final字段）。
- 构造函数：特质和接口都不能直接定义构造函数。在Java中，接口不能有构造函数，而在Scala中，特质也不能有显式的构造函数。不过，特质可以定义具有参数的抽象方法，相当于定义了一个需要传递参数的构造函数。
- 特质的线性化：Scala中的特质具有线性化（linearization）的特性，这意味着特质中的方法调用将按照线性化顺序进行解析。这种特性使得特质更加灵活和可控。

```scala
package com.stanlong.scala

/**
 * 特质
 */
object HelloScala {
    def main(args: Array[String]): Unit = {
        val student = new Student
        student.sayHello()
        student.study()
        student.dating()
        student.play()

    }
}

// 定义父类
class Person{
    val name: String ="person"
    val age: Int = 18

    def sayHello(): Unit ={
        println("hello from: " + name)
    }
}

// 定义一个特质
trait Young{
    // 声明抽象和非抽象属性
    val age: Int
    val name:String="young"

    // 声明抽象和非抽象方法
    def dating():Unit
    
    def play(): Unit ={
        println("young people is playing")
    }
}

class Student extends Person with Young{
    // 重写冲突的属性
    override val name: String = "student"

    // 实现抽象方法
    override def dating(): Unit = {
        println(s"student $name is dating")
    }

    def study(): Unit ={
        println(s"student $name is studying")
    }

    // 重写父类方法
    override def sayHello(): Unit = {
        super.sayHello()
        println(s"hello from:student $name")
    }
}

// 打印结果
hello from: student
hello from:student student
student student is studying
student student is dating
young people is playing
```

## 特质混入

```scala
package com.stanlong.scala

/**
 * 特质混入
 * 优点: 在不修改类声明/定义的情况下，扩展类的功能
 */
object HelloScala {

    def main(args: Array[String]): Unit = {

        val oracleDB = new OracleDB with Operate {
            override def update(id: Int): Unit = { // 重写特质中的抽象方法，又叫动态混入
                println(s"修改 oracle 记录id : $id")
            }
        }
        oracleDB.getPrice(10000.00) 
        oracleDB.insert(100)
        oracleDB.update(100)

        val hanaDB = new HanaDB with  Operate {
            override def update(id: Int): Unit = {  // 重写特质中的抽象方法，又叫动态混入
                println(s"修改 hana 记录 : $id")
            }

            override def say(): Unit = { // 抽象类混入特质时，需要实现抽象类中的抽象方法
                println("这是Hana数据库")
            }

        }
        hanaDB.insert(200)
        hanaDB.update(200)
        hanaDB.say()
    }
}

class DB {
    var name:String = _
    def getPrice(price: Double): Unit ={
        println(s"数据库的价格 : $price")
    }

}

trait Operate{

    def insert(id: Int): Unit ={
        println("插入数据 " + id)
    }

    // 抽象方法
    def update(id: Int): Unit
}

class OracleDB extends DB {

}


abstract class HanaDB{
    def say()
}
```

## 特质叠加

构建对象的同时如果混入多个特质，称之为叠加特质，叠加特质声明顺序从左到右，方法执行顺序从右到左

```scala
package com.stanlong.scala

/**
 * 特质叠加
 * 叠加特质声明顺序从左到右，方法执行顺序从右到左
 */
object HelloScala {

    def main(args: Array[String]): Unit = {
        // 叠加特质声明顺序从左到右

        val mysql = new MySQL with DB with File // 先混入DB,在混入File
        // 打印结果
        /**
         * 1. Data
         * 2. DB
         * 3. File
         */

        val mysql1 = new MySQL with File with DB // 先混入File,在混入DB
        // 打印结果
        /**
         * 1. Data
         * 3. File
         * 2. DB
         */

        // Scala中特质中如果调用super，默认时从右向做查找特这，如果找不到，才会去父特质查找。如果想要直接调用指定类的特质，需要这么写 super[类名].方法

        mysql.insert(888)
        // 打印结果
        /**
         * 3. 向文件
         * 2 .向数据库
         * 1. 插入数据 = 888
         */

        mysql1.insert(888)
        // 打印结果
        /**
         * 2 .向数据库
         * 3. 向文件
         * 1. 插入数据 = 888
         */

    }
}

trait Operate {
    def insert(id : Int)
}
trait Data extends Operate {
    println("1. Data")
    override  def insert(id : Int): Unit = {
        println("1. 插入数据 = " + id)
    }
}
trait DB extends Data {
    println("2. DB")
    override def insert(id : Int): Unit = {
        println("2 .向数据库")
        super.insert(id)
    }
}
trait File extends  Data {
    println("3. File")
    override def insert(id : Int): Unit = {
        println("3. 向文件")
        super.insert(id)
        // super[Dta].insert(id)  直接调用父类的 insert 方法
    }
}
class MySQL {

}
```

## 自身类型

自身类型可实现依赖注入的功能

```scala
package com.stanlong.scala

/**
 * 自身类型
 * 实现依赖注入的功能
 */
object HelloScala {

    def main(args: Array[String]): Unit = {
        val user = new RegisterUser("zhangsan", "123456")
        user.insert()
    }
}

// 用户类
class User(val name: String, val password: String)


trait UserDao{
    // UserDao 想要使用 User 里的属性，但是不想有继承关系，就可以把 User 定义为自身类型
    _: User =>

    def insert(): Unit ={
        println(s"insert into db: ${this.name} ${this.password}") // 使用 this.属性 的方式访问自身类型
    }
}

// 定义注册用户类
class RegisterUser(name: String, password: String) extends User(name, password) with UserDao
```









