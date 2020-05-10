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
    ]
  }
}

export default projectBody
