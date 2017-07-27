from pandas import DataFrame, Series
import numpy
import pandas as pd
import jieba

#获取数据
p_data = pd.read_csv('C:/Users/zheng/Desktop/竞赛网2月份数据.csv', encoding='GB18030')
p_data = p_data.ix[:, ['ip', 'page_path']]
print(len(p_data))
#去掉重复访问同一page的同一ip的记录,对于推荐无价值
p_data = p_data.ix[:,['ip','page_path']].drop_duplicates()
print(len(p_data))
print(p_data.ix[33,'ip'])
#统计每个ip访问次数，开始过滤访问次数太低的无价值数据
p_data_user_num = p_data.ix[:,'ip'].value_counts()
count = list(p_data_user_num.values)
index = list(p_data_user_num.index)
ip_data = {'ip':index,'num':count}
ip_DF = DataFrame(ip_data)
useful_index = [(i > 4) for i in ip_DF.ix[:,'num']]
ip_DF = ip_DF.ix[useful_index,:]

p_data_index = []
for i in range(0,len(p_data)):
	p_data_index.append('false')

#print(p_data.ix[33,'ip'])
'''for r in ip_DF.ix[:,'ip']:
	for i in range(0,len(p_data)):
		print((p_data.ix[33,'ip']))
		if r == str(p_data.ix[i,'ip']):
			p_data_index[i] = True'''