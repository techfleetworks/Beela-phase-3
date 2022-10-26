
import { TeamCard } from "../../../elements/TeamCard"
import data from "../../../../mockdata/team.json"
import styles from "./expectmentor.module.scss"

export default function OurTeam() {
 
  return (
    <div className="container-fluid">
      <div className="container">

     
        <h2 className="text-center py-4 my-4 primary-berry">What to Expect as a Mentor</h2>
        
     <div className="py-4 my-4">
              <div className="d-flex flex-row justify-content-around py-4 my-4  gap-4">
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-12 col-md-4 mt-4 ">
                          <TeamCard 
                                    key={""}
                                    imgSource="/images/expect1.jpg"
                                    name={""}
                                    title={""}
                                    description={`Leverage your experience to help women and non-binary  immigrants begin a tech career in Sweden.`}
                                    isVolunteer={""}
                                    bgcolor={"var(--color-honey)"}
                                    
                            />
                    </div>
                    <div className="col-12 col-md-4">
                            <TeamCard
                              key={""}
                              imgSource="/images/expect2.jpg"
                              name={""}
                              title={""}
                              description={"Mentees most often need help with CVs, interviews, and navigating the Swedish job market."}
                              isVolunteer={""}
                              bgcolor={"var(--color-honey)"}
                              
                            />
                    </div>
                    <div className="col-12 col-md-4">
                              <TeamCard 
                              key={""}
                              imgSource="/images/expect3.jpg"
                              name={""}
                              title={""}
                              description={"Our mentorship community is here to support you, whether you’re a first-time mentor or very experienced."}
                              isVolunteer={""}
                              bgcolor={"var(--color-honey)"}
                            />
                    </div>
                  </div>
                </div>       
              </div>

     </div>
             
     </div>
        
        
    </div>
  )
}