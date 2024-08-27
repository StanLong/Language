# string容器

## 1.1 基本概念

**本质：**

string是C++风格的字符串，而string本质上是一个类

**string和char的区别：**

- char* 是一个指针。
- string是一个类，类内部封装了char*，管理这个字符串，是一个char*型的容器。

**特点：**

1. string类内部封装了很多成员方法，例如：查找find，拷贝copy，删除delete，替换replace，插入insert。

2. string管理char * 所分配的内存，不用担心复制越界和取值越界等，由类内部进行负责。

## 1.2 构造函数

构造函数原型

```cpp
string();//创建一个空的字符串，例如：string str;

string(const char* s);//使用字符串s初始化

string(const string & str);//使用一个string对象初始化另一个string对象

string(int n,char c);//使用n个字符c初始化
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string s1; // 默认构造
    
    const char * str = "hello world";
    string s2(str);

    cout << "s2=" << s2 << endl;

    string s3(s2);
    cout << "s3=" << s3 << endl;

    string s4(10, 'a');
    cout << "s4=" << s4 << endl;


}

int main()
{
    test01();
}
```

## 1.3 赋值操作

赋值函数的原型

```cpp
string& operator=(const char* s);//char*类型字符串赋值给当前的字符串
string& operator=(const char &s);//把字符串s赋给当前的字符串
string& operator=(const char s);//字符赋值给当前的字符串
string& assign(const char *s);//把字符串s赋给当前的字符串
string& assign(const char *s,int n);//把字符串s的前n个字符赋给当前的的字符串
string& assign(const string &s);//把字符串s赋给当前字符串
string& assign(int n,char c);//用n个字符c赋给当前字符串
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str1;
	str1="Hello World";
	cout << "str1=" << str1 << endl;

	string str2;
	str2 = str1;
	cout << "str2=" << str2 << endl;

	string str3;
	str3 = 'a';
	cout << "str3=" << str3 << endl;

	string str4;
	str4.assign("Hello C++");
	cout << "str4=" << str4 << endl;

	string str5;
	str5.assign("hello C++", 5); // 把字符串s的前n个字符赋给当前的的字符串
	cout << "str5=" << str5 << endl; // str5=hello

	string str6;
	str6.assign(str5);
	cout << "str6=" << str6 << endl;

	string str7;
	str7.assign(10, 'w'); // 用n个字符c赋给当前字符串
	cout << "str7=" << str7 << endl; // str7=wwwwwwwwww

}

int main()
{
    test01();
}
```

## 1.4 字符串拼接

**函数原型**

```cpp
string& operator+=(const char* str);//重载+=操作符
string& operator+=(const char c);//重载+=操作符
string& operator+=(const string& str);//重载+=操作符
string& append(const char *s);//把字符串s连接到当前字符串结尾
string& append(const char *s,int n);//把字符串s的前n个连接到当前字符串结尾
string& append(const string &s);//同 operator+=(const string& str)
string& append(const string &s,int pos,int n);//字符串s中从pos开始的n个字符连接到字符串结尾
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str1 = "我";
	str1 += "爱玩游戏";
	cout << "str1=" << str1 << endl;

	str1 += ':';
	cout << "str1=" << str1 << endl;

	string str2 = "LOL, DNF";
	str1 += str2;
	cout << "str1=" << str1 << endl;

	string str3 = "I";
	str3.append(" love");
	cout << "str3=" << str3 << endl;

	str3.append(" game abcde", 5);
	cout << "str3=" << str3 << endl;


	//str3.append(str2);
	//cout << "str3=" << str3 << endl;

	str3.append(str2, 0, 3); // 从0开始截取3个字符
	cout << "str3=" << str3 << endl;
}

int main()
{
    test01();
}
```



## 1.5 查找和替换

**函数原型**

```cpp
int find(const string & str,int pos = 0) const;//查找str第一次出现位置，从pos开始查找
int find(const char* s,int pos = 0) const;///查找str第一次出现位置，从pos开始查找
int find(const char* s,int pos = 0,int n) const;//从pos位置查找s的前n个字符第一次位置
int find(const char c ,int pos = 0) const;//查找字符c第一次出现的位置
int rfind(const string& str,int pos = npos) const;//查找str最后一次位置，从pos开始查找
int rfind(const char* s,int pos = npos) const;//查找s最后一次出现位置，从pos开始查找
int rfind(const char* s,int pos = npos,int n) const;//从pos查找s的前n个字符最后一次位置
int rfind(const char c,int pos = 0) const;//查找字符c最后一次出现位置
string& replace(int pos,int n,const string& str);//替换从pos开始n个字符为字符串str
string& replace(int pos,int n,const char* s);///替换从pos开始n个字符为字符串s
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str1 = "abcdefg";
	
	int pos = str1.find("de"); // 找到就返回对应子串在原字符串中的下标，找不到就返回-1
	cout << "pos=" << pos << endl;

	// rfind 从右往左查找， find 从左往右查找。
	int pos2 = str1.rfind("de"); 
	cout << "pos2=" << pos2 << endl;
}

void test02()
{
	string str1="abcdefg";
	str1.replace(1,3,"111111");
	cout << "str1=" << str1 << endl; // str1=a111111efg
}

int main()
{
    test01();
	test02();
}
```

## 1.6 字符串比较

**函数原型**

```cpp
int compare(const string &s) const;//与字符串s比较
int compare(const char *s) const;//与字符串s比较
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str1 = "xello";
	string str2 = "hello";

	if(str1.compare(str2) == 0)
	{
		cout << "str1等于str2" << endl;
	}
	else if(str1.compare(str2) > 0)
	{
		cout << "str1大于str2" << endl;
	}
	else
	{
		cout << "str1小于str2" << endl;
	}
}


int main()
{
    test01();
}
```

## 1.7 字符串存取

**函数原型**

```cpp
char& operator[](int n);//通过[]方式获取字符
char& at(int n);//通过at方法获取字符
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str = "hello";
	cout << str << endl;

	// 1. 通过 [] 访问单个字符
	for(int i=0; i<str.size(); i++)
	{
		cout << str[i] << " ";
	}
	cout << endl;

	// 2. 通过 at 方式访问单个字符
	for(int i=0; i<str.size(); i++)
	{
		cout << str.at(i) << " ";
	}
	cout << endl;

	// 修改单个字符
	str[0] = 'H';
	cout << str << endl; // Hello

	str.at(1) = 'E';
	cout << str << endl; // HEllo
}

int main()
{
    test01();
}
```

## 1.8 插入和删除

**函数原型**

```cpp
string& insert(int pos, const char* s);//插入字符串
string& insert(int pos, const string& str);//插入字符串
string& insert(int pos, int n,char c);//在指定位置插入n个字符c
string& erase(int pos, int n = npos);//删除从pos开始的n个字符
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str = "hello";
	
	// 插入
	str.insert(1, "111");
	cout << str << endl; // h111ello

	// 删除
	str.erase(1,3);
	cout << str << endl; // hello
}


int main()
{
    test01();
}
```

## 1.9 子串

**函数原型**

```cpp
string substr(int pos = 0,int n = npos) const;//返回由pos开始的n个字符组成的字符串
```

```cpp
#include<iostream>
using namespace std;
#include <vector>
#include <algorithm> // 标准算法头文件

// string 容器

void test01()
{
    string str = "abcdef";
	string substr = str.substr(1, 3);
	cout << substr << endl; // bcd	
}

int main()
{
    test01();
}
```

