# -*- coding: utf-8 -*-
"""
Created on Mon May  4 18:44:21 2020

@author: Said ZITOUNI
"""
#sort numbers in a list 
lis=[12,25,25,26,5,25,25]
copy=lis[:]
for i in range(len(copy)):
    for j in range(len(copy)-i-1):
        if copy[j]>copy[j+1]:
            copy[j+1],copy[j]=copy[j],copy[j+1]
print(copy)            