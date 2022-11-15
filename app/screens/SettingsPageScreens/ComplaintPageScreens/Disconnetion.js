import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import ComplaintPageTemplate from './ComplaintPageTemplate'

let props = {
    title: "Report Disconnection / New Service",
    titleDesc: "You will receive our response via email",
    subject: "Subject",
    subjectArea: "Disconnection / New Service",
    subjectDesc:"Report any meter or transmission fault,billing or service issue.",
    commments : "comments",
    attachImg: "Attach an Image(optional)",
    reportBtn: "REPORT THIS ISSUE"
}

class DisconnectionView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <ComplaintPageTemplate {...props} />
        )
    }
}

export default DisconnectionView

const styles = StyleSheet.create({

})