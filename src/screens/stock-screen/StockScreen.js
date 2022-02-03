import './StockScreen.css';
import { Link } from "react-router-dom";

function StockScreen() {
  // const mockCompany2 = {
  //   companyName: 'PWC2',
  //   companyDescription: 'Accounting and audting firm that yada yada yada we make numbers look big',
  //   // meta data here

  //   optionArray: [
  //     {
  //       projectName: 'Engagement Guest',
  //       projectDescription: 'Show accounts all the data in a convient location to help them manage internationalization',
  //       projectFIle: 'Figure out how to get these'
  //     },

  //     {
  //       projectName: 'Connect',
  //       projectDescription: 'A one stop news shop for all accounting needs and updates',
  //       projectFIle: 'Figure out how to get these'
  //     },
  //     {
  //       projectName: 'Test Project',
  //       projectDescription: 'A oneasdgdafhdsfhsdgfhsdfhsdfhbsdfhsdfghsdfbhhadrrbhsdgsdgshsdtgfhsdghsgheth stop news shop for all accounting needs and updates',
  //       projectFIle: 'Figure out how to get these'
  //     }


  //   ]
  // }

  const mockCompany = {
    companyName: 'SAS',
    companyDescription: 'Leader in data analytics',
    companyFile: 'https://www.sas.com/en_us/home.html',
    optionArray: [
      {
        projectName: 'Advanced Analytics',
        projectDescription: 'IDC research shows SAS with a commanding 30.8 percent market share in advanced analytics  more than twice that of our nearest competitor. We dominate the market because we know its not just how advanced the technology is that matters; its how far it can advance your organization. Our advanced analytics software is infused with cutting-edge, innovative algorithms that can help you solve even your most intractable problems. Make the best decisions possible. And unearth opportunities you would otherwise miss.',
        projectFIle: 'https://www.sas.com/en_us/solutions/analytics.html'
      },

      {
        projectName: 'Artificial Intelligence (AI) Solutions',
        projectDescription: 'Enhance your creativity. Unlock new possibilities. Boost productivity. Amplify your impact. We embed AI capabilities in our software to provide you with more intelligent, automated solutions. From machine learning, to computer vision, to natural language processing (NLP), to forecasting and optimization, our AI technologies support diverse environments and scale to meet changing business needs.',
        projectFIle: 'https://www.sas.com/en_us/solutions/ai.html'
      },
      {
        projectName: 'Business Intelligence & Analytics',
        projectDescription: 'Get the right information to anyone who needs it. Integrate and discover data on your own. Create and share interactive reports. Spark your curiosity with easy-to-use analytics. And monitor key metrics so when something goes awry, youll know why – and what to do about it.',
        projectFIle: 'https://www.sas.com/en_us/solutions/business-intelligence.html'
      },
      {
        projectName: 'Data Management Software',
        projectDescription: 'Successful organizations most likely have data management technology powering every process. Its that critical – and its a key component of the SAS Platform. Modularized for rapid results. Designed with IT and business collaboration in mind. And ready to help transform your analytics programs into big opportunity. With SAS, you can go beyond managing your data to unleashing its full potential.',
        projectFIle: 'https://www.sas.com/en_us/solutions/data-management.html'
      },
      {
        projectName: 'Decisioning',
        projectDescription: ' Decisions founded in data and analytics are superior to those that arent. Its that simple. As organizations digitally transform, analytically driven decision making is becoming a critical differentiator. Whether youre driving thousands of decisions a second without human intervention, or augmenting human-led ones with insights, SAS industry-leading technologies make it easy to scale and drive decisions consistently.',
        projectFIle: 'https://www.sas.com/en_us/solutions/decisioning.html'
      },
      {
        projectName: 'Fraud, Anti-Money Laundering & Security Intelligence',
        projectDescription: 'Take a unified approach to fraud, compliance and security. Only security intelligence solutions from SAS deliver an essential layer of protection backed by domain expertise and the world’s best analytics.',
        projectFIle: 'https://www.sas.com/en_us/solutions/fraud-security-intelligence.html'
      },
      {
        projectName: 'Advancing toward the artificial intelligence of things (AIoT).',
        projectDescription: 'As the market leader in analytics, SAS empowers organizations to create and sustain true value from diverse IoT data and initiatives – whether that data is at the edge, in the cloud or anywhere in between. Our robust, scalable and open edge-to-enterprise platform bridges IT and operational environments, while spanning the entire analytics life cycle. From visualization and statistical modeling to descriptive, predictive and prescriptive analytics, SAS delivers deep expertise in IoT analytics – including AI, machine learning and deep learning – to help you reduce risk and gain real business value.',
        projectFIle: 'https://www.sas.com/en_us/solutions/iot.html'
      },
      {
        projectName: 'SAS® for Personal Data Protection',
        projectDescription: ' Not only do customers and employees depend on you to protect their personal data, but certain regulations – including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) – require you to do so to avoid harsh penalties. That’s why having the right technology in place is so important. SAS helps you with every step of the process, from gaining access to data sources to auditing the results.',
        projectFIle: 'https://www.sas.com/en_us/solutions/personal-data-protection.html'
      },

      {
        projectName: 'Risk Management',
        projectDescription: 'No matter how your financial institution prioritizes risk, SAS has proven methodologies and best practices to help you establish a risk-aware culture, optimize capital and liquidity, and meet regulatory demands. Put on-demand, high-performance risk analytics in the hands of your risk professionals to ensure greater efficiency and transparency. Strike the right balance between short- and long-term strategies. And confidently address changing regulatory requirements.',
        projectFIle: 'https://www.sas.com/en_us/solutions/risk-management.html'
      },
      {
        projectName: 'Analytics in the Cloud',
        projectDescription: 'Get the power and freedom you need to innovate with analytics in the cloud. SAS takes on the design and delivery of software, infrastructure and services in a managed environment – or you can simply sign up, log in and get to work. Whichever SAS Cloud option you choose,  we tune the solution to your requirements so you can focus on solving your analytic challenges and quickly realize value.',
        projectFIle: 'https://www.sas.com/en_us/solutions/cloud/sas-cloud.html'
      },

      {
        projectName: 'Marketing',
        projectDescription: 'No matter your level of marketing maturity, marketing solutions from SAS empower you to reimagine marketing. Adaptive planning, journey activation and a real-time decision engine enable you to create appealing, moments-based customer experiences that boost profitability and strengthen brand loyalty.',
        projectFIle: 'https://www.sas.com/en_us/solutions/customer-intelligence.html'
      },
      {
        projectName: 'SAS® INTELLIGENT DECISIONING',
        projectDescription: 'SAS Intelligent Decisioning enables you to make the best decisions when interacting with customers, partners, suppliers and employees.',
        projectFIle: 'https://www.sas.com/en_us/software/intelligent-decisioning.html'
      },
      {
        projectName: 'Supply Chain Intelligence',
        projectDescription: 'Understand demand patterns, your supply networks, operations, quality and customer service requirements like never before. SAS gives you a critical advantage. Combine data from multiple sources. Quickly analyze, visualize and share information. And achieve more accurate forecasts, greater integrated business planning efficiency, healthier profits and higher customer satisfaction.',
        projectFIle: 'https://www.sas.com/en_us/solutions/supply-chain.html'
      }
    ]
  }
  return (
    <div>
      {/* company name */}
      <p>{mockCompany.companyName}</p>
      <p>{mockCompany.companyDescription}</p>
      {/* option defaul buy */}
      <div className='market-buy'>
        <p>Market Buy</p>
        <button className='buy-button'><a href={mockCompany.companyFile}>Company info</a></button>
        <button className='buy-button'>Buy</button>
      </div>
      {/* project buy  */}
      {mockCompany.optionArray.map((item, i) =>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{item.projectName}</p>
            <button className='buy-button'> <a href={item.projectFIle}>Project info</a></button>
            <button className='buy-button'><Link to="/buyScreen">Buy</Link></button>
          </div>
          <p className='project-description'>{item.projectDescription}</p>
        </div>

      )}
    </div>
  );
}

export default StockScreen;
