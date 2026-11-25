
export const EVENT_TYPES = {
  FIXED: "fixed",
  FLEXIBLE: "flexible"
};

export const PRIORITIES = {
  URGENT: 1,
  HIGH: 2,
  MEDIUM: 3,
  LOW: 4
};


export const DEFAULT_SETTINGS = {
  timeZone: Intl.DateTimeFormat()
    .resolvedOptions().timeZone,

  weatherCity: "",

  workingStart: "07:00",
  workingEnd: "22:00",

  preferredStart: "09:00",
  preferredEnd: "18:00",

  studyBlockMinutes: 60,
  breakMinutes: 10,
  dailyBufferMinutes: 30
};


export function createInitialData() {
  return {
    schemaVersion: 1,

    events: [],
    tasks: [],
    scheduleBlocks: [],

    settings: {
      ...DEFAULT_SETTINGS
    }
  };
}


export function createEvent({
  title,
  type,
  start,
  end,
  priority = null,
  recurrence = null
}) {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),

    title,
    type,
    start,
    end,

    priority:
      type === EVENT_TYPES.FIXED
        ? null
        : priority,

    recurrence,
    recurrenceExceptions: [],

    externalLinks: [],

    createdAt: now,
    updatedAt: now
  };
}


export function createTask({
  title,
  priority,
  deadline,
  estimatedMinutes
}) {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),

    title,
    priority,
    deadline,

    estimatedMinutes,
    completedMinutes: 0,

    status: "todo",

    externalLinks: [],

    createdAt: now,
    updatedAt: now
  };
}
