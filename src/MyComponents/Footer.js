import React from 'react'
import './body.css'

export const Footer = () => {
    // you can include style by making js object and passing value inside object as JSON

 let footerStyle ={
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
     border: "2px solid red"
     

 }
    return (
        <footer className="bg-dark text-light py-3 mt-5" style={footerStyle}>
            <p className="text-center">
                Copyright @ MyTodosList.com | Developed by <strong>Bhuwan Bhatt</strong> |2021 (React.js)
            </p>

        </footer>
    )
}
