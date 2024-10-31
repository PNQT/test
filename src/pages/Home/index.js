import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Button from "~/components/Button";
import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);
function Home() {
    return ( 
        
            <section className={cx("heroSection")}>
                 <div className={cx("heroSectionFindApply")}>
                     <div className={cx("findAndApply")}>
                         <div className={cx("findAndApplyContent")}>
                                <h1 className={cx("findAndApplyContentTitle")}>Find and Apply for a Job that suits you!</h1>
                                <p className={cx("findAndApplyContentDescription")}>Here you can find your best job, Explore hundreds of jobs with us. Ready for your next adventure?</p>
                         </div>    
                         <div className={cx("findAndApplySearch")}>
                                <input className={cx("findAndApplySearchInput")} type="text" placeholder="Search for jobs"/>
                                <Button className={cx("findAndApplySearchButton")}>Search</Button>
                         </div>     
                     </div>

                     <div className={cx("quickSearch")}>
                        <div className={cx("quickSearchTitle")}>
                            <h2 className={cx("content")}>Most Searched Jobs:</h2>
                        </div> 
                        <div className={cx("quickSearchResult")}>
                            <div className={cx("tear")}>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                            </div>
                            <div className={cx("tear")}>
                            <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                                <div className={cx("quickSearchResultItem")}>
                                    <h3>Web Developer</h3>
                                </div>
                            </div>
                        </div>  
                     </div>
                 </div>
                 <div className={cx("heroSectionContent")}>
                     <figure className={cx("heroSectionContentImage")}>
                        <Image src={images.blackMan} alt="black_man"></Image>
                     </figure>
                     <div className={cx("heroSectionContentCongratulations")}>
                        <figure >
                            <img 
                             className={cx("imageLeft")}
                            src={require("~/assets/icons/email.svg").default} alt="email">

                            </img>
                        </figure>
                        <div className={cx("heroSectionContentCongratulationsContent")}>
                           <h5 className={cx("textHight")}>Congratulations!</h5>
                           <h5 className={cx("text")}>You have got an Email</h5>
                        </div>
                        <figure >
                            <img 
                            className={cx("imageRight")}
                            src={require("~/assets/icons/tick.svg").default} alt="tick">                               
                            </img>
                        </figure>
                     </div>
                     <div className={cx("heroSectionContentFeedback")}>
                        <figure >
                            <img 
                               className={cx("heroSectionContentFeedbackImage")}
                                src={require("~/assets/icons/ellipse1.svg").default} alt="ellipse1">
                            </img>
                        </figure >
                        <h5 className={cx("heroSectionContentFeedbackText")}>Hello, I am looking to apply
                        for the role of a UX Designer
                        </h5>

                     </div>
                     <div className={cx("heroSectionContentMember")}>
                        <h4>
                            200+
                        </h4>
                        <h5>
                        Got job on our platform 
                        </h5>
                        <figure>
                            <img src={require("~/assets/icons/ellipse4.svg").default} alt="ellipse4"></img> 
                            <img src={require("~/assets/icons/ellipse5.svg").default} alt="ellipse5"></img>      
                            <img src={require("~/assets/icons/ellipse7.svg").default} alt="ellipse7"></img>      
                            <img src={require("~/assets/icons/ellipse8.svg").default} alt="ellipse8"></img>      
                            <img src={require("~/assets/icons/ellipse9.svg").default} alt="ellipse9"></img>      
                            <img src={require("~/assets/icons/ellipse10.svg").default} alt="ellipse10"></img>      
                            <img src={require("~/assets/icons/plus.svg").default} alt="plus"></img>                            
                        </figure>
                     </div>
                     <div className={cx("heroSectionContentJobs")}>
                        <div className={cx("heroSectionContentJobsHeader")}>
                            <div className={cx("Logo")}>
                                <figure>
                                    <img src={require("~/assets/icons/logo1.svg").default} alt="logo1"></img>
                                </figure>
                                <h4>
                                Kokomlemle
                                </h4>
                            </div>
                            <Button>Full Time</Button>
                        </div>
                        <div className={cx("heroSectionContentJobsContent")}>
                            <h5>Graphic Designer</h5>
                            <h6>The company seeks to employ the 
                            services of a.....................</h6>
                            <span>Read More</span>
                        </div>
                     </div>
                 </div>
            </section>
        
     );
}

export default Home;