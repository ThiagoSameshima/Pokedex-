# Pokédex

Pokédex feita em HTML, CSS e JavaScript puro, sem frameworks. Os dados vêm da [PokeAPI](https://pokeapi.co/).

## Funcionalidades

- Scroll infinito: carrega mais pokémons conforme você rola a página
- Modal com detalhes do pokémon (altura, peso, tipos, stats e cadeia de evolução)
- Busca por nome ou ID
- Modo escuro (fica salvo no navegador)
- Cor do card muda de acordo com o tipo do pokémon
- Base pronta para favoritos (falta só o botão na interface)

## Tecnologias

HTML, CSS e JavaScript puro (ES6+, fetch, async/await, localStorage). Sem dependências, sem build.

## Estrutura

```
├── index.html
├── css/
│   ├── style.css       # layout geral, header, grid e cards
│   ├── modal.css        # popup de detalhes
│   ├── types.css        # cor por tipo de pokémon
│   └── darkmode.css     # tema escuro
└── js/
    ├── api.js           # chamadas à PokeAPI
    ├── app.js            # carrega e pagina os cards
    ├── card.js           # cria o card de cada pokémon
    ├── evolution.js      # monta a cadeia de evolução
    ├── modal.js           # abre/fecha e renderiza o modal
    ├── scroll.js          # scroll infinito
    ├── search.js          # busca por nome/ID
    ├── darkmode.js        # liga e salva o tema escuro
    └── favorite.js        # favoritos (localStorage)
```

## Rodando localmente

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Depois é só abrir o `index.html` no navegador, ou rodar um servidor local pra evitar problema de cache:

```bash
npx serve .
```

## API

[PokeAPI](https://pokeapi.co/docs/v2) — pública, gratuita, sem necessidade de chave.

## Pendências

- Botão de favoritar nos cards

