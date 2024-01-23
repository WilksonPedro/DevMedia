from calculadora import Calculadora

calc = Calculadora()

largura: float = float(input("Digite a largura do comodo: "))
profundidade: float = float(input("Digite a profundidade do comodo: "))
altura: float = 2.9

print(
    "A area das paredes é: ", calc.calcular_area_parede(largura, profundidade, altura)
)

print("A area do teto é: ", calc.calcula_area_teto(largura, profundidade))
