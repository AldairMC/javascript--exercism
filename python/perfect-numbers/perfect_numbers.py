def classify(number):
    if(number <= 0):
        raise ValueError('Error, number invalid')
    result = sum([i for i in range(1, number) if number % i == 0])
    if (number == result):
        return 'perfect'
    elif (number < result):
        return 'abundant'
    else:
        return 'deficient'
