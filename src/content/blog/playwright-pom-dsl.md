---
title: "Playwright + POM + DSL: a stack definitiva de automação"
description: "Como estruturamos testes E2E escaláveis usando Page Object Model e Domain Specific Language."
date: "2025-10-06"
tags: ["automação", "playwright", "arquitetura"]
---

# Playwright + POM + DSL: a stack definitiva de automação

Testes E2E são a parte mais valiosa — e mais frágil — da pirâmide de testes. Mal escritos, viram pesadelo: flaky, lentos, impossíveis de manter. Bem arquitetados, são a melhor garantia de que seu produto funciona.

Depois de estruturar automação em dezenas de projetos, chegamos na stack definitiva: **Playwright + Page Object Model (POM) + Domain Specific Language (DSL)**.

## Por que Playwright?

Antes: Selenium era padrão, mas lento e instável. Cypress veio com promessas, mas limitado (sem multi-tab, sem iframes complexos, sem verdadeiro paralelismo).

**Playwright resolve tudo:**
- **Rápido:** execução em paralelo real, sem overhead
- **Estável:** auto-wait inteligente, sem sleeps
- **Completo:** multi-browser (Chromium, Firefox, WebKit), multi-tab, iframes, shadow DOM
- **API moderna:** async/await nativo, trace viewer, vídeos, screenshots automáticos

```typescript
// Exemplo: login simples, zero sleeps
await page.goto('https://app.example.com/login');
await page.fill('[name="email"]', 'user@example.com');
await page.fill('[name="password"]', 'senha123');
await page.click('button[type="submit"]');
await expect(page).toHaveURL('/dashboard');
```

## Page Object Model (POM): organize o caos

Sem POM, testes viram espaguete. Qualquer mudança no seletor quebra 50 testes.

**Com POM**, cada página/componente vira uma classe:

```typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('[name="email"]', email);
    await this.page.fill('[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL('/dashboard');
  }
}
```

**Teste fica limpo:**

```typescript
test('login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user@example.com', 'senha123');
  await loginPage.expectLoginSuccess();
});
```

**Benefícios:**
- ✅ Mudou o seletor? Atualiza em 1 lugar
- ✅ Testes legíveis, sem detalhes de implementação
- ✅ Reutilização: login em 10 testes, 1 método

## Domain Specific Language (DSL): testes que leem como especificação

POM já ajuda, mas testes ainda ficam verbosos. DSL eleva outro nível: **testes que leem como a especificação funcional**.

```typescript
// dsl/UserJourney.ts
export class UserJourney {
  constructor(
    private loginPage: LoginPage,
    private dashboardPage: DashboardPage,
    private checkoutPage: CheckoutPage
  ) {}

  async realizarCompraCompleta(produto: string) {
    await this.loginPage.fazerLogin('comprador@example.com');
    await this.dashboardPage.buscarProduto(produto);
    await this.dashboardPage.adicionarAoCarrinho();
    await this.checkoutPage.finalizarCompra({
      cartao: '4111111111111111',
      cvv: '123'
    });
    await this.checkoutPage.verificarConfirmacao();
  }
}
```

**Teste final:**

```typescript
test('fluxo completo de compra', async ({ page }) => {
  const journey = new UserJourney(
    new LoginPage(page),
    new DashboardPage(page),
    new CheckoutPage(page)
  );

  await journey.realizarCompraCompleta('Notebook Dell');
});
```

**Resultado:** Product Owner consegue ler e entender o teste. QA foca em casos de borda, não em seletores CSS.

## Controle de Flakiness

Mesmo com Playwright, testes podem ficar instáveis se não tomar cuidado:

### 1. **Sempre use auto-wait do Playwright**
```typescript
// ❌ ERRADO
await page.click('button');
await page.waitForTimeout(2000); // NÃO FAÇA ISSO

// ✅ CERTO
await page.click('button');
await expect(page.locator('.success-message')).toBeVisible();
```

### 2. **Isole testes (fixtures + cleanup)**
```typescript
test.beforeEach(async ({ page }) => {
  await limparDadosDeTeste();
  await criarUsuarioTeste();
});

test.afterEach(async () => {
  await apagarUsuarioTeste();
});
```

### 3. **Use test.step para debug**
```typescript
await test.step('Fazer login', async () => {
  await loginPage.login('user@test.com', 'senha');
});

await test.step('Adicionar produto ao carrinho', async () => {
  await dashboardPage.adicionarAoCarrinho('Produto X');
});
```

Quando falha, você sabe **exatamente** onde.

## Estrutura de projeto

```
tests/
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── CheckoutPage.ts
├── dsl/
│   └── UserJourney.ts
├── fixtures/
│   └── testData.ts
├── utils/
│   └── apiHelpers.ts
└── specs/
    ├── auth.spec.ts
    ├── checkout.spec.ts
    └── smoke.spec.ts
```

## Conclusão

**Playwright + POM + DSL** não é apenas "boas práticas". É a diferença entre:
- Testes que quebram toda semana ↔️ suite estável há meses
- 2 horas de debug ↔️ falha óbvia no trace viewer
- QA reescrevendo testes ↔️ QA focando em cobertura

Se você ainda usa Selenium com sleeps e xpath absoluto, está perdendo tempo (e dinheiro).

---

**Quer que a gente estruture sua automação?**  
[Solicite uma proposta →](/contato)


