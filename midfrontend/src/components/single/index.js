import React from "react";

const single = () => {
    return(
        <div>
            <header/>
                <main id="main">
                  <div className="container">
                    <div className="row topspace">
                      <div className="col-sm-8 col-sm-offset-2">
                        <article className="post">
                          <header className="entry-header">
                            <div className="entry-meta"> 
                              <span className="posted-on"><time className="entry-date published" date="2013-06-17">June 17, 2013</time></span>			
                            </div> 
                            <h1 className="entry-title"><a href="single.html" rel="bookmark">Vivamus Lacus Mauris</a></h1>
                          </header> 
                          <div className="entry-content"> 
                            <p><img alt src="assets/images/mac.jpg" /></p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, rerum voluptates veniam. Esse, nihil, ea, eaque, quos cum id tempore voluptate nisi nemo debitis impedit officiis culpa repellat voluptatum in aperiam error quo minima ratione ex pariatur maxime eligendi dolore nesciunt molestiae enim alias atque commodi delectus perferendis. Blanditiis, iste placeat nostrum in! Eligendi, omnis, unde, quos ullam nesciunt molestias quis a saepe nisi distinctio molestiae voluptate obcaecati officiis consequuntur similique aspernatur rerum sequi placeat iure quaerat itaque libero officia recusandae ad corrupti aperiam cum beatae. Adipisci ad natus deleniti.
                            </p>
                            <p>
                              Dolores harum alias consequatur blanditiis. Inventore, quod, ullam veritatis eum ratione neque quis fugit quae optio facilis in ipsa! Maiores, quia, possimus repellendus iusto nostrum nisi doloribus qui excepturi ducimus veritatis molestiae autem consequatur quae ex nihil id sapiente minima adipisci. Quibusdam, aperiam, sapiente, nobis, possimus vero laudantium delectus esse minus quo nihil perspiciatis accusamus. Cupiditate sapiente illum accusantium animi pariatur sed minima nam. 
                            </p>
                            <blockquote>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, itaque, porro, non sequi sunt vel quibusdam harum ea ratione ipsum eius eos maxime vitae hic ab dignissimos natus assumenda similique earum laboriosam possimus debitis molestiae. Commodi, facilis, et, officia hic quos quas ipsam harum amet illum quia reprehenderit sequi repellat. Asperiores, fugiat, optio reiciendis nam nisi assumenda alias non similique modi ducimus nostrum quasi consequatur ipsa animi soluta!
                            </blockquote>
                            <p>
                              Harum, consectetur, quia nisi fugiat quasi ea amet cum inventore aperiam optio qui perspiciatis debitis molestiae laborum minima doloremque ullam eum nesciunt repellendus dolor dicta cumque deserunt. Quaerat, saepe, maxime, quod, dolor nisi assumenda aut est quos optio animi aliquid quidem voluptates adipisci hic recusandae dicta quis eligendi illo ducimus asperiores reiciendis odit distinctio natus? In, reprehenderit, facere, ipsam, vel architecto autem temporibus a quidem voluptatum at nesciunt quas facilis. Soluta, excepturi, nihil, illum dicta hic ratione tenetur voluptate dolorum a tempore dignissimos reprehenderit voluptas expedita officiis enim minus adipisci?</p>
                            <h3>Deserunt, ullam, quo voluptate rem sed alias numquam eum natus!</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, aperiam, ab neque est cum iste reprehenderit quidem eligendi ad dicta ducimus quod nihil amet! Possimus, qui, dolorem, animi quas nesciunt corporis esse maiores iusto optio deserunt sequi aspernatur voluptatem velit suscipit nam temporibus eaque neque hic quaerat molestiae nisi dolor numquam similique quae voluptas quos ex! Pariatur, voluptas, voluptatibus corporis animi nihil beatae asperiores explicabo odio at aspernatur ea sapiente voluptatem placeat fugit quas magni tempore aliquid minima eos tempora in id eveniet et maxime iste a quaerat dolorum consequuntur?</p>
                            <h4>Perferendis, odit, optio, exercitationem quas ipsa eius quod ut aperiam facilis iste ratione odio laborum?</h4>
                            <p>Dolore aliquid ipsum cum sint velit! Esse, perferendis illo hic temporibus reprehenderit nemo veritatis omnis velit quas impedit at facilis voluptatibus blanditiis qui maiores quod incidunt nobis maxime.</p>
                            <p>A, quo quibusdam iusto repellendus blanditiis. Repellendus, doloribus, veritatis blanditiis dolores cumque in pariatur magni velit quibusdam doloremque amet harum dicta neque voluptas possimus dignissimos corporis voluptatibus nemo nostrum quae fuga enim beatae voluptate ex maxime sequi iusto. Voluptate, neque, quisquam, ipsum reprehenderit pariatur magnam excepturi libero quis nam inventore recusandae molestiae temporibus explicabo vel eius facere sit quae deleniti laboriosam voluptatibus necessitatibus sequi distinctio!</p>
                          </div> 
                        </article>{/* #post-## */}
                      </div> 
                    </div> {/* /row post  */}
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <div id="comments">	
                          <h3 className="comments-title">3 Comments</h3>
                          <a href="#comment-form" className="leave-comment">Leave a Comment</a>
                          <ol className="comments-list">
                            <li className="comment">
                              <div>
                                <img src="assets/images/avatar_man.png" alt="Avatar" className="avatar" />
                                <div className="comment-meta">
                                  <span className="author"><a href="#">John Doe</a></span>
                                  <span className="date"><a href="#">January 22, 2011 at 4:55 pm</a></span>
                                  <span className="reply"><a href="#">Reply</a></span>
                                </div>
                                <div className="comment-body">
                                  Morbi velit eros, sagittis in facilisis non.
                                </div>
                              </div>
                              <ul className="children">
                                <li className="comment">
                                  <div>
                                    <img src="assets/images/avatar_man.png" alt="Avatar" className="avatar" />
                                    <div className="comment-meta">
                                      <span className="author"><a href="#">John Doe</a></span>
                                      <span className="date"><a href="#">January 22, 2011 at 4:55 pm</a></span>
                                      <span className="reply"><a href="#">Reply</a></span>
                                    </div>{/* .comment-meta */}
                                    <div className="comment-body">
                                      Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus.
                                    </div>{/* .comment-body */}
                                  </div>
                                </li>
                              </ul>{/* .children */}
                            </li>
                            <li className="comment">
                              <div>
                                <img src="assets/images/avatar_woman.png" alt="Avatar" className="avatar" />
                                <div className="comment-meta">
                                  <span className="author"><a href="#">Jonnes</a></span>
                                  <span className="date"><a href="#">January 22, 2011 at 4:55 pm</a></span>
                                  <span className="reply"><a href="#">Reply</a></span>
                                </div>{/* .comment-meta */}
                                <div className="comment-body">
                                  Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus.												</div>{/* .comment-body */}
                              </div>
                            </li>
                          </ol>
                          <div className="clearfix" />
                          <nav id="comment-nav-below" className="comment-navigation clearfix" role="navigation"><div className="nav-content">
                              <div className="nav-previous">← Older Comments</div>
                              <div className="nav-next">Newer Comments →</div>
                            </div></nav>{/* #comment-nav-below */}
                          <div id="respond">
                            <h3 id="reply-title">Leave a Reply</h3>
                            <form action method="post" id="commentform" className>
                              <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="inputEmail">Email address <i className="text-danger">*</i></label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="inputWeb">Website</label>
                                <input type="nane" className="form-control" id="inputWeb" placeholder="http://" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="inputComment">Comment</label>
                                <textarea className="form-control" rows={6} defaultValue={""} />
                              </div>
                              <div className="row">
                                <div className="col-md-8">
                                  <div className="checkbox">
                                    <label> <input type="checkbox" /> Subscribe to updates</label>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <button type="submit" className="btn btn-action">Submit</button>
                                </div>
                              </div></form> {/* /respond */}
                          </div>
                        </div>
                      </div> {/* /row comments */}
                      <div className="clearfix" />
                    </div>	{/* /container */}
                  </div>
                </main>
            <footer/>
            <underfooter/>
        </div>
    );
};

export default single;