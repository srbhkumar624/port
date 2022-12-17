import "./project.css"
import { FaGithubSquare, FaLink } from "react-icons/fa";

export const Project = () => {
    return (
        <>
            <div className="projectMain" id="project">
                <h1 className="pageHeadingP">Projects</h1>
                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Tripadvisor clone</h3>
                        <p>Tripadvisor, Inc. is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/srbhkumar624/opposite-beginner-5472"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://fanciful-buttercream-b9885f.netlify.app/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
                                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
                                <img src="https://erons-blog.netlify.app/static/b7579add2ab1119a79026efd3d1af91e/6bc95/building-react-components-with-chakra-ui.webp" style={{width:"100px" ,height:"30px"}} alt="" />
                                {/* <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/tripadvisor.jpg" alt="tripadvisor image" />
                    </div>
                </div>



                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Stylecraze Clone</h3>
                        <p>StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty </p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/srbhkumar624/stylecrazewebsite"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://srbhkumar624.github.io/stylecrazewebsite/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
                                {/* <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" /> */}
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                {/* <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" /> */}
                                <img src="" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg secProjectImg">
                        <img src=".././images/stylecraze.jpg" alt="" />
                    </div>
                </div>
                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>KFC India Clone</h3>
                        <p>KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/srbhkumar624/kfcclonewebsite"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://srbhkumar624.github.io/kfcclonewebsite/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html" />

                                {/* <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/bootstrap-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" /> */}

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/kfc.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}