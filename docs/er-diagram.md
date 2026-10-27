
# QaytaTap — ER-диаграмма

## Мақсаты
Бұл диаграмма дерекқордың негізгі кестелері мен олардың байланысын көрсетеді.

```mermaid
erDiagram
    USERS ||--o{ REPORTS : creates
    CATEGORIES ||--o{ REPORTS : contains

    USERS {
        int id PK
        varchar name
        varchar email UK
        varchar password
        timestamp created_at
    }

    CATEGORIES {
        int id PK
        varchar name
    }

    REPORTS {
        int id PK
        int user_id FK
        int category_id FK
        varchar title
        text description
        varchar type
        varchar location
        date event_date
        varchar status
        timestamp created_at
    }
```

## Кестелердің сипаттамасы

- **USERS** — пайдаланушылар туралы ақпарат.
- **CATEGORIES** — заттардың санаттары.
- **REPORTS** — жоғалған және табылған заттар туралы хабарландырулар.

## Байланыстар

- Бір пайдаланушы бірнеше хабарландыру жариялай алады.
- Бір санатта бірнеше хабарландыру болуы мүмкін.
- `user_id` — пайдаланушы кестесіне сілтеме.
- `category_id` — санаттар кестесіне сілтеме.

**PK** — негізгі кілт, **FK** — сыртқы кілт, **UK** — бірегей мән.
