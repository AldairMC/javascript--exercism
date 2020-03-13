COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
]


def value(colors):
    result = ''.join([str(COLORS.index(i)) for i in colors])
    return int(result[0:2])
