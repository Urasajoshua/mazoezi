dirty_list = [1,1,1,2,2,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,0,0]
clean_list = []


for item in dirty_list:
    if item not in clean_list:
        clean_list.append(item)
        
print(clean_list)