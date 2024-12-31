import React, { useState } from 'react'

function LeadCreate() {

  
    const[lead,setLead]=useState({
                                    name:"",mobile:"",
                                    email:"",college:"",
                                    qualification:"",passout_year:"",
                                    source:"",course:"",
                                    course_mode:"",status:""
                                })

        function handleSubmit(event){

            event.preventDefault()

            console.log(lead);
            
        }

        
    return (
        <div>
            <div class="container mt-5">
                <div class="card p-4">
                    <h2 class="text-center mb-4">Add Student Details</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                    <input type="text" 
                                    class="form-control" 
                                    id="name"
                                     name="name" 
                                     placeholder="Enter Name" 
                                     required 
                                     onChange={(e)=>setLead({...lead,name:e.target.value})}
                                     />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                                    <input 
                                    type="text"
                                     class="form-control"
                                      id="mobile" 
                                      name="mobile"
                                       placeholder="Enter Mobile" 
                                       required 
                                       onChange={(e)=>setLead({...lead,mobile:e.target.value})}
                                       />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                                    <input
                                     type="email" 
                                     class="form-control"
                                      id="email"
                                       name="email"
                                        placeholder="Enter Email" 
                                        required 
                                        onChange={(e)=>setLead({...lead,email:e.target.value})}

                                        />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-building"></i></span>
                                    <input
                                     type="text"
                                      class="form-control" 
                                      id="college"
                                       name="college"
                                        placeholder="Enter College"
                                         required
                                         onChange={(e)=>setLead({...lead,college:e.target.value})}

                                         />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-mortarboard-fill"></i></span>
                                    <input 
                                    type="text"
                                    onChange={(e)=>setLead({...lead,qualification:e.target.value})}

                                    class="form-control" id="qualification" name="qualification" placeholder="Enter Qualification" required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="text"
                                    onChange={(e)=>setLead({...lead,passout_year:e.target.value})}

                                    class="form-control" id="passout_year" name="passout_year" placeholder="Enter Passout Year" required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="source" class="form-label">Source</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-box-arrow-in-right"></i></span>
                                    <select
                                    onChange={(e)=>setLead({...lead,source:e.target.value})}

                                     class="form-select" 
                                     id="source" 
                                     name="source"
                                      required>
                                        <option value="instagram">Instagram</option>
                                        <option value="facebook">Facebook</option>
                                        <option value="referral">Referral</option>
                                        <option value="walkin" selected>Walk-in</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="course" class="form-label">Course</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-journal-code"></i></span>
                                    <select
                                     class="form-select" 
                                     onChange={(e)=>setLead({...lead,course:e.target.value})}
                                     id="course" name="course" required>
                                        <option value="TESTING">TESTING</option>
                                        <option value="PYTHON DJANGO" selected>PYTHON DJANGO</option>
                                        <option value="MEARN">MEARN</option>
                                        <option value="DATA SCIENCE">DATA SCIENCE</option>
                                        <option value="JAVA SPRING">JAVA SPRING</option>
                                        <option value=".NET">.NET</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="course_mode" class="form-label">Course Mode</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-globe"></i></span>
                                    <select
                                     class="form-select" 
                                     onChange={(e)=>setLead({...lead,course_mode:e.target.value})}
                                     id="course_mode" name="course_mode" required>
                                        <option value="ONLINE">ONLINE</option>
                                        <option value="OFFLINE" selected>OFFLINE</option>
                                        <option value="HYBRID">HYBRID</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="status" class="form-label">Status</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-flag"></i></span>
                                    <select class="form-select" 
                                     onChange={(e)=>setLead({...lead,status:e.target.value})}
                                    id="status" name="status" required>
                                        <option value="FOLLOWUP" selected>FOLLOW-UP</option>
                                        <option value="PROCEEDTOADMISSION">PROCEED-TO-ADMISSION</option>
                                        <option value="NOTINTERESETED">NOT-INTERESTED</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LeadCreate
