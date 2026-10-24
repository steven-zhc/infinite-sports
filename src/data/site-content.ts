export type Locale = "en" | "zh";

export interface SiteContent {
  locale: Locale;
  lang: string;
  title: string;
  description: string;
  switchLabel: string;
  nav: {
    programs: string;
    campuses: string;
    team: string;
    gallery: string;
    contact: string;
    enroll: string;
  };
  hero: {
    eyebrow: string;
    lineOne: string;
    lineTwo: string;
    intro: string;
    primary: string;
    secondary: string;
    campusStat: string;
    levelsStat: string;
    ticker: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    philosophyLabel: string;
    philosophy: string;
    philosophyBody: string;
  };
  programs: {
    eyebrow: string;
    title: string;
    intro: string;
    ask: string;
    items: Array<{
      number: string;
      title: string;
      tag: string;
      description: string;
      focus: string[];
    }>;
    levelsLabel: string;
    levels: Array<{ name: string; ages: string; description: string }>;
  };
  campuses: {
    eyebrow: string;
    title: string;
    intro: string;
    visit: string;
    items: Array<{ name: string; address: string }>;
  };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ initials: string; title: string; description: string }>;
    missionLabel: string;
    mission: string;
    visionLabel: string;
    vision: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    captions: string[];
    alts: string[];
    quote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    button: string;
    personLabel: string;
    person: string;
    coachLabel: string;
    coach: string;
    phoneLabel: string;
    campusesLabel: string;
    campuses: string;
  };
  footer: {
    tagline: string;
    photos: string;
  };
}

