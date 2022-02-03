import './UserLandingPage.css';
import UserTableMockJson from '../../mocks/userTableMock.json'
function UserLandingPage({strings}) {
  return (
    <div>
      <p>Aaron's dashboard</p>
      <p>10000$</p>
      <p>Insert beautiful chart here</p>

      <table>
        <div>
          <ui> {strings.company}</ui>
          <ui> {strings.project}</ui>
          <ui> {strings.action}</ui>
          <ui> {strings.price}</ui>
          <ui> {strings.timePlaced}</ui>
          <ui> {strings.timeCompleted}</ui>
        </div>
        <div>
          <ui> Advanced Analytics</ui>
          <ui> Auto AI</ui>
          <ui> Buy</ui>
          <ui> 5.2$/share</ui>
          <ui> 2/2/22</ui>
          <ui> 2/2/22</ui>
        </div>
        <div>
          <ui> SAS</ui>
          <ui> Fraud software</ui>
          <ui> Sell</ui>
          <ui> 540$/share</ui>
          <ui> 2/1/22</ui>
          <ui> Processing</ui>
        </div>

      </table>
    </div>
  );
}

export default UserLandingPage;
