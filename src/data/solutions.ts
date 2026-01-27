export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  benefits?: string[];
  howItWorks?: string[];
  relatedProducts?: string[]; // Product slugs
  keyFeatures?: SolutionFeature[];
  applications?: string[];
  faqs?: SolutionFAQ[];
  icon?: string;
}

export const solutions: Solution[] = [
  {
    slug: "district-energy",
    title: "District Energy",
    subtitle: "Accurate metering for heating and cooling networks",
    description: "District energy systems provide centralized heating and cooling to multiple buildings through a network of underground pipes. Our advanced metering solutions ensure accurate energy measurement and billing for district energy providers and consumers.",
    overview: "District energy systems are a proven solution for efficient heating and cooling delivery to urban areas, campuses, and industrial complexes. Virtec's comprehensive metering solutions enable district energy providers to accurately measure and bill thermal energy consumption, ensuring fair and transparent energy distribution.\n\nOur ultrasonic and electromagnetic flow meters, combined with temperature sensors, provide precise heat and cool energy measurement. These systems help district energy operators optimize their networks, reduce energy losses, and provide accurate billing to customers.",
    benefits: [
      "Accurate thermal energy measurement and billing",
      "Real-time monitoring and optimization of district networks",
      "Energy loss detection and reduction",
      "Fair and transparent billing for all customers",
      "Integration with building automation systems",
      "Long-term data tracking and analysis"
    ],
    howItWorks: [
      "Assessment of your district energy network infrastructure and requirements",
      "Installation of ultrasonic and electromagnetic flow meters at key distribution points",
      "Integration of temperature sensors and monitoring systems",
      "Connection to building automation and billing systems",
      "Commissioning and calibration of all measurement equipment",
      "Ongoing monitoring, maintenance, and optimization support"
    ],
    relatedProducts: [
      "vir-uf",
      "lxc-flange",
      "lxc-threaded",
      "vir-800",
      "vir-850"
    ],
    keyFeatures: [
      {
        title: "Ultrasonic Heat Meters",
        description: "High-precision ultrasonic heat meters for accurate thermal energy measurement in district heating and cooling networks."
      },
      {
        title: "Electromagnetic Flow Meters",
        description: "Reliable electromagnetic flow meters for measuring water flow in district energy distribution systems."
      },
      {
        title: "Temperature Measurement",
        description: "Accurate temperature sensors for precise energy calculation in heating and cooling applications."
      },
      {
        title: "Remote Monitoring",
        description: "IoT-enabled remote monitoring capabilities for real-time network performance and energy consumption tracking."
      },
      {
        title: "Data Integration",
        description: "Seamless integration with building management systems and district energy control platforms."
      },
      {
        title: "Billing Accuracy",
        description: "Precise measurement ensures fair and accurate billing for all district energy customers."
      }
    ],
    applications: [
      "Urban district heating networks",
      "Campus heating and cooling systems",
      "Industrial district energy networks",
      "Hospital complexes",
      "Airport facilities",
      "Shopping malls and commercial districts",
      "Residential district heating",
      "Data center cooling systems"
    ],
    faqs: [
      {
        question: "What types of meters are used in district energy systems?",
        answer: "District energy systems typically use ultrasonic heat meters for thermal energy measurement and electromagnetic flow meters for water flow measurement. These are combined with temperature sensors to calculate the total energy delivered."
      },
      {
        question: "How accurate are district energy meters?",
        answer: "Our district energy meters provide high-precision measurement with accuracy typically within ±2-3% for flow measurement and ±0.1°C for temperature measurement, ensuring fair and accurate billing."
      },
      {
        question: "Can district energy meters be monitored remotely?",
        answer: "Yes, our district energy solutions support remote monitoring through IoT connectivity, allowing operators to track energy consumption, detect issues, and optimize network performance in real-time."
      },
      {
        question: "What is the typical installation process for district energy meters?",
        answer: "Installation typically involves mounting the flow meter and temperature sensors at strategic points in the distribution network, connecting to power and communication systems, and configuring the metering software. Our team provides comprehensive installation and commissioning services."
      },
      {
        question: "How do district energy meters integrate with billing systems?",
        answer: "Our meters can integrate with various billing and building management systems through standard communication protocols (M-Bus, Modbus, BACnet), enabling automated data collection and billing."
      }
    ]
  },
  {
    slug: "hvac-optimization",
    title: "HVAC Optimization",
    subtitle: "Smart balancing for buildings and campuses",
    description: "Optimize your HVAC systems with intelligent flow measurement, variable speed drives, and IAQ monitoring. Our comprehensive solutions ensure optimal comfort, energy efficiency, and air quality in commercial and institutional buildings.",
    overview: "HVAC optimization is essential for maintaining comfortable indoor environments while minimizing energy consumption. Virtec's integrated solutions combine flow measurement, variable speed drive technology, and indoor air quality monitoring to create intelligent HVAC systems.\n\nOur solutions help facility managers balance heating and cooling loads, optimize airflow, and maintain optimal air quality while reducing energy costs. With real-time monitoring and automated control, buildings can achieve significant energy savings while improving occupant comfort.",
    benefits: [
      "Energy savings of 20-40% through optimized HVAC operation",
      "Improved indoor air quality and occupant comfort",
      "Reduced maintenance costs and extended equipment life",
      "Real-time monitoring and automated control",
      "Compliance with energy efficiency regulations",
      "Enhanced building performance and sustainability"
    ],
    howItWorks: [
      "Comprehensive audit of your current HVAC system performance",
      "Installation of flow meters for system balancing and optimization",
      "Integration of variable speed drives for fans and pumps",
      "Deployment of IAQ sensors for air quality monitoring",
      "Connection to building automation systems for centralized control",
      "Implementation of optimization algorithms and continuous monitoring"
    ],
    relatedProducts: [
      "em-700",
      "em-750",
      "em-760",
      "vir-iaq-6",
      "iaq-display",
      "vir-832-insertion",
      "vir-850"
    ],
    keyFeatures: [
      {
        title: "Flow Balancing",
        description: "Precise flow measurement and balancing for optimal HVAC system performance and energy efficiency."
      },
      {
        title: "Variable Speed Drives",
        description: "Intelligent VSDs for fans and pumps that adjust speed based on demand, reducing energy consumption significantly."
      },
      {
        title: "IAQ Monitoring",
        description: "Comprehensive indoor air quality sensors monitoring temperature, humidity, CO₂, and particulate matter for optimal air quality."
      },
      {
        title: "Building Automation Integration",
        description: "Seamless integration with BAS/BMS systems for centralized control and optimization of all HVAC components."
      },
      {
        title: "Energy Optimization",
        description: "Advanced algorithms that automatically optimize HVAC operation based on occupancy, weather, and load conditions."
      },
      {
        title: "Predictive Maintenance",
        description: "Monitoring and analytics capabilities that predict maintenance needs, preventing costly breakdowns."
      }
    ],
    applications: [
      "Commercial office buildings",
      "Educational institutions",
      "Healthcare facilities",
      "Retail stores and shopping centers",
      "Hotels and hospitality",
      "Airports and transportation hubs",
      "Data centers",
      "Industrial facilities"
    ],
    faqs: [
      {
        question: "How much energy can be saved with HVAC optimization?",
        answer: "Typical energy savings range from 20-40% depending on the building type and existing system efficiency. Variable speed drives alone can reduce fan and pump energy consumption by 30-50%."
      },
      {
        question: "What components are needed for HVAC optimization?",
        answer: "A complete HVAC optimization solution includes flow meters for balancing, variable speed drives for fans and pumps, IAQ sensors for air quality monitoring, and integration with building automation systems."
      },
      {
        question: "How does IAQ monitoring improve HVAC systems?",
        answer: "IAQ sensors provide real-time data on air quality parameters. This information allows the HVAC system to adjust ventilation rates dynamically, ensuring optimal air quality while minimizing energy consumption."
      },
      {
        question: "Can existing HVAC systems be upgraded for optimization?",
        answer: "Yes, most existing HVAC systems can be upgraded with flow meters, VSDs, and IAQ sensors. Retrofitting can provide significant energy savings and improved performance without complete system replacement."
      },
      {
        question: "What is the return on investment for HVAC optimization?",
        answer: "ROI typically ranges from 2-5 years depending on energy costs and system usage. The combination of energy savings, reduced maintenance, and extended equipment life provides substantial long-term value."
      }
    ]
  },
  {
    slug: "water-utilities",
    title: "Water Utilities",
    subtitle: "Loss reduction and flow transparency at scale",
    description: "Empower water utilities with advanced flow measurement and monitoring solutions. Detect leaks, reduce non-revenue water, and provide transparency in water distribution networks with our comprehensive metering solutions.",
    overview: "Water utilities face significant challenges including non-revenue water (NRW), aging infrastructure, and the need for accurate billing. Virtec's flow measurement solutions provide water utilities with the tools needed to monitor distribution networks, detect leaks, and ensure accurate water accounting.\n\nOur ultrasonic and electromagnetic flow meters offer reliable, accurate measurement across the entire water distribution network. Combined with remote monitoring and data analytics, utilities can identify problems early, reduce water losses, and improve operational efficiency.",
    benefits: [
      "Reduced non-revenue water through leak detection",
      "Accurate billing and revenue protection",
      "Real-time network monitoring and alerting",
      "Improved operational efficiency",
      "Extended meter life and reduced maintenance",
      "Data-driven decision making for infrastructure investment"
    ],
    keyFeatures: [
      {
        title: "Wide Range Flow Meters",
        description: "Ultrasonic and electromagnetic flow meters covering pipe sizes from 15mm to 1200mm for complete network coverage."
      },
      {
        title: "Leak Detection",
        description: "Advanced flow monitoring capabilities that identify unusual flow patterns indicating potential leaks in the distribution network."
      },
      {
        title: "Remote Reading",
        description: "IoT-enabled remote meter reading eliminating the need for manual readings and providing real-time consumption data."
      },
      {
        title: "Data Analytics",
        description: "Comprehensive data analytics platform for identifying trends, anomalies, and optimization opportunities across the network."
      },
      {
        title: "Battery-Powered Options",
        description: "Battery-operated meters for locations without power supply, ensuring network-wide measurement coverage."
      },
      {
        title: "Integration Capabilities",
        description: "Integration with SCADA, billing, and asset management systems for seamless data flow and operational management."
      }
    ],
    applications: [
      "Municipal water distribution",
      "Industrial water supply",
      "Water treatment plant monitoring",
      "Pump station monitoring",
      "Water transmission lines",
      "Water loss management programs",
      "Sub-metering and tenant billing",
      "Water quality monitoring systems"
    ],
    faqs: [
      {
        question: "How do flow meters help reduce non-revenue water?",
        answer: "Flow meters provide accurate measurement at various points in the distribution network. By comparing inlet and outlet flows, utilities can identify discrepancies that indicate leaks or unauthorized consumption, enabling targeted leak detection and repair."
      },
      {
        question: "What is the accuracy of water utility flow meters?",
        answer: "Our water utility flow meters typically provide accuracy within ±1-2% for electromagnetic meters and ±2-3% for ultrasonic meters, depending on flow conditions and installation."
      },
      {
        question: "Can meters be installed without interrupting water service?",
        answer: "Clamp-on ultrasonic meters can be installed without interrupting service. Insertion-type meters require minimal interruption. Full-bore meters require brief service interruption for installation."
      },
      {
        question: "How long do water utility meters last?",
        answer: "With proper maintenance, our water utility meters typically last 15-20 years. Ultrasonic meters have no moving parts, providing long-term reliability and minimal maintenance requirements."
      },
      {
        question: "What communication options are available for remote reading?",
        answer: "Our meters support various communication protocols including M-Bus, Modbus, and wireless options (LoRaWAN, NB-IoT, 4G/5G) for flexible integration with utility SCADA and billing systems."
      }
    ]
  },
  {
    slug: "industrial-iot",
    title: "Industrial IoT",
    subtitle: "Connect meters with analytics and control platforms",
    description: "Transform your measurement infrastructure into an intelligent IoT network. Connect flow meters, heat meters, and sensors with cloud-based analytics and control platforms for real-time insights and automated decision-making.",
    overview: "Industrial IoT (IIoT) enables organizations to transform their measurement infrastructure into intelligent, connected systems. Virtec's IIoT solutions connect flow meters, heat meters, variable speed drives, and IAQ sensors to create comprehensive monitoring and control networks.\n\nBy integrating measurement devices with cloud-based analytics platforms, organizations gain real-time visibility into their operations, enabling predictive maintenance, energy optimization, and data-driven decision making. Our solutions bridge the gap between physical measurement devices and digital analytics platforms.",
    benefits: [
      "Real-time visibility across all measurement points",
      "Predictive maintenance and reduced downtime",
      "Energy optimization through data analytics",
      "Remote monitoring and control capabilities",
      "Scalable cloud-based infrastructure",
      "Integration with existing enterprise systems"
    ],
    howItWorks: [
      "Assessment of your current measurement infrastructure and connectivity requirements",
      "Selection and installation of appropriate communication gateways and protocols",
      "Connection of existing meters and sensors to the IoT network",
      "Deployment of cloud-based analytics platform and data visualization tools",
      "Integration with your existing enterprise systems (ERP, CMMS, SCADA)",
      "Training, commissioning, and ongoing support for the IoT network"
    ],
    relatedProducts: [
      "vir-800",
      "vir-850",
      "vir-uf",
      "em-760",
      "vir-iaq-6",
      "lxc-flange"
    ],
    keyFeatures: [
      {
        title: "Device Connectivity",
        description: "Connect flow meters, heat meters, VSDs, and sensors through various communication protocols (M-Bus, Modbus, BACnet, wireless)."
      },
      {
        title: "Data Gateway",
        description: "Industrial gateways that aggregate data from multiple devices and transmit to cloud platforms securely and reliably."
      },
      {
        title: "Cloud Analytics",
        description: "Cloud-based analytics platforms for data visualization, trend analysis, and predictive insights."
      },
      {
        title: "Edge Computing",
        description: "Edge processing capabilities for real-time decision making and reduced latency in critical applications."
      },
      {
        title: "API Integration",
        description: "RESTful APIs and standard protocols for integration with ERP, CMMS, and other enterprise systems."
      },
      {
        title: "Scalability",
        description: "Scalable architecture supporting deployment from single sites to enterprise-wide measurement networks."
      }
    ],
    applications: [
      "Manufacturing facilities",
      "Industrial process monitoring",
      "Energy management systems",
      "Building automation networks",
      "District energy networks",
      "Water and wastewater treatment",
      "Pharmaceutical and food processing",
      "Data center infrastructure monitoring"
    ],
    faqs: [
      {
        question: "What communication protocols are supported?",
        answer: "Our IIoT solutions support M-Bus, Modbus RTU/TCP, BACnet, and wireless protocols (LoRaWAN, NB-IoT, WiFi, 4G/5G) for flexible integration with various devices and platforms."
      },
      {
        question: "How secure is the data transmission?",
        answer: "Data transmission is secured using industry-standard encryption (TLS/SSL) and authentication mechanisms. Our solutions comply with industrial cybersecurity standards and best practices."
      },
      {
        question: "Can IIoT solutions integrate with existing SCADA systems?",
        answer: "Yes, our IIoT gateways can integrate with existing SCADA systems through standard protocols, allowing organizations to enhance their existing infrastructure with cloud analytics capabilities."
      },
      {
        question: "What is the typical deployment time for an IIoT solution?",
        answer: "Deployment time varies based on scale and complexity. A typical site deployment with 10-50 devices can be completed in 2-4 weeks, including device installation, gateway setup, and cloud platform configuration."
      },
      {
        question: "How does IIoT enable predictive maintenance?",
        answer: "By continuously monitoring device performance, flow patterns, and operational parameters, IIoT platforms can identify anomalies and trends that indicate potential failures, enabling maintenance to be scheduled before costly breakdowns occur."
      }
    ]
  }
];
