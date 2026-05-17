import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",

    // Empty activities = no text under bot name
    activities: [],
  },

  // =========================
  // COMMANDS
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID || null,
  },

  // =========================
  // APPLICATIONS
  // =========================
  applications: {
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],

    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,

    managerRoles: process.env.MANAGER_ROLES?.split(",") || [],
  },

  // =========================
  // EMBEDS / COLORS
  // =========================
  embeds: {
    colors: {
      primary: "#336699",
      secondary: "#2F3136",

      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },

      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },

      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      priority: {
        none: "#95A5A6",
        low: "#3498DB",
        medium: "#2ECC71",
        high: "#F1C40F",
        urgent: "#E74C3C",
      },
    },

    footer: {
      text: "Titan Bot",
      icon: null,
    },

    thumbnail: null,

    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY
  // =========================
  economy: {
    currency: {
      name: "coins",
      namePlural: "coins",
      symbol: "$",
    },

    startingBalance: 0,
    baseBankCapacity: 100000,

    dailyAmount: 100,

    workMin: 10,
    workMax: 100,

    begMin: 5,
    begMax: 50,

    robSuccessRate: 0.4,
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP
  // =========================
  shop: {},

  // =========================
  // TICKETS
  // =========================
  tickets: {
    defaultCategory: null,

    supportRoles: process.env.SUPPORT_ROLES?.split(",") || [],

    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "None",
      },

      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Low",
      },

      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Medium",
      },

      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "High",
      },

      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Urgent",
      },
    },

    defaultPriority: "none",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAYS
  // =========================
  giveaways: {
    defaultDuration: 86400000,

    minimumWinners: 1,
    maximumWinners: 10,

    minimumDuration: 300000,
    maximumDuration: 2592000000,

    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAYS
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION
  // =========================
  verification: {
    defaultMessage:
      "Click the button below to verify yourself and gain access to the server!",

    defaultButtonText: "Verify",

    autoVerify: {
      defaultCriteria: "none",

      defaultAccountAgeDays: 7,

      serverSizeThreshold: 1000,

      minAccountAge: 1,
      maxAccountAge: 365,

      sendDMNotification: true,

      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately",
      },
    },

    verificationCooldown: 5000,
    maxVerificationAttempts: 3,
    attemptWindow: 60000,

    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,

    cooldownCleanupInterval: 300000,

    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,

    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE
  // =========================
  welcome: {
    defaultWelcomeMessage:
      "Welcome {user} to {server}! We now have {memberCount} members!",

    defaultGoodbyeMessage:
      "{user} has left the server. We now have {memberCount} members.",

    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTERS
  // =========================
  counters: {
    defaults: {
      name: "{name} Counter",
      description: "Server {name} counter",
      type: "voice",
      channelName: "{name}-{count}",
    },

    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },

    messages: {
      created: "✅ Created counter **{name}**",
      deleted: "🗑️ Deleted counter **{name}**",
      updated: "🔄 Updated counter **{name}**",
    },

    types: {
      members: {
        name: "👥 Members",
        description: "Total members in the server",

        getCount: (guild) => guild.memberCount.toString(),
      },

      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",

        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },

      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",

        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC MESSAGES
  // =========================
  messages: {
    noPermission: "You do not have permission to use this command.",
    cooldownActive: "Please wait {time} before using this command again.",
    errorOccurred: "An error occurred while executing this command.",
    missingPermissions:
      "I am missing required permissions to perform this action.",
    commandDisabled: "This command has been disabled.",
    maintenanceMode: "The bot is currently in maintenance mode.",
  },

  // =========================
  // FEATURES
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};

// =========================
// VALIDATION
// =========================
export function validateConfig() {
  const errors = [];

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push(
      "Bot token is required (DISCORD_TOKEN or TOKEN environment variable)"
    );
  }

  if (!process.env.CLIENT_ID) {
    errors.push(
      "Client ID is required (CLIENT_ID environment variable)"
    );
  }

  if (process.env.NODE_ENV === "production") {
    if (!process.env.POSTGRES_HOST) {
      errors.push("POSTGRES_HOST is required in production");
    }

    if (!process.env.POSTGRES_USER) {
      errors.push("POSTGRES_USER is required in production");
    }

    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("POSTGRES_PASSWORD is required in production");
    }
  }

  return errors;
}

// =========================
// VALIDATE ON STARTUP
// =========================
const configErrors = validateConfig();

if (configErrors.length > 0) {
  logger.error(configErrors.join("\n"));

  if (process.env.NODE_ENV === "production") {
    throw new Error("Invalid bot configuration");
  }
}

// =========================
// HELPERS
// =========================
export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  if (!path) {
    return parseInt(fallback.replace("#", ""), 16);
  }

  if (typeof path === "number") {
    return path;
  }

  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.slice(1), 16);
  }

  const value = path
    .split(".")
    .reduce((obj, key) => obj?.[key], botConfig.embeds.colors);

  if (!value) {
    return parseInt(fallback.replace("#", ""), 16);
  }

  return typeof value === "string"
    ? parseInt(value.slice(1), 16)
    : value;
}

export function getRandomColor() {
  const flatten = (obj) =>
    Object.values(obj).flatMap((v) =>
      typeof v === "string" ? [v] : flatten(v)
    );

  const colors = flatten(botConfig.embeds.colors);

  return parseInt(
    colors[Math.floor(Math.random() * colors.length)].replace("#", ""),
    16
  );
}

export default botConfig;
