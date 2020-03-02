def distance(strand_a, strand_b):
    count = 0
    if(len(strand_a) != len(strand_b)):
        raise ValueError('Error, AND length incorrect')
    for idx, i in enumerate(strand_a):
        if strand_a[idx] != strand_b[idx]:
            count += 1
    return count
