import './CompanyLandingPage.css';

function CompanyLandingPage({strings}) {
  return (
    <div>
      <p>SAS Project screen</p>
      <div>
        <p>{strings.addProject}</p>
        <div>
          <input type="text" placeholder={strings.projectName} />
        </div>
        <div>
          <input type="text" placeholder={strings.projectDescription} />
        </div>
        <div>
          <button type="submit" >
            <i className="fa fa-search">{strings.documentUpload}</i>
          </button>
        </div>
        <button>{strings.uploadProjectDescription}</button>
      </div>
      <table>
        <div>
          <ui> {strings.projectName}</ui>
          <ui> {strings.lastEdited}</ui>
          <ui> {strings.uploader}</ui>
          <ui> {strings.description}</ui>
          <ui> {strings.document}</ui>
          <ui> {strings.editProps}</ui>
          <ui> {strings.deleteProject}</ui>
        </div>
        {/* switch to map */}
        <div>
          <ui> Advanced Analytics</ui>
          <ui> 2/2/22</ui>
          <ui> Aaron Rea</ui>
          <ui> sdlgishdgao assg</ui>
          <ui> link here</ui>
          <ui> Icon here</ui>
          <ui> Trash can here</ui>
        </div>
        <div>
          <ui> Fraud Detection</ui>
          <ui> 2/2/22</ui>
          <ui> Aaron Rea</ui>
          <ui> sdlgishdgao assg</ui>
          <ui> link here</ui>
          <ui> Icon here</ui>
          <ui> Trash can here</ui>
        </div>

      </table>
    </div>
  );
}

export default CompanyLandingPage;
