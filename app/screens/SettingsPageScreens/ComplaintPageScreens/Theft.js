import React, {Component} from "react"
import {Text,View, StyleSheet} from "react-native"
import ComplaintPageTemplate from "./ComplaintPageTemplate"


let props = {
    title: "Report Theft/Staff Misconduct",
    titleDesc: "You will receive our response via email",
    subject: "Subject",
    subjectArea: "Theft/Staff Misconduct",
    subjectDesc:"Report any meter or transmission fault,billing or service issue.",
    commments : "comments",
    attachImg: "Attach an Image(optional)",
    reportBtn: "REPORT THIS ISSUE"
}


class TheftView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ComplaintPageTemplate {...props}/>
        )
    }
}

export default TheftView

const styles = StyleSheet.create({

})
