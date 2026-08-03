import type { LucideIcon } from 'lucide-react';

export type FieldType = 'String' | 'Int' | 'Boolean' | 'Text';

export type FieldConfig = {
  name: string;
  type: FieldType;
  isId?: boolean;
  optional?: boolean;
  default?: boolean;
  relationTo?: string;
};

export type ModelSchema = {
  icon: LucideIcon;
  fields: FieldConfig[];
};

export type AdminSchema = Record<string, ModelSchema>;

export const SCHEMA: AdminSchema = {
  User: {
    icon: require('lucide-react').Users,
    fields: [
      { name: 'id', type: 'Int', isId: true },
      { name: 'email', type: 'String' },
      { name: 'name', type: 'String', optional: true }
    ]
  },
  Post: {
    icon: require('lucide-react').FileText,
    fields: [
      { name: 'id', type: 'Int', isId: true },
      { name: 'title', type: 'String' },
      { name: 'content', type: 'Text', optional: true },
      { name: 'published', type: 'Boolean', default: false },
      { name: 'authorId', type: 'Int', relationTo: 'User' }
    ]
  },
  Developer: {
    icon: require('lucide-react').Code,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'name', type: 'String' },
      { name: 'title', type: 'String' },
      { name: 'bio', type: 'Text' },
      { name: 'location', type: 'String', optional: true },
      { name: 'email', type: 'String', optional: true },
      { name: 'phone', type: 'String', optional: true },
      { name: 'availability', type: 'String', optional: true },
      { name: 'github', type: 'String', optional: true },
      { name: 'linkedin', type: 'String', optional: true },
      { name: 'portfolio', type: 'String', optional: true }
    ]
  },
  DeveloperStat: {
    icon: require('lucide-react').BarChart,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'label', type: 'String' },
      { name: 'value', type: 'String' },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  },
  Experience: {
    icon: require('lucide-react').Briefcase,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'role', type: 'String' },
      { name: 'company', type: 'String' },
      { name: 'period', type: 'String' },
      { name: 'location', type: 'String', optional: true },
      { name: 'type', type: 'String' },
      { name: 'description', type: 'Text' },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  },
  Achievement: {
    icon: require('lucide-react').Award,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'content', type: 'Text' },
      { name: 'experienceId', type: 'String', relationTo: 'Experience' }
    ]
  },
  ExperienceSkill: {
    icon: require('lucide-react').Star,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'name', type: 'String' },
      { name: 'experienceId', type: 'String', relationTo: 'Experience' }
    ]
  },
  SkillCategory: {
    icon: require('lucide-react').Layers,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'name', type: 'String' },
      { name: 'icon', type: 'String', optional: true },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  },
  Skill: {
    icon: require('lucide-react').Terminal,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'name', type: 'String' },
      { name: 'level', type: 'Int' },
      { name: 'categoryId', type: 'String', relationTo: 'SkillCategory' }
    ]
  },
  Project: {
    icon: require('lucide-react').Folder,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'title', type: 'String' },
      { name: 'category', type: 'String' },
      { name: 'image', type: 'String', optional: true },
      { name: 'description', type: 'Text' },
      { name: 'github', type: 'String', optional: true },
      { name: 'demo', type: 'String', optional: true },
      { name: 'featured', type: 'Boolean', default: false },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  },
  ProjectTechnology: {
    icon: require('lucide-react').Cpu,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'name', type: 'String' },
      { name: 'projectId', type: 'String', relationTo: 'Project' }
    ]
  },
  Education: {
    icon: require('lucide-react').BookOpen,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'degree', type: 'String' },
      { name: 'school', type: 'String' },
      { name: 'year', type: 'String' },
      { name: 'details', type: 'Text' },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  },
  Certification: {
    icon: require('lucide-react').CheckCircle,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'name', type: 'String' },
      { name: 'issuer', type: 'String' },
      { name: 'date', type: 'String' },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  },
  Testimonial: {
    icon: require('lucide-react').MessageSquare,
    fields: [
      { name: 'id', type: 'String', isId: true },
      { name: 'quote', type: 'Text' },
      { name: 'author', type: 'String' },
      { name: 'title', type: 'String' },
      { name: 'developerId', type: 'String', relationTo: 'Developer' }
    ]
  }
};

export const generateCuid = () => 'c' + Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);

export const generateIntId = (existingData: Array<{ id: number }>) =>
  existingData.length > 0 ? Math.max(...existingData.map(d => d.id)) + 1 : 1;

export type AdminModel = keyof typeof SCHEMA;

export const INITIAL_DB = {
  User: [{ id: 1, email: 'admin@example.com', name: 'Admin User' }],
  Post: [{ id: 1, title: 'Hello World', content: 'First post content!', published: true, authorId: 1 }],
  Developer: [{ id: 'clm9u8x0v000008l41', name: 'John Doe', title: 'Full Stack Engineer', bio: 'Passionate about React and Node.', location: 'Paris', email: 'john@doe.com' }],
  DeveloperStat: [],
  Experience: [],
  Achievement: [],
  ExperienceSkill: [],
  SkillCategory: [],
  Skill: [],
  Project: [],
  ProjectTechnology: [],
  Education: [],
  Certification: [],
  Testimonial: []
};
