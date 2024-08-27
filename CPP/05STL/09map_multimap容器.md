# map/multimap容器

## 1 基本概念

**简介：**

- **map中所有元素都是pair，数据成对出现**
- **pair中第一个元素为key（键值），起到索引作用，第二个元素为value（实值）**
- 所有元素都会根据元素的键值自动排序

**本质：**

- map/multimap属于**关联式容器**，底层结构是用二叉树实现。

**优点：**

- 可以根据key值快速找到value值


map与multimap使用方法一致，但是map和multimap也有**区别**：

- **map不允许容器中有重复key值元素,但是value值可以重复**
- **multimap允许容器中有重复key值元素，也允许value值重复**

map/multimap容器的迭代器也不支持随机访问

## 2 构造和赋值

**函数原型：**

**构造：**

- `map mp;` //map默认构造函数:
- `map(const map &mp);` //拷贝构造函数

**赋值：**

- `map& operator=(const map &mp);` //重载等号操作符

```cpp
#include<iostream>
using namespace std;
#include <string>
#include <map>

void printMap(map<int, int> &m)
{
	for(map<int, int>::iterator it = m.begin(); it != m.end(); it++)
	{
		cout << "key=" << it->first << " value=" << it->second << endl; 
	}
}


void test01()
{
	// 默认构造
	map<int, int> m1;
	m1.insert(pair<int, int>(1, 10));
	m1.insert(pair<int, int>(3, 30));
	m1.insert(pair<int, int>(2, 20));
	m1.insert(pair<int, int>(4, 40));
	printMap(m1); // 默认按key升序排序

	// 拷贝构造
	map<int, int> m2(m1);
	printMap(m2);

	// 赋值
	map<int, int> m3;
	m3 = m2;
	printMap(m3);
}

int main() 
{
	test01();
}
```

## 3 大小和交换

函数原型：

- `size();` //返回容器中元素的数目
- `empty();` //判断容器是否为空
- `swap(st);` //交换两个集合容器

```cpp
#include<iostream>
using namespace std;
#include <string>
#include <map>

void printMap(map<int, int> &m)
{
	for(map<int, int>::iterator it = m.begin(); it != m.end(); it++)
	{
		cout << "key=" << it->first << " value=" << it->second << endl; 
	}
}


void test01()
{
	// 默认构造
	map<int, int> m1;
	m1.insert(pair<int, int>(1, 10));
	m1.insert(pair<int, int>(3, 30));
	m1.insert(pair<int, int>(2, 20));
	m1.insert(pair<int, int>(4, 40));
	
	if(m1.empty())
	{
		cout << "map是空的" << endl;
	}
	else
	{
		cout << "map的大小是" << m1.size() << endl;
	}

	map<int, int> m2;
	m2.insert(pair<int, int>(10, 100));
	m2.insert(pair<int, int>(9, 90));
	m2.insert(pair<int, int>(8, 80));

	m1.swap(m2);

	cout <<  "交换后的m1" << endl;
	printMap(m1);
	// key=8 value=80
	// key=9 value=90
	// key=10 value=100
}

int main() 
{
	test01();
}
```

## 4 插入和删除

**函数原型：**

- `insert(elem);` //在容器中插入元素。
- `clear();` //清除所有元素
- `erase(pos);` //删除pos迭代器所指的元素，返回下一个元素的迭代器。
- `erase(beg, end);` //删除迭代器区间[beg,end)的所有元素 ，返回下一个元素的迭代器。
- `erase(key);` //**删除容器中键值为key的元素**。

```cpp
#include<iostream>
using namespace std;
#include <string>
#include <map>


void printMap(map<int, int> &m)
{
	for(map<int, int>::iterator it=m.begin(); it!=m.end(); it++)
	{
		cout << "key: " << it->first << " value: " << it->second << endl;
	}
	cout << endl;
}


void test01()
{
	// 默认构造
	map<int, int> m1;
	m1.insert(pair<int, int>(1, 10));
	m1.insert(pair<int, int>(3, 30));
	m1.insert(pair<int, int>(2, 20));
	m1.insert(pair<int, int>(4, 40));

	// 第二种插入方式
	m1.insert(make_pair(5, 50));

	// 第三种插入方式
	m1.insert(map<int, int>::value_type(6, 60));

	// 第四种插入方式
	m1[6] = 60; // 不建议用 [] 来插入， 因为可以用[]访问到 value

	printMap(m1);

	m1.erase(6); // 按照key删除
	printMap(m1);

	m1.erase(m1.begin(), m1.end()); // 按区间删除
	printMap(m1);
	
	m1.clear(); // 清空
	printMap(m1);
}

int main() 
{
	test01();
}
```

## 5 查找和统计

**函数原型：**

- `find(key);` //查找key是否存在,若存在，返回该键的元素的迭代器；若不存在，返回set.end();
- `count(key);` //统计key的元素个数,对于map容器。元素个数要么为0，要么为1

```cpp
#include<iostream>
using namespace std;
#include <string>
#include <map>


void printMap(map<int, int> &m)
{
	for(map<int, int>::iterator it=m.begin(); it!=m.end(); it++)
	{
		cout << "key: " << it->first << " value: " << it->second << endl;
	}
	cout << endl;
}


void test01()
{
	// 默认构造
	map<int, int> m1;
	m1.insert(pair<int, int>(1, 10));
	m1.insert(pair<int, int>(3, 30));
	m1.insert(pair<int, int>(2, 20));
	m1.insert(pair<int, int>(4, 40));

	map<int, int>::iterator pos = m1.find(3);
	if(pos != m1.end())
	{
		cout << "查到了元素 key=" << (*pos).first << " value=" << pos->second << endl;
	}
	else
	{
		cout << "未找到元素" << endl;
	}

	// 统计
	int num = m1.count(3); // map 不允许插入重复的元素，这个值要么是0，要么是1, multimap 的统计结果可能会大于1
	cout << "num= " << num << endl;	
}

int main() 
{
	test01();
}
```

## 6 排序

因为map是根据key值进行排序的，所以更改的排序规则针对的是key值。必须在容器插入数据前就给出排序规则。

**主要技术点:**

- 利用仿函数，可以改变排序规则

```cpp
#include<iostream>
using namespace std;
#include <string>
#include <map>


class MyCompare
{
public:
	bool operator()(int v1, int v2)
	{
		// 降序排
		return v1 > v2;
	}
};



void test01()
{
	// 默认构造
	map<int, int, MyCompare> m1;
	m1.insert(pair<int, int>(1, 10));
	m1.insert(pair<int, int>(3, 30));
	m1.insert(pair<int, int>(2, 20));
	m1.insert(pair<int, int>(4, 40));

	for(map<int, int, MyCompare>::iterator it=m1.begin(); it!=m1.end(); it++)
	{
		cout << "key: " << it->first << " value: " << it->second << endl;
	}
	cout << endl;
}

int main() 
{
	test01();
}
```

