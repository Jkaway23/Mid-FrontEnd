import React from "react";

const sidebarRight = () => {
    return(
        <div>
            <header/>
                <main id="main">
                  <div className="container">
                    <div className="row topspace">
                      {/* Article main content */}
                      <article className="col-sm-8 maincontent">
                        <header className="page-header">
                          <h1 className="page-title">Lorem ipsum dolor sit amet, consectetur.</h1>
                        </header>
                        <p><img src="assets/images/s2.jpg" alt /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente.</p>
                        <h3>Necessitatibus</h3>
                        <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                        <blockquote>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</blockquote>
                        <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                        <ul>
                          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus!</li>
                          <li>Laboriosam, aliquam totam asperiores nam velit voluptatum non quidem.</li>
                          <li>Voluptatem, libero quia voluptatum ab modi facere dolore assumenda?</li>
                          <li>Expedita, officia tenetur doloremque nulla temporibus ab voluptates adipisci.</li>
                          <li>Nostrum, nesciunt, inventore amet temporibus officia perferendis doloremque nulla.</li>
                          <li>Dolorum, ex earum maiores perspiciatis modi sequi odit mollitia.</li>
                        </ul>
                      </article>
                      {/* /Article */}
                      {/* Sidebar */}
                      <aside className="col-md-4 sidebar sidebar-left">
                        <div className="widget">
                          <h4>Lorem ipsum dolor sit</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ratione delectus reiciendis nulla nisi pariatur molestias animi eos repellat? Vel.</p>
                        </div>
                        <div className="widget">
                          <h4>Lorem ipsum dolor sit</h4>
                          <ul>
                            <li><a href>Lorem ipsum </a>dolor sit amet.</li>
                            <li>Nostrum, dolores labore tempore error.</li>
                            <li>Qui esse impedit vitae repellat.</li>
                            <li>Aliquam, laborum corporis molestiae nihil.</li>
                            <li>Voluptate, labore non adipisci nihil!</li>
                          </ul>
                        </div>
                      </aside>			
                      {/* /Sidebar */}
                    </div>
                  </div>	{/* /container */}
                </main>
            <footer/>
            <underfooter/>
        </div>
    );
};

export default sidebarRight;