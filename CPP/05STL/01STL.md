# STL

## 1.1 STL初识

STL (Standard Template Library) 标准模板库

STL 从广义上分为容器、算法、迭代器

容器和算法之间通过迭代器进行无缝连接。

## 1.2 STL 六大组件

1. 容器（vector,list…）
2. 算法（sort,find…）
3. 迭代器(扮演容器算法之间的胶合剂，所有STL容器都有自己的专属迭代器)
4. 仿函数（行为类似函数，可作为算法的某种策略）
5. 适配器（一种用来修饰容器或者仿函数或迭代器接口的东西）
6. 空间配置器（空间的配置与管理）

## 1.3 容器、算法、迭代器

**容器**

- 序列式容器（排序，如Vector,List,Deque容器）
- 关联式容器（元素在容器中并没有保存元素置入容器时的逻辑顺序）

**算法**

- 质变算法（运算过程改变区间内元素内容）
- 非质变算法（不改变，如遍历，查找）

**迭代器**

迭代器的**使用方式**类似于**指针**，如`->`和`*`等操作。

- 迭代器的种类

  | 种类           | 功能                                                     | 支持运算                               |
  | -------------- | -------------------------------------------------------- | -------------------------------------- |
  | 输入迭代器     | 对数据的只读访问                                         | 只读，支持++、==、！=                  |
  | 输出迭代器     | 对数据的只写访问                                         | 只写，支持++                           |
  | 前向迭代器     | 读写操作，可向前推进迭代器                               | 读写，支持++、==、！=                  |
  | 双向迭代器     | 读写操作，可向前和向后操作                               | 读写，支持++、–，                      |
  | 随机访问迭代器 | 读写操作，可使用跳跃的方式访问任意数据，功能最强的迭代器 | 读写，支持++、–、[n]、-n、<、<=、>、>= |

- STL不同容器的迭代器类型

  | 容器种类       | 迭代器类型         |
  | -------------- | ------------------ |
  | vector         | **随机访问**迭代器 |
  | deque          | **随机访问**迭代器 |
  | list           | **双向**迭代器     |
  | set / multiset | **双向**迭代器     |
  | map / multimap | **双向**迭代器     |
  | stack          | **不支持**迭代器   |
  | queue          | **不支持**迭代器   |
  | priority_queue | **不支持**迭代器   |

## 1.4 算法迭代器初识

-  存放内置的数据类型

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

void myPrint(int val)
{
    cout << val << endl;
}

// 容器 vector
// 存放内置的数据类型
void test01()
{
    vector<int> v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);

    // 第一种遍历方式
    // vector<int>::iterator itBegin = v.begin(); // 起始迭代器，指向容器中的第一个元素
    // vector<int>::iterator itEnd = v.end(); // 结束迭代器，指向容器中最后一个元素的下一个位置

    // while(itBegin != itEnd)
    // {
    //     cout << *itBegin << endl;
    //     itBegin++;
    // }

    // 第二种遍历方式
    // for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    // {
    //     cout << *it << endl;
    // }

    // 第三种遍历方式
    for_each(v.begin(), v.end(),myPrint);
}


int main()
{
    test01();
}
```

- 存放自定义数据类型

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

void myPrint(int val)
{
    cout << val << endl;
}
class Person
{
    public:
    string m_name;
    int m_age;
    
    Person( string name, int age)
    {
        this->m_name = name;
        this->m_age = age;
    }
};
// 容器 vector
// 自定义数据类型
void test01()
{
    vector<Person> v;

    Person p1("aaa", 10);
    Person p2("bbb", 20);
    Person p3("ccc", 30);
    Person p4("ddd", 40);

    v.push_back(p1);
    v.push_back(p2);
    v.push_back(p3);
    v.push_back(p4);

    for(vector<Person>::iterator it = v.begin(); it!=v.end(); it++)
    {
        // cout << "姓名: " <<(*it).m_name << "  年龄:" << (*it).m_age << endl; 或
        cout << "姓名: " <<it->m_name << "  年龄:" << it->m_age << endl;
    }
}

void test02()
{
    vector<Person*> v;

    Person p1("aaa", 10);
    Person p2("bbb", 20);
    Person p3("ccc", 30);
    Person p4("ddd", 40);

    v.push_back(&p1);
    v.push_back(&p2);
    v.push_back(&p3);
    v.push_back(&p4);

    for(vector<Person *>::iterator it = v.begin(); it!=v.end(); it++)
    {
        cout << "姓名: " <<(*it)->m_name << "  年龄:" << (*it)->m_age << endl; 
    }
}

int main()
{
    test01();
    test02();
}
```

## 1.5 vector 容器嵌套容器

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件


// 容器 vector
// 容器中嵌套容器，将所有数据输出
void test01()
{
    vector< vector<int>> v;

    vector<int> v1;
    vector<int> v2;
    vector<int> v3;
    vector<int> v4;

    for(int i=0; i<4; i++)
    {
        v1.push_back(i+1);
        v2.push_back(i+2);
        v3.push_back(i+3);
        v4.push_back(i+4);
    }

    v.push_back(v1);
    v.push_back(v2);
    v.push_back(v3);
    v.push_back(v4);

    for(vector<vector <int>>::iterator it=v.begin(); it!=v.end();it++)
    {
        for(vector<int>::iterator vit=(*it).begin(); vit!=(*it).end(); vit++)
        {
            cout<< *vit << " ";
        }
        cout << endl;
    }

}

int main()
{
    test01();
}
```



