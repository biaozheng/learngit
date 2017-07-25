import os
import pandas as pd
from random import sample
from pandas import DataFrame, Series
import re

os.chdir('C:/Users/zheng/Desktop')
data = pd.read_csv('竞赛网2月份数据.csv', encoding='GB18030')

index = [re.search('\.jhtml', str(i)) != None for i in data.ix[:, 'page_path']]
info = data.ix[index, :]
# 筛选包含所需字段的数据
zz = 'zytj|yxsp|jmgj|information|ts|asdf|dsjkf|jiao|jmg|tts|sjfxs|sjsdf|jszz|stpj|yxzp|cgal|firsttipdm|secondtipdm|thirdtipdm|fourthtipdm|jingsa|kjxm|qk|sdfasf|sm|td|qyal|xtxm|wjxq|zxns|zzszl|news|notice|notices|sj'
index = [re.search(zz, str(i)) != None for i in info.ix[:, 'page_path']]
info1 = info.ix[index, :]
# 提取所需字段
info1 = info1.ix[:, ['ip', 'page_path']]
# 去重
info2 = info1.drop_duplicates()

# 将IP转换成字符型数据
info2.ix[:, 0] = [str(index) for index in info2.ix[:, 0]]
info2.ix[:, 1] = [str(index) for index in info2.ix[:, 1]]
#==================
# 筛选满足一定次数的IP
IP_count = info2['ip'].value_counts()
# 找出IP集合
IP = list(IP_count.index)
count = list(IP_count.values)
# 统计每个IP的浏览次数，并放入IP_count数据框中（1、IP，2、浏览次数）
dic = {'IP': IP, 'count': count}
IP_count = DataFrame(dic)
# 筛选出浏览网址在n次以上的IP集合
n = 5
index = IP_count.ix[:, 'count'] > n
IP = IP_count.ix[index, 'IP']
# 划分IP集合为训练集和测试集合
IP_tr = sample(list(IP), int(len(IP) * 0.8))
IP_te = [i for i in list(IP) if i not in IP_tr]
# 将对应数据集划分为训练集和测试集
index_tr = [i in list(IP_tr) for i in info2.ix[:, 'ip']]
index_te = [i in list(IP_te) for i in info2.ix[:, 'ip']]
data_tr = info2.ix[index_tr, :]
data_te = info2.ix[index_te, :]
IP_tr = data_tr.ix[:, 0]  # 训练集IP
url_tr = data_tr.ix[:, 1]  # 训练集网址
IP_tr = list(set(IP_tr))  # 去重
url_tr = list(set(url_tr))  # 去重

# 利用训练集数据构建模型==========================
UI_matrix_tr = DataFrame(0, index=IP_tr, columns=url_tr)
Matr_tr = data_tr
# 求用户-物品矩阵
for i in Matr_tr.index:
    UI_matrix_tr.ix[Matr_tr.ix[i, 'ip'], Matr_tr.ix[i, 'page_path']] = 1
# 求物品相似度矩阵
Item_matrix_tr = DataFrame(0, index=url_tr, columns=url_tr)
for i in Item_matrix_tr.index:
    for j in Item_matrix_tr.index:
        a = sum(UI_matrix_tr.ix[:, [i, j]].sum(axis=1) == 2)
        b = sum(UI_matrix_tr.ix[:, [i, j]].sum(axis=1) != 0)
        Item_matrix_tr.ix[i, j] = a / b
# 将物品相似度矩阵对角线处理为零
for i in Item_matrix_tr.index:
    Item_matrix_tr.ix[i, i] = 0

# 评价================
IP_te = data_te.ix[:, 0]
url_te = data_te.ix[:, 1]
IP_te = list(set(IP_te))
url_te = list(set(url_te))
# 测试集数据用户物品矩阵
UI_matrix_te = DataFrame(0, index=IP_te, columns=url_te)
Matr_te = data_te
for i in Matr_te.index:
    UI_matrix_te.ix[Matr_te.ix[i, 'ip'], Matr_te.ix[i, 'page_path']] = 1
# 对测试集IP进行推荐
Res = DataFrame('NaN', index=Matr_te.index, columns=[
                'IP', '已浏览网址', '推荐网址', 'T/F'])
Res.ix[:, 'IP'] = list(Matr_te.ix[:, 0])
Res.ix[:, '已浏览网址'] = list(Matr_te.ix[:, 1])

for i in Res.index:
    if Res.ix[i, '已浏览网址'] in url_tr:
        Res.ix[i, '推荐网址'] = Item_matrix_tr.ix[Res.ix[i, '已浏览网址'], :].argmax()
        if Res.ix[i, '推荐网址'] in url_te:
            Res.ix[i, 'T/F'] = UI_matrix_te.ix[Res.ix[i, 'IP'],
                                               Res.ix[i, '推荐网址']] == 1
        else:
            Res.ix[i, 'T/F'] = False

# 5.3计算推荐准确率
print(sum(Res.ix[:, 3] == True) / (len(Res) - sum(Res.ix[:, 3] == 'NaN')))
