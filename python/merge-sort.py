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

print(merge([1,3,7,8], [0,4,5,6]))
print(merge([1,3,7,8], [0,4,6,9]))
