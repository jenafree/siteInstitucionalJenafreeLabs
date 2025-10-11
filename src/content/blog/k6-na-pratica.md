---
title: "k6 na prática: performance testing no CI/CD"
description: "Implemente testes de performance no seu pipeline e defina SLOs reais para sua aplicação."
date: "2025-10-05"
tags: ["performance", "k6", "devops"]
---

# k6 na prática: performance testing no CI/CD

Você lança uma feature. Funciona perfeitamente no seu localhost. Passa em todos os testes E2E. Deploy para produção e... **lentidão**. Usuários reclamando, requests levando 3 segundos, taxa de erro subindo.

**Por quê?** Porque testar funcionalidade não basta. Você precisa testar **performance**.

E a melhor ferramenta para isso hoje é **k6**.

## Por que k6 (e não JMeter)?

JMeter foi padrão por anos, mas está ultrapassado:
- Interface GUI pesada e confusa
- Difícil de versionar (XML gigante)
- Não roda fácil em CI/CD
- Curva de aprendizado alta

**k6 resolve tudo:**
- Scripts em **JavaScript/TypeScript** (seu time já sabe)
- CLI leve, roda em qualquer CI
- Métricas nativas (p95, p99, req/s, taxa de erro)
- Integração com Grafana, Prometheus, Datadog

```bash
# Instalar
npm i -D k6

# Rodar
k6 run test.js
```

## Primeiro teste de carga

```javascript
// load-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 },  // ramp-up para 50 usuários
    { duration: '1m', target: 50 },   // mantém 50 usuários por 1 min
    { duration: '30s', target: 0 },   // ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requests < 500ms
    http_req_failed: ['rate<0.01'],   // menos de 1% de erro
  },
};

export default function () {
  const res = http.get('https://api.example.com/products');
  
  check(res, {
    'status 200': (r) => r.status === 200,
    'tempo < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
```

**Rode:**

```bash
k6 run load-test.js
```

**Output:**

```
✓ status 200
✓ tempo < 500ms

http_req_duration..........: avg=287ms min=145ms med=276ms max=498ms p(95)=420ms
http_req_failed............: 0.00%
http_reqs..................: 3000 (50 req/s)
```

**Se falhar os thresholds, k6 retorna exit code 1 → quebra o CI.**

## Tipos de teste

### 1. **Load Test (carga esperada)**
Simula carga normal do dia a dia. Valida que o sistema aguenta o padrão esperado.

```javascript
export let options = {
  vus: 50,         // 50 usuários simultâneos
  duration: '5m',  // por 5 minutos
};
```

### 2. **Stress Test (pico de carga)**
Empurra o sistema até o limite. Descobre onde quebra.

```javascript
export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 },  // dobra a carga
    { duration: '5m', target: 200 },
    { duration: '2m', target: 0 },
  ],
};
```

### 3. **Soak Test (carga prolongada)**
Mantém carga por horas. Identifica **memory leaks** e degradação ao longo do tempo.

```javascript
export let options = {
  vus: 50,
  duration: '2h', // 2 horas de carga constante
};
```

### 4. **Spike Test (pico súbito)**
Simula tráfego repentino (viral, campanha, ataque).

```javascript
export let options = {
  stages: [
    { duration: '10s', target: 1000 }, // 0 → 1000 usuários em 10s
    { duration: '1m', target: 1000 },
    { duration: '10s', target: 0 },
  ],
};
```

## Thresholds: SLO no pipeline

**Service Level Objectives (SLO)** definem o que é aceitável. k6 valida automaticamente:

```javascript
export let options = {
  thresholds: {
    // Latência
    'http_req_duration': ['p(95)<400', 'p(99)<800'],

    // Taxa de erro
    'http_req_failed': ['rate<0.01'], // < 1%

    // Throughput
    'http_reqs': ['rate>100'], // mínimo 100 req/s

    // Por rota específica
    'http_req_duration{name:checkout}': ['p(95)<600'],
  },
};
```

**Se qualquer threshold falhar → CI quebra → deploy é bloqueado.**

## Integrando com CI/CD (GitHub Actions)

```yaml
# .github/workflows/performance.yml
name: Performance Tests

on:
  pull_request:
    branches: [main]

jobs:
  k6-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run k6 test
        uses: grafana/k6-action@v0.3.0
        with:
          filename: tests/load-test.js
          flags: --out json=results.json
      
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: k6-results
          path: results.json
```

**Resultado:** Todo PR roda teste de performance. Se degradar, não mergia.

## Observabilidade: k6 + Grafana

k6 exporta métricas para Grafana Cloud, Prometheus, Datadog, Datadog:

```bash
# Grafana Cloud
k6 run --out cloud test.js

# Prometheus (via remote write)
k6 run --out experimental-prometheus-rw test.js

# InfluxDB
k6 run --out influxdb=http://localhost:8086 test.js
```

**Dashboard em tempo real:**
- Latência (p50, p95, p99)
- Throughput (req/s)
- Taxa de erro
- Virtual Users ativos

## Case real: E-commerce reduziu p95 em 65%

Um e-commerce fazia **deploy sem teste de performance**. Resultado:
- Black Friday: site caiu em 20 min
- Perda estimada: R$ 500k

**Solução:**

1. Criamos load tests para **checkout** (jornada crítica)
2. Definimos SLO: `p(95) < 500ms`, erro `< 0.5%`
3. Rodamos em todo PR (CI/CD)
4. Identificamos gargalos: **N+1 queries no backend**
5. Otimizamos: `p(95)` de 800ms → **280ms**

**Resultado:**
- Black Friday 2024: zero downtime
- Pico de 5000 req/s sustentado
- Conversão aumentou 12%

## Checklist de performance testing

- [ ] Testes de carga para jornadas críticas
- [ ] Thresholds definidos (SLO)
- [ ] Testes rodando em CI/CD
- [ ] Dashboards de observabilidade
- [ ] Smoke test rápido (30s) em todo PR
- [ ] Soak test semanal (2h)
- [ ] Stress test antes de releases grandes

## Conclusão

Performance não é "nice to have". É **requisito funcional**.

Se você não testa performance antes de produção, está **testando em produção com usuários reais**. E isso sai caro.

k6 + CI/CD + SLO = deploy confiante.

---

**Quer implementar performance testing?**  
[Solicite uma consultoria →](/contato)

