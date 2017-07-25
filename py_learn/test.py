from pandas import DataFrame, Series
import numpy
import pandas as pd
import jieba

p_data = pd.read_csv('C:/Users/zheng/Desktop/竞赛网2月份数据.csv', encoding='GB18030')
p_data = p_data.ix[:, ['ip', 'page_path']]
print(p_data)
