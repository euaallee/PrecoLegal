# Preço Legal

**Preço Legal** é uma **calculadora de combustível** que ajuda usuários e proprietários de veículos a **economizar dinheiro ao abastecer**. O aplicativo compara o preço do combustível nos postos locais com o preço médio estadual, permitindo que o usuário veja se está pagando mais ou menos pelo litro de combustível.

---

## 🎯 Objetivo do Projeto

O principal objetivo do **Preço Legal** é:  

- **Informar o preço médio do combustível por estado** com base em dados de fontes confiáveis (como a Petrobras).  
- **Permitir que o usuário insira o preço do posto onde parou** e o valor que deseja abastecer.  
- **Calcular automaticamente quantos litros ele receberá** pelo valor informado.  
- **Comparar o preço local com o preço médio estadual** e mostrar a diferença percentual, ajudando a identificar se o combustível está mais caro ou mais barato.  
- **Oferecer uma interface simples, responsiva e intuitiva**, acessível tanto no desktop quanto no mobile.  

---

## 💻 Funcionalidades

- Seleção do **estado** para obter o preço médio do combustível.  
- Escolha do **tipo de combustível**: gasolina ou diesel.  
- Input opcional do **preço do posto local**.  
- Cálculo de **quantos litros podem ser abastecidos** com o valor informado.  
- Comparação percentual entre o preço local e o preço médio estadual.  
- Formatação de valores no padrão brasileiro (**R$ X,XX**) com inputs fáceis de digitar no mobile.  
- **Layout responsivo**, adaptando-se a telas pequenas e grandes.  

---

## ⚙️ Como Funciona

1. O usuário seleciona o **estado** e o **tipo de combustível**.  
2. O usuário insere o **valor que deseja abastecer**.  
3. Opcionalmente, o usuário pode digitar o **preço do posto local**.  
4. O sistema consome uma **API de preços de combustível** para obter o preço médio estadual.  
5. O aplicativo calcula:  
   - Quantos litros serão abastecidos com o valor informado.  
   - Se o preço local é mais caro ou mais barato que a média estadual, exibindo a **diferença percentual**.  

---

## 🛠 Tecnologias Utilizadas

- **HTML / CSS / JavaScript** – front-end minimalista e responsivo.  
- **Node.js / Express** – backend para consumir a API e evitar problemas de CORS.  
- **Fetch API** – para comunicação entre front-end e backend. 

---

## 📱 Público-Alvo

- **Motoristas e proprietários de automóveis** que desejam **economizar no abastecimento**.  
- Pessoas que querem **comparar preços entre postos e médias estaduais**.  
- Usuários que preferem **uma interface simples e prática**, acessível de qualquer dispositivo.  

---

## 🔗 Fonte dos Dados

Os preços médios dos combustíveis são obtidos de fontes oficiais, como:  

- [Petrobras – Preços](https://precos.petrobras.com.br/)  

---