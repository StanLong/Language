package com.stanlong.scala

import scala.collection.mutable.ArrayBuffer

/**
 * 嵌套类-》类型投影
 * 类型投影主要用在有外部类和内部类，并且外部类有方法是需要传入内部类作参数的时候用的
 * 而这个传入的参数要求除了可以是自己这个对象的内部类，也可以是其他实例对象的内部类，只要都是实例化这个类就行了。
 * 格式是 Outter#Inner
 */
object Exercise01 {
    def main(args: Array[String]): Unit = {
        val arr01 = ArrayBuffer[Int](3)

        arr01.insert(1,2,3,4,5)

        for (i <- arr01){
            println(i)
        }
    }
}
