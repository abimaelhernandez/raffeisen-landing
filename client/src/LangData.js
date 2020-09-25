const projectBody = {
  en: {
    shareTo: 'To where would you like to share?',
    learnMore: 'Learn more about Raiffeisen! #Raiffeisen',
    close: 'Close',
    navigation: {
      sections: [{
        title: 'Home',
        ref: 'home'
      },
      {
        title: 'About us',
        ref: 'about-us'
      },
      {
        title: 'Services',
        ref: 'services'
      },
      {
        title: 'Tools',
        ref: 'tools'
      },
      {
        title: 'Coverage',
        ref: 'coverage'
      }],
      contact: {
        title: 'Contact',
        ref: 'contact'
      }
    },
    mainCarouselInfo: [
      {
        id: 1,
        title : 'We generate processes that add value',
        mainParahraph: 'Established in 2009 according to the standards of the German Confederation of Cooperatives (DGRV).',
        secondaryParagraph: 'We support the development and strengthening of the inclusive finance sector in Latin America.'
      },
      {
        id: 2,
        title: 'Smart planning of decision-making processes-DGRV'
      },
      {
        id: 3,
        title: 'Design of customized solutions-DGRV'
      }
    ],
    inovationBanner: {
      title: 'Management model-DGRV',
      mainParahraph: 'We base our services on tested methods that are tailored to the needs of our clients resulting from years of experience in the sector and a dedicated, specialized team of consultants.',
      secondaryParagraph: 'Supporting our process are technologically innovative tools that promote strategic and integral management.',
      topPhrase: 'Innovation for strategic development-DGRV'
    },
    servicesObject: [
      {
        id: 1,
        name: 'consult',
        backgroundColor: '#fff',
        imageBackground: '../../assets/images/red_light_bulb-min.jpg',
        icon: '../assets/icons/Consultoria_new.svg',
        alt: 'Consulting.',
        mainParahraph: 'Based on balanced scorecard methodology, four key perspectives strategically cover:',
        secondaryParagraph: 'that together promote reasoned and intelligent decision-making at all levels.',
        listItems: {
          1: 'Processes of diagnosis',
          2: 'The definition of objectives and strategies',
          3: 'Projects or plans of action'
        }
      },
      {
        id: 2,
        name: 'analytics',
        backgroundColor: '#fff',
        imageBackground: '../../assets/images/graph-min.jpg',
        icon: '../assets/icons/Analytics_new.svg',
        alt: 'Analitics.',
        mainParahraph: 'Platforms for the analysis of information accurately representing the operative, commercial, and financial reality of the organization.',
        secondaryParagraph: 'Through the design of dashboards, the visualization of information enables timely and efficient decision-making that favorably impacts the reality analyzed.',
        listItems: {
          1: 'Through the design of control panels, aleema visualizes information for the timely and efficient decision-making that favorably impacts the analyzed reality.'
        }
      },
      {
        id: 3,
        name: 'training',
        backgroundColor: '#fff',
        imageBackground: '../../assets/images/ladder-min.jpg',
        icon: '../assets/icons/Training_new.svg',
        alt: 'Training.',
        mainParahraph: 'Portfolio of modular topics that promote capacitation in strategic areas relevant to cooperatives.',
        secondaryParagraph: 'Three formats of knowledge transfer that can be are adapted to all levels and profiles:',
        listItems: {
          1: 'In person workshops',
          2: 'Online instruction through mobile applications and virtual classrooms',
          3: 'Blended learning'
        }
      }
    ],
    toolsHeader: {
      title: 'Tools',
      subText: 'Seeking to consolidate management processes and comprehensive consulting, Raiffeisen Latina proposes a group of systematized tools conceptualized and developed by DGRV for the cooperative and inclusive finance sector.'
    },
    toolsObject: [
      {
        id: 1,
        mobileId: 'first',
        mainTitle: 'Strategic planning',
        bodyContent: 'It is based on the Balanced Scorecard methodology that facilitates the design and monitoring of strategic and operational planning. It allows documenting and systematizing the planning process, defining the goals and measurement indicators of the objectives and strategies, and promoting the culture of constant monitoring.',
        backgroundColor: '#268DA5',
        icon: '../assets/icons/StrategicPlanning.svg',
        alt: 'Strategic Planning Icon'
      },
      {
        id: 2,
        mobileId: 'second',
        mainTitle: 'Financial planning',
        bodyContent: 'It facilitates the development of a financial plan and budget through forecasts based on past data. It allows documenting budgetary spreadsheets, controlling resources and monitoring compliance with the plan.',
        backgroundColor: '#379CB7',
        icon: '../assets/icons/FinancialPlanning.svg',
        alt: 'Financial Planning Icon'
      },
      {
        id: 3,
        mobileId: 'third',
        mainTitle: 'Early Warning System',
        bodyContent: 'A system with parameters that allow monitoring the financial situation of the evaluated / supervised entities, through the analysis of financial indicators incorporating signaling system.',
        backgroundColor: '#50A9C9',
        icon: '../assets/icons/EarlyWarningSystem.svg',
        alt: 'Early Warning System Icon'
      },
      {
        id: 4,
        mobileId: 'fourth',
        mainTitle: 'Measurement of Credit Risk',
        bodyContent: 'It quantifies the risk a credit portfolio is exposed to due to changes in credit operations behavior. Utilizing the database of current loans, expected and unexpected losses are calculated (the Value at Risk) under a model of transition matrices and probability of loss.',
        backgroundColor: '#68B3D5',
        icon: '../assets/icons/MeasurementofCreditRisk.svg',
        alt: 'Measurement of Credit Risk Icon'
      },
      {
        id: 5,
        mobileId: 'fifth',
        mainTitle: 'Social Balance',
        bodyContent: 'Seeks to make the fulfillment of the organization\'s social role visible by evaluating a set of signalized indicators. It fosters the creation of social responsibility goals and generates a technical report evaluating the compliance with the principles analyzed. It allows adaptation to any type to evaluation methodology.',
        backgroundColor: '#86C2DD',
        icon: '../assets/icons/SocialBalance.svg',
        alt: 'Social Balance Icon'
      },
      {
        id: 6,
        mobileId: 'sixth',
        mainTitle: 'Costs and Profitability',
        bodyContent: 'Determines the profitability of products and services, guides the analysis of cost coverage and the definition of rates. It incorporates methodology that assigns costs by offices, departments, products and services, promoting the efficient management of resources.',
        backgroundColor: '#69B53C',
        icon: '../assets/icons/CostsandProfitability.svg',
        alt: 'Costs and Profitability Icon'
      },
      {
        id: 7,
        mobileId: 'seventh',
        mainTitle: 'Internal Control',
        bodyContent: 'Evaluation of internal control allowing the correction and improvement of different aspects where necessary.  It applies COSO-based questionnaires with parameters that can adapted to any other evaluation methodology.',
        backgroundColor: '#76C34F',
        icon: '../assets/icons/InternalControl.svg',
        alt: 'Internal Control Icon'
      },
      {
        id: 8,
        mobileId: 'eighth',
        mainTitle: 'Corporate Audit',
        bodyContent: 'A computer system to support planning, execution and applicable monitoring in internal and external audits and supervision of financial institutions.',
        backgroundColor: '#81CB60',
        icon: '../assets/icons/CorporateAudit.svg',
        alt: 'Corporate Audit Icon'
      },
      {
        id: 9,
        mobileId: 'ninth',
        mainTitle: 'Rural Microscore',
        bodyContent: 'It evaluates the main agricultural and / or livestock products with an expert score supported by profile variables, productive activity, capacity and payment behavior in accordance with the policies and risk levels of each financial institution.',
        backgroundColor: '#64AD34',
        icon: '../assets/icons/RuralMicroscore.svg',
        alt: 'Rural Microscore Icon'
      },
      {
        id: 10,
        mobileId: 'tenth',
        mainTitle: 'Microscore',
        bodyContent: 'It constructs a score on the basis of variables assessing profile, capacity and payment behavior, determined by the financial institution in accordance with its policies and risk levels. It supports the mitigation of credit risk and compliance with the microcredit methodology.',
        backgroundColor: '#9AD57F',
        icon: '../assets/icons/Microscore.svg',
        alt: 'Microscore Icon'
      }
    ],
    coverageObject: {
      title: 'Coverage',
      description: 'Our assistance//work includes a wide diversity of mandates in the Latin America region, having collaborated with multilateral organizations, international funders, representative and supervisory organizations, development banks, as well as cooperative and financial companies in several countries in the region; thus contributing to a more efficient and sustainable model of cooperatives that benefit the most vulnerable in the population',
      countries: [
        { name: 'Mexico', style: 'country-mx' },
        {
          sections: [
            { name: 'Guatemala', style: 'country-gt' },
            { name: 'Honduras', style: 'country-hn' },
            { name: 'Dominican Republic', style: 'country-do' },
          ]
        },
        {
          sections: [
            { name: 'El Salvador', style: 'country-sv'},
            { name: 'Nicaragua', style: 'country-ni' },
          ]
        },
        { name: 'Costa Rica', style: 'country-cr'},
        {
          sections: [
            { name: 'Ecuador', style: 'country-ec'},
            { name: 'Guyana', style: 'country-gy' },
          ]
        },
        { name: 'Peru', style: 'country-pe' },
        { name: 'Paraguay', style: 'country-py' },
        { name: 'Uruguay', style: 'country-uy' },
        { name: 'Chile', style: 'country-cl' }
      ]

    },
    footerObject: {
      mx: 'Mexico City, Mexico',
      py: 'Asuncion, Paraguay',
      globe: 'German Confederation of Cooperatives'
    }
  },
  es: {
    shareTo: '¿A donde quisieras compartirme?',
    learnMore: '¡Conoce más sobre Raiffeisen! #Raiffeisen',
    close: 'Cerrar',
    navigation: {
      sections: [{
        title: 'Inicio',
        ref: 'inicio'
      },
      {
        title: 'Nosotros',
        ref: 'nosotros'
      },
      {
        title: 'Servicios',
        ref: 'servicios'
      },
      {
        title: 'Herramientas',
        ref: 'herramientas'
      },
      {
        title: 'Cobertura',
        ref: 'cobertura'
      }],
      contact: {
        title: 'Contacto',
        ref: 'contacto'
      }
    },
    mainCarouselInfo: [
      {
        id: 1,
        title : 'Generamos procesos que agregan valor',
        mainParahraph: 'Establecida en 2009 bajo estándares de la Confederación Alemana de Cooperativas -DGRV-.',
        secondaryParagraph: 'Apoyamos el desarrollo y fortalecimiento del sector de las finanzas incluyentes en Latinoamérica.'
      },
      {
        id: 2,
        title: 'Diseño de soluciones a la medida'
      },
      {
        id: 3,
        title: 'Planeación inteligente para la toma de decisiones'
      }
    ],
    inovationBanner: {
      title: 'Modelo de gestión',
      mainParahraph: 'Basamos nuestra oferta de servicios en metodologías probadas y apegadas a la realidad de nuestros clientes, resultado de años de experiencia en el sector, acompañado del profesionalismo de un equipo de consultoría especializado.',
      secondaryParagraph: 'Soportamos nuestros procesos en la innovación tecnológica a través de herramientas que promueven la gestión estratégica e integral.',
      topPhrase: 'Innovación para el desarrollo estratégico'
    },
    servicesObject: [
      {
        id: 1,
        name: 'consult',
        backgroundColor: '#fff',
        imageBackground: '../../assets/images/red_light_bulb-min.jpg',
        icon: '../assets/icons/Consultoria_new.svg',
        alt:'consultoria.',
        mainParahraph: 'Con fundamento en la metodología de cuadro de mando integral, desde cuatro perspectivas claves que busca cubrir de manera estratégica:',
        secondaryParagraph: 'Que soporten de manera argumentada e inteligente la toma de decisiones a distintos niveles.',
        listItems: {
          1: 'Procesos de diagnóstico',
          2: 'La definición de objetivos y estrategias',
          3: 'Proyectos o planes de acción'
        }
      },
      {
        id: 2,
        name: 'analytics',
        backgroundColor: '#fff',
        imageBackground: '../../assets/images/graph-min.jpg',
        icon: '../assets/icons/Analytics_new.svg',
        alt:'analitica.',
        mainParahraph: 'Plataformas para el análisis de información representativa de la realidad operativa, comercial y financiera de una organización.',
        secondaryParagraph: 'A través del diseño de tableros de control se busca la visualización de información para la oportuna y eficiente toma de decisiones que impacten favorablemente en la realidad analizada.',
        listItems: {
          1: 'A través del diseño de tableros de control, aleema visualiza información para la oportuna y eficiente toma de decisiones que impacten favorablemente en la realidad analizada.',
        }
      },
      {
        id: 3,
        name: 'training',
        backgroundColor: '#fff',
        imageBackground: '../../assets/images/ladder-min.jpg',
        icon: '../assets/icons/Training_new.svg',
        alt:'capacitación.',
        mainParahraph: 'Portafolio de temas modulares para la promoción de competencias y habilidades, en áreas estratégicas corporativas.',
        secondaryParagraph: 'Tres formatos de transferencia de conocimientos que se adaptan a todos los niveles y perfiles:',
        listItems: {
          1: 'Talleres presenciales',
          2: 'En línea a través de aplicativos móviles y aulas virtuales',
          3: 'Blended learning (mixto)'
        }
      }
    ],
    toolsHeader: {
      title: 'Herramientas',
      subText: 'Buscando consolidar los procesos de gestión y consultoría integral, Raiffeisen Latina propone un grupo de herramientas sistematizadas, conceptualizadas y desarrolladas por DGRV para el sector cooperativo y de finanzas incluyentes.'
    },
    toolsObject: [
      {
        id: 1,
        mobileId: 'first',
        mainTitle: 'Planificación Estratégica',
        bodyContent: 'Se fundamentada en el cuadro de mando integral que facilita el diseño y seguimiento de la planificación estratégica y operativa. Permite documentar y sistematizar el proceso de planificación, definir las metas e indicadores de medición de los objetivos y estrategias, y fomentar la cultura del seguimiento constante.',
        backgroundColor: '#268DA5',
        icon: '../assets/icons/StrategicPlanning.svg',
        alt: 'Icono Planificación Estratégica'
      },
      {
        id: 2,
        mobileId: 'second',
        mainTitle: 'Planificación Financiera',
        bodyContent: 'Facilita el desarrollo del plan financiero y del presupuesto a través de pronósticos basados en información histórica. Permite documentar las cédulas presupuestarias, controlar los recursos y hacer el seguimiento del cumplimiento del plan.',
        backgroundColor: '#379CB7',
        icon: '../assets/icons/FinancialPlanning.svg',
        alt: 'Icono Planificación Financiera'
      },
      {
        id: 3,
        mobileId: 'third',
        mainTitle: 'Alerta Temprana',
        bodyContent: 'Sistema parametrizable que permite monitorear la situación financiera de las entidades evaluadas/supervisadas, a través del análisis de indicadores financieros semaforizados.',
        backgroundColor: '#50A9C9',
        icon: '../assets/icons/EarlyWarningSystem.svg',
        alt: 'Icono Alerta Temprana'
      },
      {
        id: 4,
        mobileId: 'fourth',
        mainTitle: 'Cuantificación del riesgo de crédito',
        bodyContent: 'Cuantifica la exposición al riesgo de la cartera de crédito, originada por los cambios en el comportamiento de las operaciones crediticias. Tomando la base de datos histórica de créditos vigentes realiza el cálculo de las pérdidas esperadas y no esperadas (Valor en Riesgo), bajo un modelo de matrices de transición y probabilidad de pérdida.',
        backgroundColor: '#68B3D5',
        icon: '../assets/icons/MeasurementofCreditRisk.svg',
        alt: 'Icono Cuantificación del Riesgo de Crédito'
      },
      {
        id: 5,
        mobileId: 'fifth',
        mainTitle: 'Balance Social',
        bodyContent: 'Busca visibilizar el cumplimiento del rol social de la organización a través de la evaluación de un set de indicadores semaforizados. Fomenta la creación de metas de responsabilidad social y genera un informe técnico con la interpretación del cumplimiento de los principios analizados. Permite la adaptación a cualquier tipo de metodología de evaluación.',
        backgroundColor: '#86C2DD',
        icon: '../assets/icons/SocialBalance.svg',
        alt: 'Icono Balance Social'
      },
      {
        id: 6,
        mobileId: 'sixth',
        mainTitle: 'Costos y rentabilidad',
        bodyContent: 'Determina la rentabilidad de productos y servicios, orienta el análisis de la cobertura de costos y la definición de tasas. Trabaja bajo la metodología de asignación de costos por oficinas, departamentos, productos y servicios, propiciando el manejo eficiente de los recursos.',
        backgroundColor: '#64AD34',
        icon: '../assets/icons/CostsandProfitability.svg',
        alt: 'Icono Costos y Rentabilidad'
      },
      {
        id: 7,
        mobileId: 'seventh',
        mainTitle: 'Control Interno',
        bodyContent: 'Evalúa la razonabilidad del control interno y permitiendo llevar un seguimiento de aspectos que deben subsanarse o mejorar. Aplica cuestionarios basados en COSO, parametrizables a cualquier otra metodología de evaluación.',
        backgroundColor: '#69B53C',
        icon: '../assets/icons/InternalControl.svg',
        alt: 'Icono Control Interno'
      },
      {
        id: 8,
        mobileId: 'eighth',
        mainTitle: 'Auditoría Corporativa',
        bodyContent: 'Sistema informático para el soporte de la planeación, ejecución y seguimiento aplicable en auditorías internas, externas y supervisión de instituciones financieras.',
        backgroundColor: '#76C34F',
        icon: '../assets/icons/CorporateAudit.svg',
        alt: 'Icono Auditoria Corporativa'
      },
      {
        id: 9,
        mobileId: 'ninth',
        mainTitle: 'Microscore',
        bodyContent: 'Construye un score soportado en variables de perfil, capacidad y comportamiento de pago, determinadas por la entidad financiera conforme a sus políticas y niveles de riesgo. Apuntala la mitigación del riesgo de crédito y el cumplimiento de la metodología de microcrédito.',
        backgroundColor: '#81CB60',
        icon: '../assets/icons/Microscore.svg',
        alt: 'Icono Microscore'
      },
      {
        id: 10,
        mobileId: 'tenth',
        mainTitle: 'Microscore Rural',
        bodyContent: 'Evalúa los principales productos agrícolas y/o ganaderos con un score experto soportado en variables de perfil, actividad productiva, capacidad y comportamiento de pago conforme a las políticas y niveles de riesgo de cada entidad financiera.',
        backgroundColor: '#9AD57F',
        icon: '../assets/icons/RuralMicroscore.svg',
        alt: 'Icono Microscore Rural'
      }
    ],
    coverageObject: {
      title: 'Cobertura',
      description: 'Nuestra gestión incluye una amplia diversidad de mandatos en la región latinoamericana, habiendo colaborado con organismos multilaterales, fondeadores internacionales, organismos de representación y supervisión, instituciones de la banca de desarrollo, así como sociedades cooperativas y financieras en varios países de la región; contribuyendo así con un modelo más eficiente y sustentable en beneficio de su población vulnerable.',
      countries: [
        { name: 'México', style: 'country-mx' },
        {
          sections: [
            { name: 'Guatemala', style: 'country-gt' },
            { name: 'Honduras', style: 'country-hn' },
            { name: 'República Dominicana', style: 'country-do' },
          ]
        },
        {
          sections: [
            { name: 'El Salvador', style: 'country-sv'},
            { name: 'Nicaragua', style: 'country-ni' },
          ]
        },
        { name: 'Costa Rica', style: 'country-cr'},
        {
          sections: [
            { name: 'Ecuador', style: 'country-ec'},
            { name: 'Guyana', style: 'country-gy' },
          ]
        },
        { name: 'Perú', style: 'country-pe' },
        { name: 'Paraguay', style: 'country-py' },
        { name: 'Uruguay', style: 'country-uy' },
        { name: 'Chile', style: 'country-cl' }
      ]
    },
    footerObject: {
      mx: 'Ciudad de México, México',
      py: 'Asunción, Paraguay',
      globe: 'Confederación Alemana de Cooperativas'
    }
  }
}

export default projectBody
