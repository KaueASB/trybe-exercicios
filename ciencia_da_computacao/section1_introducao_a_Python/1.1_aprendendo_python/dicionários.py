# Dicionários (dict)

# Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.

people_by_id = {
    1: "Maria",
    2: "Fernanda",
    3: "Felipe",
}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {
    "Maria": 1,
    "Fernanda": 2,
    "Felipe": 3,
}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]

people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"

del info["origem"]

print(info)
