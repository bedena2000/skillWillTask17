import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";

// Routing Settings
import { useParams } from "react-router-dom";

const factsInfoObject = {
    "1": {
        title: "ბრიუს უეინის სახელი მომდინარეობს ორი ნამდვილი გმირისგან",
        content: "ბეტმენის საიდუმლო ვინაობა, ბრიუს უეინი, ორი ისტორიული ფიგურისგან მომდინარეობდა. რობერტ ბრიუსი, შოტლანდიის ეროვნული გმირი, და შეშლილი ენტონი უეინი, ამერიკის რევოლუციის გმირი"
    },
    "2": {
        title: "Batcave-ის დებიუტი ტელევიზიით შედგა",
        content: "1943 წლის სატელევიზიო სერიალმა, სახელწოდებით ბეტმენი, შემოიტანა Batcave-ის კონცეფცია, რომ აღარაფერი ვთქვათ გამხდარ ალფრედ პენივორტზე."
    },
    "3": {
        title: "ბეტმენმა სძლია დარქსეიდს… ორჯერ!",
        content: "Darkseid არსებითად არის DC Universe-ის ბოლო ბოსი, ბოროტი ღმერთი, რომელსაც შეუძლია ტერფამდე ფეხებამდე მიაღწიოს თავად სუპერმენს. მიუხედავად იმისა, რომ ბეტმენი უბრალო მოკვდავია, მან ბოროტმოქმედს ორ ცალკეულ შემთხვევაში დაამარცხა. პირველად დარქსეიდმა ააფეთქა იგი თავისი Omega Sanction სხივებით, ამიტომ ბეტმენმა ესროლა დარქსეიდს ღმერთის მკვლელი იარაღით. Darkseid-ის სხივებმა ბეტმენი დროში უკან დააბრუნეს, მაგრამ ბეტმენი საბოლოოდ დაუბრუნდა აწმყოს და ჩაშალა დარქსეიდის გეგმები. მეორედ ბეტმენმა ჩაიცვა Hellbat-ის ჯავშანი, რომელიც შექმნილია იუსტიციის ლიგის მიერ, რაც მას უზარმაზარ ძალას აძლევდა საკუთარი სიცოცხლის ძალის ხარჯზე. მან შეძლო დარქსეიდთან ჩხუბი საკმარისად დიდხანს, რათა დაესრულებინა თავისი მისია, გადაარჩინა მისი ვაჟი დემიან უეინი."
    },
    "4": {
        title: "ბეტმენის ყურები დამალული ჭურვებია",
        content: "მიუხედავად იმისა, რომ ეს ხრიკი გამოიყენებოდა, როდესაც კოსტუმში დიკ გრეისონი იყო, მოწინააღმდეგისკენ ღამურის ყურების გასროლის უნარი ძალიან სასაცილოდ გასაოცარია, რომ არ შეიცავდეს."
    }
};

const Facts = () => {
    const params = useParams();
    const { factId } = params;
    const contentObj = factsInfoObject[factId];
    const paramsArray = Object.keys(params);
    if(paramsArray.length === 0 || contentObj === undefined) {
        return (
            <div className="error-page">
                <p>
                    შენ შემოხვედი ამ გვერდზე /facts - როუთით,
                    იმისათვის რო ნახო კონტენტი შეიყვანე url-ში id-ი (1 იდან 4 მდე)
                    მაგალითად: /facts/1
                </p>
                <Link to="/" className="links-style">
                    მთავარი გვერდი
                </Link>

            </div>
        )
    };

    const { title, content } = contentObj;

    return (
        <div>
            
            <Header />

            <div className="facts-wrapper">
                
                <p className="facts-title">
                    {title}
                </p>

                <p className="facts-content">
                    {content}
                </p>


            </div>

            <div style={{
                padding: "20px"
            }}>

                <a href="https://www.ign.com/articles/2016/03/24/17-batman-facts-you-probably-didnt-know">
                    Source
                </a>   

            </div>
    
        </div>
    )
};

export default Facts;