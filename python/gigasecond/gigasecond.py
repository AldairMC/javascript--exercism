from datetime import timedelta
import math


def add(moment):
    return moment + timedelta(seconds=math.pow(10, 9))
