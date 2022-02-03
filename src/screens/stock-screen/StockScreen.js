import './StockScreen.css';
import { Link } from "react-router-dom";
import mockCompany from '../../mocks/mockCompany.json'
function StockScreen({strings}) {

  return (
    <div>
      {/* company name */}
      <p>{mockCompany.companyName}</p>
      <p>{mockCompany.companyDescription}</p>
      {/* option defaul buy */}
      <div className='market-buy'>
        <p>{strings.buy}</p>
        <button className='buy-button'><a href={mockCompany.companyFile}>{strings.companyInfo}</a></button>
        <button className='buy-button'>{strings.buy}</button>
      </div>
      {/* project buy  */}
      {mockCompany.optionArray.map((item, i) =>
        <div key={i}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{item.projectName}</p>
            <button className='buy-button'> <a href={item.projectFIle}>{strings.companyInfo}</a></button>
            <button className='buy-button'><Link to="/buyScreen">{strings.buy}</Link></button>
          </div>
          <p className='project-description'>{item.projectDescription}</p>
        </div>

      )}
    </div>
  );
}

export default StockScreen;