export const englishContent: SiteContent = {
  locale: "en",
  lang: "en",
  title: "Infinite Sports | Youth Sports Academy in Houston",
  description:
    "Professional youth basketball, volleyball, athletic performance, private training, camps, and competitions across Katy, Cypress, and China Town in Houston.",
  switchLabel: "中文",
  nav: {
    programs: "Programs",
    campuses: "Campuses",
    team: "Why us",
    gallery: "Gallery",
    contact: "Contact",
    enroll: "Enroll",
  },
  hero: {
    eyebrow: "Youth sports education in Houston",
    lineOne: "Greatness",
    lineTwo: "starts young.",
    intro:
      "Professional coaching, science-backed development, and a positive place where young athletes build skill, confidence, discipline, and team spirit.",
    primary: "Explore enrollment",
    secondary: "View our programs",
    campusStat: "Houston campuses",
    levelsStat: "Basketball levels",
    ticker: ["Move", "Train", "Compete", "Grow"],
  },
  about: {
    eyebrow: "About Infinite Sports",
    title: "We build athletes, not just players.",
    paragraphs: [
      "Founded in 2022 and headquartered in Houston, Texas, Infinite Sports is a professional academy focused on youth sports education, basketball development, and sport-specific athletic performance.",
      "With training locations in Katy, Cypress, and China Town, we serve young athletes of different ages and ability levels through structured, science-based coaching. Basketball is at our core, supported by athletic performance, volleyball, private training, camps, and youth competitions.",
    ],
    philosophyLabel: "Our philosophy",
    philosophy: "We don’t just train players. We build athletes.",
    philosophyBody:
      "Great sports education develops more than technique. We nurture physical ability, resilience, rules awareness, character, confidence, discipline, and teamwork in a safe and positive environment.",
  },
  programs: {
    eyebrow: "Our programs",
    title: "A clear path for every athlete.",
    intro:
      "Age-appropriate instruction connects technical skills, athletic performance, healthy habits, and real-game experience for lasting development.",
    ask: "Ask about this program",
    items: [
      {
        number: "01",
        title: "Basketball Development",
        tag: "Ages 5–13",
        description:
          "A three-level pathway that builds fundamentals, athletic ability, game awareness, teamwork, and competitive performance.",
        focus: ["Foundation", "Development", "Performance"],
      },
      {
        number: "02",
        title: "Athletic Performance",
        tag: "Movement + Strength",
        description:
          "Training matched to each growth stage, creating a physical foundation for basketball, volleyball, tennis, badminton, and more.",
        focus: ["Coordination & agility", "Speed & strength", "Balance & core stability"],
      },
      {
        number: "03",
        title: "Private Training",
        tag: "Personalized",
        description:
          "Individual plans based on each athlete’s foundation, technical profile, and goals to improve specific weaknesses and performance.",
        focus: ["Skill assessment", "Body control", "Targeted development"],
      },
      {
        number: "04",
        title: "Volleyball Development",
        tag: "Skill + Teamwork",
        description:
          "A systematic introduction to volleyball through foundational technique, movement, team play, and game-based training.",
        focus: ["Core technique", "Court movement", "Team play"],
      },
      {
        number: "05",
        title: "Camps & Competitions",
        tag: "Train + Compete",
        description:
          "Seasonal camps, skill intensives, campus events, and youth basketball competitions that turn training into real experience.",
        focus: ["Holiday camps", "Skill intensives", "Youth competitions"],
      },
    ],
    levelsLabel: "Basketball growth pathway",
    levels: [
      {
        name: "Level 1 · Foundation",
        ages: "Ages 5–7",
        description:
          "Build enjoyment, ball feel, coordination, fundamental skills, confidence, rules awareness, and positive sports habits.",
      },
      {
        name: "Level 2 · Development",
        ages: "Ages 8–10",
        description:
          "Advance ball-handling, shooting, footwork, offense and defense through athletic training and small-sided competition.",
      },
      {
        name: "Level 3 · Performance",
        ages: "Ages 10–13",
        description:
          "Strengthen advanced technique, physical play, tactical understanding, and game decisions for school teams and higher-level competition.",
      },
    ],
  },
  campuses: {
    eyebrow: "Three Houston campuses",
    title: "Train close to home.",
    intro:
      "Choose the location that works for your family. Contact us before your first visit for the current class schedule and the best starting level.",
    visit: "Plan your first visit",
    items: [
      { name: "Cypress", address: "15235 Spring Cypress Rd, Cypress, TX 77429" },
      { name: "Katy", address: "21915 Royal Montreal Dr, Katy, TX 77450" },
      { name: "China Town", address: "8800 W Sam Houston Pkwy S, Houston, TX 77099" },
    ],
  },
  team: {
    eyebrow: "Why Infinite Sports",
    title: "Development designed for the long game.",
    intro:
      "Our coaching team combines sports education, athlete experience, and youth development expertise with a strong commitment to safe, scientific training.",
    items: [
      {
        initials: "01",
        title: "Professional Coaches",
        description:
          "Coaches with sports education backgrounds, athlete experience, and youth training expertise.",
      },
      {
        initials: "02",
        title: "Level-Based Teaching",
        description:
          "Placement by age, technical level, and athletic ability creates a continuous development path.",
      },
      {
        initials: "03",
        title: "Skill + Performance",
        description:
          "Technique and athletic development work together to improve movement quality, efficiency, and body control.",
      },
      {
        initials: "04",
        title: "Progress Assessment",
        description:
          "Skill and physical evaluations track growth and guide training adjustments and level advancement.",
      },
    ],
    missionLabel: "Our mission",
    mission:
      "Help more young people enjoy movement, build healthy lifestyles, and gain confidence, discipline, responsibility, and team spirit through professional, scientific sports education.",
    visionLabel: "Our vision",
    vision:
      "Become a youth sports education brand Houston families trust, with a standardized, systematic, and sustainable athlete development pathway.",
  },
  gallery: {
    eyebrow: "Inside the work",
    title: "Energy you can feel.",
    intro: "Real focus. Real repetitions. Real confidence taking shape.",
    captions: ["Teamwork in motion", "Ready for the next rep", "Coaching that connects"],
    alts: [
      "Volleyball players celebrating together on an indoor court",
      "Basketball on a polished indoor court",
      "Young athletes listening to their coach",
    ],
    quote: "Professional training. Scientific growth. Whole-person development.",
  },
  contact: {
    eyebrow: "Start here",
    title: "Find the right starting point.",
    intro:
      "Tell us your athlete’s age, sports background, preferred campus, and goals. We’ll help you choose a program and level.",
    button: "Enrollment form coming soon",
    personLabel: "Primary contact",
    person: "Ricki",
    coachLabel: "Coaching contact",
    coach: "Coach Wang",
    phoneLabel: "Call or text",
    campusesLabel: "Campuses",
    campuses: "Katy · Cypress · China Town",
  },
  footer: {
    tagline: "Greatness starts young.",
    photos:
      "Photos: cottonbro studio / Pexels, Vince Fleming & Lesli Whitecotton / Unsplash.",
  },
};

