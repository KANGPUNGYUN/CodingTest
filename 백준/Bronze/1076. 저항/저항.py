color = ['black', 'brown', 'red', 
'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
x = color.index(input())
y = color.index(input())
z = color.index(input())
res = int(str(x) + str(y)) * (10 ** z)
print(res)