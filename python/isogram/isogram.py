import re


def is_isogram(string):
    only_string = re.sub("-|\s", "", string.lower())
    aux = ''.join(set(only_string))
    return len(aux) == len(only_string)
