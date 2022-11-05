interface ExperienceProps {
  year: string;
  name_project: string;
  description: string;
  link: string;
  private?: boolean;
  toolTip?: string;
  separate?: boolean;
}

export const experiences: ExperienceProps[] = [
  {
    name_project: "Webpage Workfy",
    description: "Simple web page for the company where i worked",
    link: "",
    year: "2021",
    private: true,
    toolTip: "Removed the web page",
  },
  {
    name_project: "Cripto Lab",
    description: "Cryptocurrency viewing platform",
    link: "",
    private: true,
    year: "2021",
    toolTip: "Private platform",
  },
  {
    name_project: "",
    description: "",
    link: "",
    year: "",
    separate: true,
  },
  {
    name_project: "Construtora Patriani",
    description: "Website with integration of the strapi",
    link: "https://construtorapatriani.com.br",
    year: "2022",
  },
  {
    name_project: "Customer Portal",
    description: "Portal used for customers to access",
    link: "https://clientes.construtorapatriani.com.br",
    year: "2022",
  },
  {
    name_project: "Sales Portal",
    description: "Portal used to make sales and to control users",
    link: "https://portal.construtorapatriani.com.br",
    year: "2022",
  },
  {
    name_project: "Mental Health",
    description: "Platform for consultations with psychologists",
    link: "https://canalpsicologia.com.br",
    year: "2022",
  },
];
