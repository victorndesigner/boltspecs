# ⚡ Bolt Design System v2.2 (Final Consolidado)

Este documento define o padrão visual e comportamental oficial para todos os sites da rede **Bolt** (Texturas, Specs, Especializações, Galeria, etc.), consolidando o **Design System v2.0** com as melhorias estruturais, de UX e Galeria introduzidas na versão **v2.2**.

---

## 🎨 Paleta de Cores

| Variável CSS | Valor | Descrição |
| :--- | :--- | :--- |
| `--cor-fundo` | `#131313` | Fundo principal (Dark Gray quase preto) |
| `--gradiente-bg` | `linear-gradient(135deg, #252525 0%, #161616 100%)` | Fundo alternativo / detalhes |
| `--cor-texto` | `#e0e0e0` | Texto principal (Off-white) |
| `--cor-primaria` | `rgb(153, 0, 255)` | **Roxo Bolt** (destaques, bordas, glow) |
| `--cor-secundaria` | `rgb(164, 53, 255)` | Roxo secundário (hover, glows secundários) |
| `--cor-destaque` | `rgb(162, 0, 255)` | Ações principais e feedback |
| `--vidro-bg` | `rgba(255, 255, 255, 0.05)` | Fundo dos cards (Glassmorphism) |
| `--vidro-borda` | `rgba(255, 255, 255, 0.1)` | Borda sutil dos cards |
| `--sombra-card` | `0 8px 32px 0 rgba(8, 8, 8, 0.37)` | Profundidade dos cards |

---

## ✒️ Tipografia

- **Fonte Principal:** `Poppins`, sans-serif

### Títulos (H1)
- **Tamanho:** `2.5rem`
- **Cores:** Roxo (`.r-purple`) e Branco (`.r-white`) separados
- **Caixa:** Mista (respeita maiúsculas/minúsculas do HTML)
- **Hover:**
  - Escala `1.02`
  - Glow Roxo: `0 0 20px rgba(225, 188, 255, 0.11), 0 0 5px var(--cor-secundaria)`
  - Glow Branco: `0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3)`

### Subtítulos / Informações
- **Cor:** `#bbbbbb`
- **Tamanho:** `0.9rem`

---

## 📐 Layout e Estrutura Premium

### 1. Header (Cabeçalho)
- **Sticky Header:** Fixo no topo com `backdrop-filter: blur(12px)`
- **Logo:**
  - Circular
  - 100x100px (desktop)
  - 45x45px (barra de navegação)
  - Borda `2px solid #a23fff`
  - Hover: escala `1.05` com glow roxo en camadas
- **Branding:**
  - Nome (ex: `bolttexturas`)
  - Gradiente `#48018b → var(--cor-primaria)`
  - Hover: escala `1.02` + `drop-shadow`
- **Navegação Mobile:**
  - Ícone hamburguer animado para “X”
  - Gaveta lateral (`mobile-drawer`)
  - Altura total `100dvh`

---

### 2. Background Interativo
- **Canvas:** `#particulas-canvas` cobrindo todo o fundo
- **Partículas:** Roxas, translúcidas, movimento suave
- **Quantidade:**
  - Desktop: **15 partículas**
  - Mobile: **10 partículas**
- **Opacidade no Mobile:** Máximo `0.3`

---

### 3. Galeria de Imagens (Swiper)
- **Estética:**
  - Imagens sem blocos de fundo
  - `border-radius: 20px`
  - Borda roxa `2px solid var(--cor-primaria)`
- **Configuração:**
  - `spaceBetween: 30`
  - Sem limite de altura (`max-height: none`)
- **Setas de Navegação:**
  - Fundo `#333`
  - Ícone branco
  - Desktop: coladas à imagem (`~80px` para dentro)
  - Mobile: posicionadas **abaixo** da imagem com espaçamento confortável

---

### 4. Sticky Footer
- **Implementação:** Flexbox no `body`
  - `min-height: 100vh`
  - `margin-top: auto`
- **Visual:**
  - Centralizado
  - `border-top: rgba(255, 255, 255, 0.05)`
- **Links:**
  - Cor `var(--cor-primaria)`
  - Hover: `#9720ff` + `text-shadow` roxo/lilás intenso

---

## 🧩 Componentes

### 1. Cards (Glassmorphism)
- **Fundo:** `var(--vidro-bg)` + `backdrop-filter: blur(10px)`
- **Borda:** `1px solid var(--vidro-borda)`
- **Sombra:** `var(--sombra-card)`
- **Hover:**
  - `translateY(-5px)`
  - Borda muda para Roxo Primário
  - Sombra roxa suave
- **Entrada:** Animação `surgirSuave` (slide up + fade)
  - Delay em cascata baseado no índice

---

### 2. Botões

#### Botão de Ação (ex: Copiar)
- **Background:** `#333`
- **Borda:** `2px solid var(--cor-primaria)`
- **Texto:** Branco
- **Hover:**
  - Background `#444`
  - Escala `1.02`
- **Feedback de Clique:**
  - Fundo e borda `var(--cor-destaque)`
  - Texto muda (ex: “Copiado!”)

#### Botão Secundário
- **Background:** Transparente
- **Borda:** `1px solid var(--cor-primaria)`
- **Texto:** Branco
- **Hover:**
  - Preenchimento roxo
  - Escala `1.02`

---

### 3. Acordeão (Categorias)
- **Header:** `.categoria-cabecalho`
  - Borda esquerda roxa (`4px`)
  - Ícone `+ / -`
- **Comportamento:**
  - Toggle da classe `.ativa`
  - Conteúdo `.grade-tracos` aparece com `surgirSuave`

---

### 4. Filtros
- **Visual:** Botões transparentes com borda roxa
- **Ativo:**
  - Fundo roxo
  - `box-shadow` pulsante
- **Lógica:** Exibe/oculta seções via JS com transição de opacidade

---

### 5. Badges de Raridade
- **Comum:** Cinza translúcido
- **Raro:** Azul translúcido
- **Épico:** Roxo vibrante translúcido
- **Estilo:** Texto pequeno, padding interno, bordas suaves

---

## ⚡ Comportamentos e Convenções

- **Interatividade:** Hover aplicado apenas ao conteúdo real (`display: inline-block`)
- **Renderização Dinâmica:** Listas geradas via arrays JS (`info.js`)
- **Animações:** Sempre em cascata usando `animation-delay`
- **Clipboard:** Feedback visual no próprio botão
- **Viewport:** Uso prioritário de `dvh`
- **Performance Mobile:**
  - Redução agressiva de partículas
  - Remoção de efeitos decorativos excessivos

---

## 📝 Convenções de Código

- **Comentários:** Sempre em **Português (PT-BR)**
- **Nomeação:** CSS e variáveis em kebab-case (`.cabecalho-logo`)
- **Consistência Visual:** Nenhuma página pode quebrar este Design System.
