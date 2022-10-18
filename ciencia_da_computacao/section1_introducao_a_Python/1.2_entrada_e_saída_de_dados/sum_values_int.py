entries = input("Digite valores inteiros, separados por expaço: ")

entries_array = entries.split(" ")

sum = 0
for char in entries_array:
    if not char.isdigit():
        print(f"Erro ao somar valores, {char} é um valor inválido!")
    else:
        sum += int(char)

print(f"A soma dos valores válidos é: {sum}")
