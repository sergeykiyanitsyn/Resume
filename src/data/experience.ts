export interface ExperienceHighlight {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  startDate: string;
  endDate?: string;
  period: string;
  role: string;
  focus?: string;
  product: string;
  highlights: ExperienceHighlight[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "white-code",
    company: "Вайт Код",
    startDate: "2024-09",
    period: "09.2024 — сейчас",
    role: "Fullstack QA Engineer",
    focus: "Python Automation",
    product:
      "Продукты в сфере майнинга и криптовалют: управление майнингом, покупки и платежи. Web, мобильные и In-App приложения.",
    highlights: [
      {
        title: "Автоматизация Web и Android.",
        description:
          "Поддерживаю 100+ UI-автотестов критичных пользовательских сценариев.",
      },
      {
        title: "Проверки глубже интерфейса.",
        description:
          "API, WebSocket, данные и взаимодействие микросервисов — в том числе до готовности UI.",
      },
      {
        title: "Инструменты для команды.",
        description:
          "Ускоряю подготовку данных и документации, провожу Code Review и менторю коллег.",
      },
    ],
    technologies: ["Python / Pytest", "Selenium / Appium", "GitLab CI", "SQL"],
  },
  {
    id: "yandex",
    company: "Яндекс",
    startDate: "2022-09",
    endDate: "2024-09",
    period: "09.2022 — 09.2024",
    role: "QA Engineer / Technical Support Engineer",
    product:
      "Яндекс Директ — размещение и показ рекламы. ADSUP, Антифрод, Партнёрский кабинет и API ОРД.",
    highlights: [
      {
        title: "Расследование сбоев.",
        description:
          "Восстанавливал цепочки действий по логам, исследовал ошибки API и синхронизации.",
      },
      {
        title: "Интеграции и данные.",
        description:
          "Анализировал показы и клики, проверял API-сценарии и передавал разработчикам результаты расследований.",
      },
    ],
    technologies: ["REST API", "YQL / ClickHouse", "Logviewer", "DevTools"],
  },
];
