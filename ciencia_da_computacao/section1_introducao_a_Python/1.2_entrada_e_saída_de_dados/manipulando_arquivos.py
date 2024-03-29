# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que...
# ele já exista, sobrescrevendo o antigo.

# escrita
file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close()


# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(
        line
    )  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo
