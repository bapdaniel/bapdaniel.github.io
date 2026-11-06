# Daniel Baptista — Portfólio

Site de portfólio pessoal publicado em [bapdaniel.github.io](https://bapdaniel.github.io).

## Sobre

HTML, CSS e JavaScript estáticos, sem frameworks nem dependências de build.
Publicado via GitHub Pages.

## Estrutura

```
.
├── index.html              # Página principal
├── assets/
│   ├── css/styles.css      # Estilos
│   ├── js/main.js          # JavaScript (nav mobile, ano do footer, scroll ativo)
│   └── images/favicon.svg  # Favicon
├── docs/
│   ├── DECISIONS.md        # Decisões de conteúdo e design
│   └── linkedin-update.md  # Textos prontos para atualização do LinkedIn
├── CHANGELOG.md
├── README.md
└── LICENSE
```

## Como executar localmente

Abra `index.html` diretamente em um navegador.
Nenhuma dependência, servidor ou build necessário.

Para servir com um servidor local simples:

```bash
# Python 3
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## GitHub Pages

Publicado na branch `main`, raiz do repositório (`/`).
URL: https://bapdaniel.github.io

## Licença

MIT — veja [LICENSE](LICENSE).
