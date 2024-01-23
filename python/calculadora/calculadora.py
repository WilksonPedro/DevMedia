class Calculadora:
    def __init__(self):
        self.area_parede: float = 0.0
        self.area_teto: float = 0.0

    def calcular_area_parede(self, largura, profundidade, altura):
        self.area_parede = 2 * (largura + profundidade) * altura
        return self.area_parede

    def calcula_area_teto(self, largura, profundidade):
        self.area_teto = largura + profundidade
        return self.area_teto

    def calcula_litragem(self):
        return (self.area_parede + self.area_teto) / 10
