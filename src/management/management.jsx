import React from 'react';
import './about.css'
export function Management() {
  return (
    <main className="bd-example">
    <section className="top">
      <h2>Welcome, <span>[%user]</span></h2>
      <i className='fas fa-tools' style='font-size:24px'></i>
      <h2>Manage Users</h2>

    </section>

    <section className="content">

      <div className="content_left">
        <div clasNames="content_users">
          <a clasNames="btn btn-primary" href="" role="button">
            Add +
          </a>
          <div className="users_table">
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">UserName/Email</th>
                    <th scope="col">Date requested</th>
                    <th scope="col">Approved</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Samir</td>
                    <td>samirr14@byu.edu</td>
                    <td>09/27/2024</td>
                    <td><span>yes</span><input type="checkbox" /></td>
                    <td><a class="btn btn-primary" href="" role="button">
                        <span>Save/</span>edit
                      </a></td>

                  </tr>
                  <tr>
                    <td>Samir</td>
                    <td>samirr14@byu.edu</td>
                    <td>09/27/2024</td>
                    <td><span>yes</span><input type="checkbox" /></td>
                    <td><a className="btn btn-primary" href="" role="button">
                        <span>Save/</span>edit
                      </a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="content_right">

        <img src="media/images/conferenceCenter.png" />


      </div>

    </section>
  </main>

  );
}