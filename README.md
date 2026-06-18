# LAVMIST — versão em avaliação (3ª opção)

Terceira versão do material web da Lavansec, combinando **o melhor das outras duas** para comparação A/B/C:

- Do **NOVO Lavan**: storytelling de dados (gauge dos 95%, comparação de ativos), autoridade do
  fabricante líder mundial e a gestão remota 24h. **Marca do equipamento ocultada** (mostrada como
  "fabricante líder mundial"); máquinas apresentadas por características (kg, vida útil), sem fotos/siglas.
- Do **Lavansec atual**: tabela de modelos clara e o **formulário de captação de lead**.
- **Identidade própria (3ª):** tema claro "névoa" premium com **glassmorphism** (vidro fosco luminoso),
  distinto do atual (claro chapado) e do NOVO (escuro). Tokens oficiais Opção B; Poppins + Inter + Space Mono.

Landing **única** focada em conversão. Valores financeiros da Lavansec mantidos intactos; números
do fabricante rotulados como referência.

## Estrutura
```
LAVMIST/
├── index.html
├── favicon.svg
├── assets/ (css/lavmist.css · js/lavmist.js · img/maquinas)
├── Dockerfile · nginx.conf
└── README.md · .gitignore
```

## Ver localmente
```bash
cd LAVMIST && python -m http.server 8080   # http://localhost:8080
```

## Subir no Easypanel
Repositório sugerido: **`lavmist`** (ou `lavansec-lavmist`).
1. Suba o **conteúdo desta pasta na raiz** do repositório (Dockerfile, index.html, assets/ na raiz).
2. Easypanel: **App → Source = repo → Build = Dockerfile → porta 80 → Implantar**.

## Pendências
- [ ] (Opcional) Adicionar fotos neutras das máquinas (sem marca/sigla) se desejado.
- [ ] Revisão jurídica das projeções antes de uso oficial (COF — Lei 13.966/2019).
