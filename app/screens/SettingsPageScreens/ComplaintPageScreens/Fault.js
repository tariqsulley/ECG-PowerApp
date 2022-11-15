import React, {Component} from "react"
import ComplaintPageTemplate from "./ComplaintPageTemplate"
let props = {
    title: "Report Fault/Outage",
    titleDesc: "You will receive our response via email",
    subject: "Subject",
    subjectArea: "Fault/Outage",
    subjectDesc:"Report any meter or transmission fault,billing or service issue.",
    commments : "comments",
    attachImg: "Attach an Image(optional)",
    reportBtn: "REPORT THIS ISSUE"
}



class FaultView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ComplaintPageTemplate {...props}/>
        )
    }
}


export default FaultView

