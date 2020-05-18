const projectBody = {
  en: {
    shareTo: 'To where would you like to share?',
    navigation: {
      inicio: 'Home',
      nosotros: 'About us',
      servicios: 'Services',
      herramientas: 'Tools',
      cobertura: 'Coverage',
      contacto: 'Contact',
      buscar: 'Search'
    },
    servicesObject: [
      {
        id: 1,
        imageBackground: '../../assets/servicios_light_bulm_full.jpg',
        icon: '../assets/icons/Consultoria.svg',
        button:'Know more',
        alt: 'Consulting',
        mainParahraph: 'Based on balanced scorecard methodology, four key perspectives strategically cover:',
        secondaryParagraph: 'that together promote reasoned and intelligent decision-making at all levels.',
        listItems: {
          1: 'processes of diagnosis',
          2: 'the definition of objectives and strategies',
          3: 'projects or plans of action'
        }
      },
      {
        id: 2,
        imageBackground: '../../assets/servicios_chalk_board.jpg',
        icon: '../assets/icons/Analitica.svg',
        button:'Know more',
        alt: 'Analitics',
        mainParahraph: 'Platforms for the analysis of information accurately representing the operative, commercial, and financial reality of the organization.',
        secondaryParagraph: 'Through the design of dashboards, the visualization of information enables timely and efficient decision-making that favorably impacts the reality analyzed.',
        listItems: {
          1: '',
          2: '',
          3: ''
        }
      },
      {
        id: 3,
        imageBackground: '../../assets/servicios_wooden_stair.jpg',
        icon: '../assets/icons/Capacitacion.svg',
        button:'Know more',
        alt: 'Training',
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
        backgroundColor: '#68b4d6'
      },
      {
        id: 2,
        mobileId: 'second',
        mainTitle: 'Early Warning System',
        bodyContent: 'A system with parameters that allow monitoring the financial situation of the evaluated / supervised entities, through the analysis of financial indicators incorporating signaling system.',
        backgroundColor: '#87c3de'
      },
      {
        id: 3,
        mobileId: 'third',
        mainTitle: 'Social Balance',
        bodyContent: 'Seeks to make the fulfillment of the organization\'s social role visible by evaluating a set of signalized indicators. It fosters the creation of social responsibility goals and generates a technical report evaluating the compliance with the principles analyzed. It allows adaptation to any type to evaluation methodology.',
        backgroundColor: '#96cae2'
      },
      {
        id: 4,
        mobileId: 'fourth',
        mainTitle: 'Measurement of Credit Risk',
        bodyContent: 'It quantifies the risk a credit portfolio is exposed to due to changes in credit operations behavior. Utilizing the database of current loans, expected and unexpected losses are calculated (the Value at Risk) under a model of transition matrices and probability of loss.',
        backgroundColor: '#a5d2e6'
      },
      {
        id: 5,
        mobileId: 'fifth',
        mainTitle: 'Rural Microscore',
        bodyContent: 'It evaluates the main agricultural and / or livestock products with an expert score supported by profile variables, productive activity, capacity and payment behavior in accordance with the policies and risk levels of each financial institution.',
        backgroundColor: '#b4d9ea'
      },
      {
        id: 6,
        mobileId: 'sixth',
        mainTitle: 'Financial planning',
        bodyContent: 'It facilitates the development of a financial plan and budget through forecasts based on past data. It allows documenting budgetary spreadsheets, controlling resources and monitoring compliance with the plan.',
        backgroundColor: '#82ce60'
      },
      {
        id: 7,
        mobileId: 'seventh',
        mainTitle: 'Internal Control',
        bodyContent: 'Evaluation of internal control allowing the correction and improvement of different aspects where necessary.  It applies COSO-based questionnaires with parameters that can adapted to any other evaluation methodology.',
        backgroundColor: '#9bd77f'
      },
      {
        id: 8,
        mobileId: 'eightth',
        mainTitle: 'Costs and Profitability',
        bodyContent: 'Determines the profitability of products and services, guides the analysis of cost coverage and the definition of rates. It incorporates methodology that assigns costs by offices, departments, products and services, promoting the efficient management of resources.',
        backgroundColor: '#a7dc8f'
      },
      {
        id: 9,
        mobileId: 'ninth',
        mainTitle: 'Microscore 4.0',
        bodyContent: 'It constructs a score on the basis of variables assessing profile, capacity and payment behavior, determined by the financial institution in accordance with its policies and risk levels. It supports the mitigation of credit risk and compliance with the microcredit methodology.',
        backgroundColor: '#b4e19f'
      },
      {
        id: 10,
        mobileId: 'tenth',
        mainTitle: 'Corporate Audit',
        bodyContent: 'A computer system to support planning, execution and applicable monitoring in internal and external audits and supervision of financial institutions.',
        backgroundColor: '#c0e6af'
      }
    ]
  },
  es: {
    shareTo: '¿A donde quisieras compartirme?',
    navigation: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      servicios: 'Servicios',
      herramientas: 'Herramientas',
      cobertura: 'Cobertura',
      contacto: 'Contacto',
      buscar: 'Buscar'
    },
    servicesObject: [
      {
        id: 1,
        imageBackground: '../../assets/servicios_light_bulm_full.jpg',
        icon: '../assets/icons/Consultoria.svg',
        button:'CONOCE MAS',
        alt:'Consultoria',
        mainParahraph: 'Con fundamento en la metodología de cuadro de mando integral, desde cuatro perspectivas claves que busca cubrir de manera estratégica::',
        secondaryParagraph: 'Que soporten de manera argumentada e inteligente la toma de decisiones a distintos niveles.',
        listItems: {
          1: 'Procesos de diagnóstico',
          2: 'La definición de objetivos y estrategias',
          3: ' Proyectos o planes de acción'
        }
      },
      {
        id: 2,
        imageBackground: '../../assets/servicios_chalk_board.jpg',
        icon: '../assets/icons/Analitica.svg',
        button:'CONOCE MAS',
        alt:'Analitica',
        mainParahraph: 'Plataformas para el análisis de información representativa de la realidad operativa, comercial y financiera de una organización.',
        secondaryParagraph: 'A través del diseño de tableros de control se busca la visualización de información para la oportuna y eficiente toma de decisiones que impacten favorablemente en la realidad analizada.',
        listItems: {
          1: '',
          2: '',
          3: ''
        }
      },
      {
        id: 3,
        imageBackground: '../../assets/servicios_wooden_stair.jpg',
        icon: '../assets/icons/Capacitacion.svg',
        button:'CONOCE MAS',
        alt:'Capacitacion',
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
      subText: 'Buscando consolidar los procesos de gestión y consultoría integral, Raiffeisen Latina propone un grupo de herramientas sistematizadas conceptualizadas y desarrolladas por DGRV para el sector cooperativo y de finanzas incluyentes.'
    },
    toolsObject: [
      {
        id: 1,
        mobileId: 'first',
        mainTitle: 'Planificación estratégica',
        bodyContent: 'Se fundamentada en el cuadro de mando integral que facilita el diseño y seguimiento de la planificación estratégica y operativa. Permite documentar y sistematizar el proceso de planificación, definir las metas e indicadores de medición de los objetivos y estrategias, y fomentar la cultura del seguimiento constante.',
        backgroundColor: '#68b4d6'
      },
      {
        id: 2,
        mobileId: 'second',
        mainTitle: 'Alerta temprana',
        bodyContent: 'Sistema parametrizable que permite monitorear la situación financiera de las entidades evaluadas/supervisadas, a través del análisis de indicadores financieros semaforizados.',
        backgroundColor: '#87c3de'
      },
      {
        id: 3,
        mobileId: 'third',
        mainTitle: 'Balance social',
        bodyContent: 'Busca visibilizar el cumplimiento del rol social de la organización a través de la evaluación de un set de indicadores semaforizados. Fomenta la creación de metas de responsabilidad social y genera un informe técnico con la interpretación del cumplimiento de los principios analizados. Permite la adaptación a cualquier tipo de metodología de evaluación.',
        backgroundColor: '#96cae2'
      },
      {
        id: 4,
        mobileId: 'fourth',
        mainTitle: 'Cuantificación del riesgo de crédito',
        bodyContent: 'Cuantifica la exposición al riesgo de la cartera de crédito, originada por los cambios en el comportamiento de las operaciones crediticias. Tomando la base de datos histórica de créditos vigentes realiza el cálculo de las pérdidas esperadas y no esperadas (Valor en Riesgo), bajo un modelo de matrices de transición y probabilidad de pérdida.',
        backgroundColor: '#a5d2e6'
      },
      {
        id: 5,
        mobileId: 'fifth',
        mainTitle: 'Microscore rural',
        bodyContent: 'Evalúa los principales productos agrícolas y/o ganaderos con un score experto soportado en variables de perfil, actividad productiva, capacidad y comportamiento de pago conforme a las políticas y niveles de riesgo de cada entidad financiera.',
        backgroundColor: '#b4d9ea'
      },
      {
        id: 6,
        mobileId: 'sixth',
        mainTitle: 'Planificación financiera',
        bodyContent: 'Facilita el desarrollo del plan financiero y del presupuesto a través de pronósticos basados en información histórica. Permite documentar las cédulas presupuestarias, controlar los recursos y hacer el seguimiento del cumplimiento del plan.',
        backgroundColor: '#82ce60'
      },
      {
        id: 7,
        mobileId: 'seventh',
        mainTitle: 'Control interno',
        bodyContent: 'Evalúa la razonabilidad del control interno y permitiendo llevar un seguimiento de aspectos que deben subsanarse o mejorar. Aplica cuestionarios basados en COSO, parametrizables a cualquier otra metodología de evaluación.',
        backgroundColor: '#9bd77f'
      },
      {
        id: 8,
        mobileId: 'eightth',
        mainTitle: 'Costos y rentabilidad',
        bodyContent: 'Determina la rentabilidad de productos y servicios, orienta el análisis de la cobertura de costos y la definición de tasas. Trabaja bajo la metodología de asignación de costos por oficinas, departamentos, productos y servicios, propiciando el manejo eficiente de los recursos.',
        backgroundColor: '#a7dc8f'
      },
      {
        id: 9,
        mobileId: 'ninth',
        mainTitle: 'Microscore 4.0',
        bodyContent: 'Construye un score soportado en variables de perfil, capacidad y comportamiento de pago, determinadas por la entidad financiera conforme a sus políticas y niveles de riesgo. Apuntala la mitigación del riesgo de crédito y el cumplimiento de la metodología de microcrédito.',
        backgroundColor: '#b4e19f'
      },
      {
        id: 10,
        mobileId: 'tenth',
        mainTitle: 'Auditoria corporativa',
        bodyContent: 'Sistema informático para el soporte de la planeación, ejecución y seguimiento aplicable en auditorías internas, externas y supervisión de instituciones financieras.',
        backgroundColor: '#c0e6af'
      }
    ]
  }
}

export default projectBody
