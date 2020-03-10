def is_armstrong_number(number):
    parsed_number = str(number)
    powered_result = [int(i)**len(parsed_number) for i in parsed_number]
    return sum(powered_result) == number