export const chineseContent: SiteContent = {
  locale: "zh",
  lang: "zh-CN",
  title: "浩瀚体育｜休斯顿青少年体育教育",
  description:
    "浩瀚体育在休斯顿 Katy、Cypress 和中国城提供青少年篮球、排球、专项体能、私教、训练营及青少年赛事。",
  switchLabel: "EN",
  nav: {
    programs: "课程",
    campuses: "校区",
    team: "专业优势",
    gallery: "训练风采",
    contact: "联系我们",
    enroll: "报名咨询",
  },
  hero: {
    eyebrow: "休斯顿青少年体育教育",
    lineOne: "卓越始于",
    lineTwo: "少年。",
    intro:
      "专业训练、科学成长、全面发展。让青少年在积极安全的环境中提升技术，收获自信、纪律与团队精神。",
    primary: "报名咨询",
    secondary: "查看课程",
    campusStat: "休斯顿训练校区",
    levelsStat: "篮球分级课程",
    ticker: ["运动", "训练", "竞技", "成长"],
  },
  about: {
    eyebrow: "关于浩瀚体育",
    title: "我们培养的不只是球员，更是运动员。",
    paragraphs: [
      "浩瀚体育（Infinite Sports）成立于 2022 年，总部位于美国德克萨斯州休斯顿，是一家专注于青少年体育教育、篮球技术培训及专项运动能力发展的专业体育培训机构。",
      "目前，我们在休斯顿地区设有 Katy、Cypress、中国城三大训练校区，为不同年龄和运动水平的青少年提供系统化、科学化、专业化的训练。以篮球为核心，课程涵盖青少年专项体能、排球、个人专项训练、体育训练营及青少年竞技赛事。",
    ],
    philosophyLabel: "我们的教育理念",
    philosophy: "We don’t just train players. We build athletes.",
    philosophyBody:
      "优秀的体育教育不仅是技术的传授，更是对身体素质、心理韧性、规则意识和个人品格的长期培养。我们帮助每一位孩子建立自信、纪律意识和团队精神。",
  },
  programs: {
    eyebrow: "核心课程体系",
    title: "为每位学员建立清晰的成长路径。",
    intro:
      "根据年龄与运动基础，将专项技术、身体素质、运动习惯和实战经验相结合，支持青少年长期成长。",
    ask: "咨询此课程",
    items: [
      {
        number: "01",
        title: "青少年篮球培训",
        tag: "5–13 岁",
        description:
          "三级篮球成长体系，从兴趣与基本技术，到专项体能、攻防意识、比赛决策与综合竞技表现。",
        focus: ["初级基础", "中级提高", "高级竞技"],
      },
      {
        number: "02",
        title: "青少年专项体能",
        tag: "运动能力基础",
        description:
          "根据儿童及青少年的生长发育阶段，为篮球、排球、网球、羽毛球等项目建立身体能力基础。",
        focus: ["协调与灵敏", "速度与力量", "平衡与核心稳定"],
      },
      {
        number: "03",
        title: "个人专项训练",
        tag: "个性化训练",
        description:
          "根据学员的运动基础、技术特点和成长目标制定计划，针对性改善技术弱项、身体控制与竞技表现。",
        focus: ["能力评估", "身体控制", "针对性提升"],
      },
      {
        number: "04",
        title: "排球培训",
        tag: "技术与配合",
        description:
          "通过基础技术、移动能力、团队配合和实战训练，帮助青少年系统建立排球运动能力。",
        focus: ["基础技术", "移动能力", "团队配合"],
      },
      {
        number: "05",
        title: "训练营与青少年赛事",
        tag: "训练与实战",
        description:
          "定期组织假期训练营、技能强化课程、校区交流赛及青少年篮球比赛，提供展示与实战成长机会。",
        focus: ["假期训练营", "技能强化", "青少年赛事"],
      },
    ],
    levelsLabel: "篮球成长课程",
    levels: [
      {
        name: "Level 1 · 初级基础班",
        ages: "5–7 岁",
        description:
          "从兴趣出发，培养球感、协调能力与基础技术，帮助孩子建立自信、规则意识和良好运动习惯。",
      },
      {
        name: "Level 2 · 中级提高班",
        ages: "8–10 岁",
        description:
          "系统提升运球、投篮、脚步与攻防技术，结合专项体能和小组对抗，建立真正的篮球运动能力。",
      },
      {
        name: "Level 3 · 高级竞技班",
        ages: "10–13 岁",
        description:
          "强化高阶技术、身体对抗、战术理解与比赛决策，为校队选拔及更高水平比赛做好准备。",
      },
    ],
  },
  campuses: {
    eyebrow: "休斯顿三大校区",
    title: "就近选择训练地点。",
    intro:
      "请选择适合您家庭的校区。首次到访前请联系我们，获取最新课程安排并确认适合孩子的起始级别。",
    visit: "预约首次到访",
    items: [
      { name: "Cypress 校区", address: "15235 Spring Cypress Rd, Cypress, TX 77429" },
      { name: "Katy 校区", address: "21915 Royal Montreal Dr, Katy, TX 77450" },
      { name: "中国城校区", address: "8800 W Sam Houston Pkwy S, Houston, TX 77099" },
    ],
  },
  team: {
    eyebrow: "我们的专业优势",
    title: "着眼长期发展的训练体系。",
    intro:
      "教练团队具备专业体育教育背景、运动员经历及青少年训练经验，重视科学教学与训练安全。",
    items: [
      {
        initials: "01",
        title: "专业教练团队",
        description: "融合专业体育教育背景、运动员经历与青少年训练经验。",
      },
      {
        initials: "02",
        title: "科学分级教学",
        description: "根据年龄、技术水平和运动能力合理分班，建立连续成长路径。",
      },
      {
        initials: "03",
        title: "技术与体能结合",
        description: "在教授专项动作的同时，提高动作质量、运动效率和身体控制能力。",
      },
      {
        initials: "04",
        title: "阶段性能力评估",
        description: "通过技术及身体素质评估追踪成长，为训练调整与等级晋升提供依据。",
      },
    ],
    missionLabel: "我们的使命",
    mission:
      "通过专业、科学、系统的体育教育，让更多青少年享受运动乐趣，建立健康生活方式，并在运动中获得自信、纪律、责任感与团队精神。",
    visionLabel: "我们的愿景",
    vision:
      "成为休斯顿地区值得家庭信赖的青少年体育教育品牌，逐步建立标准化、系统化、可持续发展的青少年运动培训体系。",
  },
  gallery: {
    eyebrow: "训练风采",
    title: "看得见的专注与能量。",
    intro: "每一次专注训练、每一次高质量重复，都在塑造真正的自信。",
    captions: ["在配合中成长", "准备好迎接下一次训练", "有温度的专业指导"],
    alts: ["室内球场上共同庆祝的排球运动员", "室内木地板球场上的篮球", "听教练指导的青少年运动员"],
    quote: "专业训练 · 科学成长 · 全面发展",
  },
  contact: {
    eyebrow: "联系我们",
    title: "为孩子找到合适的起点。",
    intro:
      "请告诉我们孩子的年龄、运动基础、意向校区与训练目标，我们会帮助您选择合适的课程和级别。",
    button: "在线报名表即将上线",
    personLabel: "联系人",
    person: "Ricki",
    coachLabel: "教练联系",
    coach: "Coach Wang",
    phoneLabel: "电话 / 短信",
    campusesLabel: "训练校区",
    campuses: "Katy · Cypress · 中国城",
  },
  footer: {
    tagline: "卓越始于少年。",
    photos:
      "图片来源：cottonbro studio / Pexels，Vince Fleming 与 Lesli Whitecotton / Unsplash。",
  },
};
