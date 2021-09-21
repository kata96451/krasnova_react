import React from "react";
import './main.css'
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form"



export default function MainPage() {
    return <>
        <Header />
        <Form />
        <main className="container">
            <h1 className="h1">travel with <span>booking</span></h1>
            <p className="text"><span><span>Architecto aut delectus facere perspiciatis vel. Architecto, aspernatur aut dignissimos et fugiat harum hic iure iusto laudantium odio omnis porro quas sequi? Dolorum fuga illo molestias natus praesentium suscipit voluptatem!</span><span>Aliquam facere odio quisquam soluta suscipit! Accusantium, aut, blanditiis consequuntur corporis ea eos ex in molestiae mollitia obcaecati odio, officiis quidem tempora. Aut eum mollitia nesciunt perspiciatis quidem vero vitae.</span></span></p>
        </main>
        </>


}