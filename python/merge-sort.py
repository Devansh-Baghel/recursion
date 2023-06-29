import math

def merge(leftArr, rightArr):
    result = []

    i = 0
    j = 0

    while (i < len(leftArr) and j < len(rightArr)):
        if (leftArr[i] < rightArr[j]):
            result.append(leftArr[i])
            i += 1
        else:
            result.append(rightArr[j])
            j += 1

    while (i < len(leftArr)):
        result.append(leftArr[i])
        i += 1

    while (j < len(rightArr)):
        result.append(rightArr[j])
        j += 1

    return result

def merge_sort(arr):
    if len(arr) == 1: return arr
        
    mid = math.floor(len(arr) / 2)
    left = arr[0:mid]
    right = arr[mid:]

    return merge(merge_sort(left), merge_sort(right))


print(merge([1,3,7,8], [0,4,5,6]))
print(merge([1,3,7,8], [0,4,6,9]))

print(merge_sort([123,1234,98,1,89,23,8,12]))
