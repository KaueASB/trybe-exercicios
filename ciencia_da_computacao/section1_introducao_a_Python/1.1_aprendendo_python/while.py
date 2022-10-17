# O laço de repetição while acontecerá enquanto a condição for satisfeita.

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next