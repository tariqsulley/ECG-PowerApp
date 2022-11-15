import React, {Component} from "react"
import {Text,View,StyleSheet} from "react-native"
import ComplaintPageTemplate from "./ComplaintPageTemplate"

let props = {
    title: "Report General Enquiry",
    titleDesc: "You will receive our response via email",
    subject: "Subject",
    subjectArea: "General Enquiry",
    subjectDesc:"Report any meter or transmission fault,billing or service issue.",
    commments : "comments",
    attachImg: "Attach an Image(optional)",
    reportBtn: "REPORT THIS ISSUE"
}

class EnquiryView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ComplaintPageTemplate {...props}/>
        )
    }
}

export default EnquiryView

const style = StyleSheet.create({
    
})