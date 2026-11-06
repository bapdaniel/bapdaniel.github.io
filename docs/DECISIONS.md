# Decisões de conteúdo e design

Documento de registro das decisões relevantes tomadas na construção deste portfólio.
Mantido para transparência e consulta futura.

---

## Conteúdo

### D-01 — Nenhuma informação inventada

**Decisão:** Apresentar somente dados verificáveis nos repositórios públicos.

**Contexto:** O portfólio é de um estudante do primeiro semestre buscando o primeiro estágio.
Exagerar competências ou métricas prejudicaria a credibilidade e seria incoerente
com o objetivo de construir uma presença profissional honesta.

**Consequências:**
- Testes do SOL+ (28 JVM + 10 instrumentados) confirmados no README antes de publicar.
- Próximos projetos identificados como "em planejamento" — sem código, sem screenshots.
- Nenhuma barra de progresso de skills (não são verificáveis).
- Nenhuma métrica de commits ou outros números que variam com o tempo.

---

### D-02 — Projetos principais separados de exercícios de aprendizagem

**Decisão:** SOL+ como estudo de caso completo; outros três projetos no "Laboratório de aprendizagem".

**Contexto:** SOL+ é o projeto de maior profundidade técnica (Kotlin, arquitetura MVVM,
38 testes, CI, documentação extensa). Os outros três são projetos educacionais válidos,
mas de escopo menor. Misturá-los na mesma hierarquia distorceria a apresentação.

**Consequências:**
- SOL+ tem seção própria com problema, solução, decisões, testes e limitações.
- Laboratório usa cards menores, com foco em "o que pratiquei".

---

### D-03 — Limitações conhecidas apresentadas em destaque

**Decisão:** Incluir limitações do SOL+ em card com destaque visual (amarelo suave).

**Contexto:** O projeto é educacional e não substitui orientação médica.
Ocultar limitações seria antiético e poderia criar expectativas incorretas.
Apresentá-las com clareza demonstra maturidade técnica.

---

### D-04 — Próximos projetos como "em planejamento"

**Decisão:** Monitor de preços e Loja com pagamento listados apenas como estudos futuros,
sem nenhuma captura, métrica ou data de entrega.

**Contexto:** Nenhum dos dois tem código publicado. Apresentá-los como concluídos
seria desonesto.

---

## Design

### D-05 — HTML/CSS/JS vanilla, sem frameworks

**Decisão:** Nenhuma dependência de build, framework ou CDN externo para o código.

**Contexto:** O usuário pediu explicitamente "evitando complexidade artificial".
Um portfólio estático não justifica React, bundlers ou dependências desnecessárias.

**Consequências:**
- Sem `node_modules`, sem `package.json` de build.
- Sem CDNs externos (apenas raw.githubusercontent.com para screenshots do SOL+).
- Carregamento mais rápido e manutenção mais simples.

---

### D-06 — Paleta teal (#0F766E) em fundo claro

**Decisão:** Fundo branco (#FFF / #F8FAFC) com acento teal-700 (#0F766E).

**Contexto:** Paleta clean e profissional, diferente dos defaults de AI-purple e gradientes.
Teal tem boa associação com tecnologia sem ser genérico.
Contraste texto/fundo passa WCAG AA em todas as combinações críticas.

---

### D-07 — Sem animações de entrada nem barras de progresso

**Decisão:** Motion mínimo — apenas transições de hover suaves.

**Contexto:** Pedido explícito do usuário. Animações excessivas distraem e podem
ser problemáticas para usuários com `prefers-reduced-motion`. O conteúdo é o diferencial,
não a animação.

---

### D-08 — Screenshots via raw.githubusercontent.com

**Decisão:** Referenciar as 4 screenshots do SOL+ pelo URL raw do GitHub.

**Contexto:** As imagens já existem em `docs/screenshots/` do repositório solplus-android.
Copiá-las para este repo seria redundante e dificultaria a manutenção.
Se as imagens forem atualizadas no SOL+, o portfólio reflete automaticamente.

**Risco:** URLs raw dependem do repositório original continuar público.

---

### D-09 — Sistema de fontes nativo

**Decisão:** `font-family` usando a system font stack em vez de Google Fonts ou outro CDN.

**Contexto:** Sem dependências de rede para fontes. Carregamento mais rápido.
Renderização consistente em cada plataforma com a fonte que o usuário já tem instalada.

---

### D-10 — Nome consistente: Daniel Baptista

**Decisão:** "Daniel Baptista" em todo o portfólio e documentação.

**Contexto:** Confirmado pelo usuário em 06/11/2026.
O perfil do GitHub usava "Daniel Henrique" — essa inconsistência prejudicaria
a presença profissional.

---

### D-11 — Previsão de formação: Outubro de 2028

**Decisão:** "outubro de 2028" em todos os textos.

**Contexto:** Confirmado pelo usuário em 06/11/2026.
O perfil do GitHub usava "agosto de 2028" — corrigido neste portfólio.
O perfil do GitHub também precisa ser atualizado separadamente.
