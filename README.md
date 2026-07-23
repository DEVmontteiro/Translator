# 🌐 Translator App

Um tradutor de textos simples e rápido, construído com **React** e a API pública [MyMemory Translated](https://mymemory.translated.net/).

## ✨ Funcionalidades

- Tradução de texto em tempo real
- Suporte a 6 idiomas: Inglês, Espanhol, Francês, Alemão, Italiano e Português
- Interface limpa e responsiva com Tailwind CSS
- Indicador de carregamento durante a tradução
- Debounce na digitação para evitar chamadas excessivas à API

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/translator-app.git

# Acesse a pasta do projeto
cd translator-app

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

## 🖥️ Como usar

1. Selecione o idioma de origem e o idioma de destino
2. Digite o texto que deseja traduzir no campo da esquerda
3. A tradução aparece automaticamente no campo da direita

## 📁 Estrutura do projeto

```
src/
├── components/
│   └── Home.jsx    # Componente principal do tradutor
├── App.jsx
└── main.jsx
```

## 🔧 Possíveis melhorias futuras

- [ ] Botão para inverter os idiomas (origem ↔ destino)
- [ ] Histórico de traduções
- [ ] Tratamento de erros mais detalhado (ex: limite de requisições da API)
- [ ] Botão de copiar texto traduzido
- [ ] Suporte a mais idiomas

## 📄 Licença

Este projeto está sob a licença MIT.

---

Feito com 💙 usando React.