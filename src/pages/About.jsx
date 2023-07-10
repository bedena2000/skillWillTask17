import React from "react";

// Components
import Header from "../components/Header";

const About = () => {
    return (
        <div>
            <Header />

            <div className="about-content">

                <p className="batman-title">About Batman: </p>

                <div className="batman-description">
                ბეტმენი არის სუპერგმირი, რომელიც გამოქვეყნებულია DC Comics-ის მიერ. ოპერირებს Gotham City-ში, ის ემსახურება როგორც მის მფარველს, იყენებს ღამურის სიმბოლოს, რათა შიში ჩააგდოს კრიმინალების გულებში. სხვა სუპერგმირებისგან განსხვავებით, ბეტმენს ხშირად ასახავს რაიმე „სუპერ ძალაუფლების“ ნაკლებობას, ნაცვლად იმისა, რომ იყენებს უწყვეტ ვარჯიშს და აღჭურვილობას დანაშაულთან საბრძოლველად. მისი საიდუმლო ვინაობაა ბრიუს უეინი, მდიდარი ფლეიბოი და ქველმოქმედი, რომელმაც დაიფიცა, რომ ებრძოდა დანაშაულს მას შემდეგ, რაც შეესწრო მშობლების სასტიკ მკვლელობას. ის მუშაობდა სხვადასხვა გუნდის წევრად, მათ შორის Justice League, Justice Society of America და Outsiders. ბეტმენი ასევე არის სხვადასხვა გუნდის დამფუძნებელი და ლიდერი, მათ შორის Batman Family, Batmen of All Nations და Batman Incorporated. მას ასევე აქვს მრავალი მეტსახელი, მათ შორის "ბნელი რაინდი", "კეპიანი ჯვაროსანი", "მსოფლიოს უდიდესი დეტექტივი" და "გოტემის დამცველი".
                </div>


                <div className="source-link">
                    <p>
                        Source:
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Batman">
                        Batman (Wiki)
                    </a>
                </div>

            </div>

        </div>
    )
};  

export default About;
