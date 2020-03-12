import re


ALFABETH = 'abcdefghijklmnopqrstuvwxyz'


def is_pangram(sentence):
    result = (''.join(set(re.sub("\W+|_|[0-9]", "", sentence.lower()))))
    return len(result) == len(ALFABETH)
