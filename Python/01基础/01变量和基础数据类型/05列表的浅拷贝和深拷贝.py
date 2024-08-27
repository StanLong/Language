# 引用赋值
# lst1 = ['沈万三', '朱元璋', '赵雪娥']
# lst2 = lst1 # lst2 和 lst1 指向了同一块内存地址
#
# print(lst2) # ['沈万三', '朱元璋', '赵雪娥']
#
# lst2.append('苏半城')
# print(lst2) # ['沈万三', '朱元璋', '赵雪娥', '苏半城']
#
# print(lst1) # ['沈万三', '朱元璋', '赵雪娥', '苏半城']
# print(id(lst1), id(lst2)) # 2439982174792 2439982174792
################################################################################

# 浅拷贝
# lst1 = ['沈万三', '朱元璋', '赵雪娥']
# lst2 = lst1.copy() # lst2 和 lst1 指向的不是同一块内存了, lst2 现在是一个新的对象
# # 浅拷贝的第二种写法 lst2 = lst1[:]
#
# print(lst2) # ['沈万三', '朱元璋', '赵雪娥']
#
# lst2.append('苏半城')
# print(lst2) # ['沈万三', '朱元璋', '赵雪娥', '苏半城']
# print(lst1) # ['沈万三', '朱元璋', '赵雪娥']
#
# print(id(lst1), id(lst2)) # 2842564383304 2842564383816

# lst1 = ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神']]
# lst2 = lst1.copy()
#
# print(lst2) # ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神']]
#
# lst2[3].append('仓桥下八号')
# print(lst2)  # ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神', '仓桥下八号']]
# print(lst1)  # ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神', '仓桥下八号']]
# 浅拷贝只拷贝第一层， 如果有嵌套的列表，则会出现多个变量指向同一个对象的情况
################################################################################

# 深拷贝
import copy
lst1 = ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神']]
lst2 = copy.deepcopy(lst1)

print(lst2) # ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神']]

lst2[3].append('仓桥下八号')
print(lst2)  # ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神', '仓桥下八号']]
print(lst1)  # ['沈万三', '朱元璋', '赵雪娥', ['东山钱王', '湖西银童', '漠北富婆', '南海财神']]

# 浅拷贝只拷贝第一层，深拷贝把内部所用的内容进行拷贝， 不会出现两个变量指向同一个对象的情况