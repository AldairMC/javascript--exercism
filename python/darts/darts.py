from math import sqrt


def score(x, y):
    hipotenusa = sqrt((x**2)+(y**2))
    return points(hipotenusa)


def points(dart):
    if(dart <= 1): return 10
    elif(dart > 1 and dart <= 5): return 5
    elif(dart > 5 and dart <= 10): return 1
    else: return 0
