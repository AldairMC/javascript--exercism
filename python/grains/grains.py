def square(number):
    if (number <= 0 or number > 64):
        raise ValueError('Error, number invalid')
    return (2**number)/2


def total():
    return sum([(2**i)-(2**(i-1)) for i in range(1, 65)])
