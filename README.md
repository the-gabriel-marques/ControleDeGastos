# 💰 Controle de Gastos

Aplicativo mobile desenvolvido em React Native para cadastro, listagem e armazenamento local de gastos pessoais. Projeto criado como avaliação prática, aplicando conceitos de gerenciamento de estado, navegação e persistência de dados em um banco local.

## 🚀 Funcionalidades

**Obrigatórias implementadas:**
* Listagem completa de gastos na tela inicial (FlatList).
* Cadastro de novos gastos com validação de regras de negócio (campos vazios, valor maior que zero).
* Navegação fluida entre telas utilizando React Navigation.
* Persistência de dados local e nativa utilizando **SQLite**.
* Estilização organizada e componentizada via `StyleSheet`.

**🌟 Funcionalidades Extras Adicionadas:**
* Edição e atualização de gastos existentes.
* Exclusão de gastos com alerta de confirmação interativo.
* Cálculo automático e dinâmico do total de gastos.
* Filtro instantâneo por categoria e pesquisa por descrição da despesa.
* Ordenação de lista (Maior valor / Menor valor).
* Alternância em tempo real para Tema Escuro (Dark Mode).
* Interface enriquecida com ícones (`@expo/vector-icons`).
* Tela "Sobre" detalhando a aplicação com `ScrollView`.

## 🛠️ Tecnologias Utilizadas

* **React Native**
* **Expo** (SDK 54)
* **React Navigation** (Native Stack)
* **Expo SQLite** (Nova API com métodos Sync)

## 📂 Estrutura do Projeto

O código-fonte foi estruturado de forma modular e escalável:

```text
/src
  ├── /components   # Componentes visuais reutilizáveis (ex: ExpenseItem)
  ├── /database     # Configuração e queries do banco SQLite (database.js)
  ├── /navigation   # Configuração do container de rotas (routes.js)
  ├── /screens      # Telas da aplicação (HomeScreen, AddExpenseScreen, AboutScreen)
  └── /styles       # Estilização global e paleta de cores (styles.js)
