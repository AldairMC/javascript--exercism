import re


def flatten(iterable):
    result = re.compile(r'-\d+|\d+').findall(str(iterable))
    return [int(i) for i in result]
