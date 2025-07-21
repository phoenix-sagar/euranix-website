export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'core-development',
    title: '🌐 Core Software Development Services',
    description: 'Comprehensive software development solutions for modern businesses',
    icon: '💻',
    services: [
      {
        id: 'custom-development',
        title: 'Custom Software Development',
        description: 'Tailored software solutions for your specific business needs',
        icon: '🛠️',
        items: [
          'Web, Android & iOS app development',
          'Firmware development for IoT & embedded systems',
          'ERP & CRM systems',
          'Scalable microservices architecture',
          'API development & integrations'
        ]
      },
      {
        id: 'architecture-consultancy',
        title: 'Software Architecture & Consultancy',
        description: 'Expert guidance on software architecture and technology decisions',
        icon: '🏗️',
        items: [
          'Software architecture design & review',
          'Technology stack consultation',
          'Cloud-native design & migration',
          'Scalability, performance, and HA',
          'Legacy system transformation'
        ]
      },
      {
        id: 'open-source',
        title: 'Open Source Customization & Deployment',
        description: 'Customization and deployment of proven open source solutions',
        icon: '🔓',
        items: [
          'Mifos (Microfinance)',
          'Dolibarr (ERP/CRM)',
          'Matrix + Element (Communication)',
          'ERPNext',
          'Odoo',
          'Zammad / UVDesk / osTicket (Helpdesk)',
          'MediaWiki / Wiki.js (Knowledge base)',
          'Nextcloud (Collaboration)',
          'OnlyOffice / Collabora (Docs)',
          'LibreNMS / Zabbix / Prometheus (Monitoring)',
          'Metabase / Superset (Analytics)',
          'Invoice Ninja / Kill Bill (Billing)',
          'SuiteCRM / EspoCRM (CRM)',
          'Rocket.Chat / Mattermost (Chat)'
        ]
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: '🔐 Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: '🛡️',
    services: [
      {
        id: 'security-assessment',
        title: 'Security Assessment & Testing',
        description: 'Thorough security evaluation and vulnerability testing',
        icon: '🔍',
        items: [
          'Vulnerability assessments',
          'Pen testing (network, web, app)',
          'Source code review',
          'Security architecture review'
        ]
      },
      {
        id: 'security-service',
        title: 'Security as a Service',
        description: 'Ongoing security management and monitoring',
        icon: '🔒',
        items: [
          'VPN setup',
          'Firewall / IDS/IPS',
          'Linux server hardening',
          'Centralized logging (ELK, Loki)',
          'Identity mgmt (OAuth2, SSO, LDAP, Keycloak)',
          'Patch mgmt, endpoint security'
        ]
      },
      {
        id: 'compliance',
        title: 'Compliance & Risk Management',
        description: 'Regulatory compliance and risk assessment services',
        icon: '📋',
        items: [
          'GDPR, HIPAA, etc.',
          'Cyber risk audits',
          'Policy development',
          'Incident response planning'
        ]
      }
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: '☁️ Cloud & Infrastructure Services',
    description: 'Modern cloud solutions and infrastructure management',
    icon: '🌩️',
    services: [
      {
        id: 'cloud-services',
        title: 'Cloud Services',
        description: 'Comprehensive cloud platform solutions',
        icon: '☁️',
        items: [
          'AWS / GCP / Azure',
          'Private cloud (Proxmox, OpenStack)',
          'Kubernetes orchestration',
          'CI/CD pipeline (GitLab CI, Jenkins)'
        ]
      },
      {
        id: 'devops',
        title: 'DevOps & Automation',
        description: 'Streamlined development and operations processes',
        icon: '⚙️',
        items: [
          'Infrastructure as Code (Terraform, Ansible)',
          'Monitoring (Grafana, Prometheus)',
          'Backup & DR planning',
          'Config management'
        ]
      }
    ]
  },
  {
    id: 'saas-managed',
    title: '📊 SaaS & Managed Solutions',
    description: 'Ready-to-use SaaS platforms and managed services',
    icon: '🚀',
    services: [
      {
        id: 'saas-platforms',
        title: 'SaaS Platforms',
        description: 'Cloud-based software solutions',
        icon: '💼',
        items: [
          'Email mgmt system',
          'Email/SMS gateway',
          'Backup SaaS',
          'Central log SaaS',
          'Helpdesk SaaS',
          'Wiki SaaS',
          'Billing & subscription SaaS',
          'CRM/Sales platform',
          'Auth-as-a-Service'
        ]
      },
      {
        id: 'digital-office',
        title: 'Digital Office',
        description: 'Complete digital workplace solutions',
        icon: '🏢',
        items: [
          'Company intranet',
          'Digital docs',
          'Remote infra',
          'Email/chat/video collab'
        ]
      }
    ]
  },
  {
    id: 'industry-specific',
    title: '⚡ Industry-Specific Solutions',
    description: 'Specialized solutions for specific industries',
    icon: '🏭',
    services: [
      {
        id: 'renewable-energy',
        title: 'Renewable Energy',
        description: 'Smart energy management solutions',
        icon: '🌱',
        items: [
          'Solar monitoring',
          'Energy audits',
          'Smart grid software',
          'IoT for energy efficiency',
          'Predictive maintenance',
          'Billing/analytics'
        ]
      },
      {
        id: 'microfinance',
        title: 'Microfinance / Fintech',
        description: 'Financial technology solutions',
        icon: '💰',
        items: [
          'Mifos X / Fineract',
          'Loan systems',
          'Mobile wallets',
          'Agent banking',
          'KYC automation'
        ]
      }
    ]
  },
  {
    id: 'data-ai',
    title: '📈 Data Science, AI & Automation',
    description: 'Advanced analytics and artificial intelligence solutions',
    icon: '🤖',
    services: [
      {
        id: 'data-ai-services',
        title: 'AI & Data Solutions',
        description: 'Intelligent data processing and automation',
        icon: '🧠',
        items: [
          'Analytics dashboards',
          'Predictive models',
          'AI/ML (NLP, rec engines)',
          'Business process automation',
          'RPA',
          'Chatbots'
        ]
      }
    ]
  },
  {
    id: 'consulting',
    title: '🧠 Consulting & Advisory',
    description: 'Strategic technology consulting and advisory services',
    icon: '💡',
    services: [
      {
        id: 'consulting-services',
        title: 'Strategic Consulting',
        description: 'Expert guidance for technology decisions',
        icon: '🎯',
        items: [
          'Digital strategy',
          'IT planning',
          'Product roadmapping',
          'OSS strategy',
          'Cybersecurity advisory',
          'AI, IoT, Blockchain'
        ]
      }
    ]
  },
  {
    id: 'embedded-iot',
    title: '🔌 Embedded Systems & IoT',
    description: 'Internet of Things and embedded system solutions',
    icon: '📡',
    services: [
      {
        id: 'iot-services',
        title: 'IoT & Embedded Solutions',
        description: 'Connected device and embedded system development',
        icon: '🔗',
        items: [
          'IoT firmware',
          'Device monitoring',
          'Smart agriculture',
          'Custom hardware-software',
          'Edge computing'
        ]
      }
    ]
  },
  {
    id: 'project-support',
    title: '📦 Project & Support Services',
    description: 'Comprehensive project management and support services',
    icon: '🛠️',
    services: [
      {
        id: 'support-services',
        title: 'Support & Management',
        description: 'Ongoing support and project management',
        icon: '🔧',
        items: [
          'Project management',
          'Technical support',
          'Maintenance services',
          'Training and documentation'
        ]
      }
    ]
  }
];

export const countryData = [
  { country: "US", value: 6, name: "United States" },
  { country: "FR", value: 7, name: "France" },
  { country: "MR", value: 1, name: "Mauritania" },
  { country: "GH", value: 1, name: "Ghana" },
  { country: "NG", value: 1, name: "Nigeria" },
  { country: "ZA", value: 2, name: "South Africa" },
  { country: "ES", value: 1, name: "Spain" },
  { country: "IT", value: 1, name: "Italy" },
  { country: "DE", value: 1, name: "Germany" },
  { country: "DK", value: 2, name: "Denmark" },
  { country: "ID", value: 1, name: "Indonesia" }
];