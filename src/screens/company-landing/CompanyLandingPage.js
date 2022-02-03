import './CompanyLandingPage.css';

function CompanyLandingPage() {
  return (
    <div>
      <p>SAS Project screen</p>
      <div>
        <p>Add a project</p>
        <div>
          <input type="text" placeholder="Project Name" />
        </div>
        <div>
          <input type="text" placeholder="Project Description" />
        </div>
        <div>
          <button type="submit" >
            <i className="fa fa-search">Document Upload</i>
          </button>
        </div>
        <button>Upload project description</button>
      </div>
      <table>
        <div>
          <ui> Project Name</ui>
          <ui> Last Edited</ui>
          <ui> Uploader</ui>
          <ui> Description</ui>
          <ui> Document</ui>
          <ui> Edit Props</ui>
          <ui> Delete Project</ui>
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
