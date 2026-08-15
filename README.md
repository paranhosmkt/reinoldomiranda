# Reinoldo Miranda — Mentor de Executivos & Método MAGE®

Link in Bio oficial e apresentação da trajetória executiva e da Metodologia MAGE® por **Reinoldo Miranda**.

---

## 🚀 Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** (Bundler de alta performance)
- **Tailwind CSS v4** (Estilização utilitária moderna)
- **Motion** (Transições e animações fluidas)
- **Lucide React** (Ícones vetoriais)

---

## 🛠️ Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador em `http://localhost:3000` (ou na porta informada pelo Vite).

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## 🌐 Como Publicar na Vercel

### Opção 1: Direto pelo GitHub (Recomendado)
1. Suba este projeto para um repositório no seu **GitHub**.
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**.
3. Importe o repositório do GitHub.
4. A Vercel detectará automaticamente as configurações do **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. O arquivo `vercel.json` já incluso cuidará das rotas e regras de SPA automaticamente.

### Opção 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📁 Estrutura do Projeto

```text
├── src/
│   ├── components/       # Componentes modulares (Hero, BioHome, About, Methodology, etc.)
│   ├── data/             # Conteúdos, dados biográficos e links oficiais
│   ├── types.ts          # Definições TypeScript
│   ├── App.tsx           # Componente principal e roteamento interno
│   ├── main.tsx          # Ponto de entrada React
│   └── index.css         # Importações do Tailwind CSS
├── public/               # Ativos estáticos
├── vercel.json           # Configuração de rotas para deploy na Vercel
├── vite.config.ts        # Configuração do Vite
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```
