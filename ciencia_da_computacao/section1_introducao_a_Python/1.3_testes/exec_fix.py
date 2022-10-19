numbers = input("Digite números separados por espaço: ")

list_numbers = numbers.split(" ")


def fizz_buzz(list):
    list_return = []
    for number in list:
        if int(number) % 3 == 0 and int(number) % 5 == 0:
            list_return.append("FizzBuzz")
        elif int(number) % 3 == 0:
            list_return.append("Fizz")
        elif int(number) % 5 == 0:
            list_return.append("Buzz")
        else:
            list_return.append(int(number))
    return list_return


print(fizz_buzz(list_numbers))
