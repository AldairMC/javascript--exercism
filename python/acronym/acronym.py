import re

def abbreviate(words):
    aux = re.sub("_|'", "", words.upper())
    result = re.compile(r'\b[a-zA-Z]')
    return ''.join(result.findall(aux))
