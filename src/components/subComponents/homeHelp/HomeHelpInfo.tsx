import { IonCard, IonCardTitle, IonRouterLink, IonText } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";

interface ContainerProps {
    name: string;
}

const HomeHelpInfo: React.FC<ContainerProps> = () => {
    return (

        <div className="homeHelpInfo">
            <h1>Articles</h1>
            <h5>1. How to optimize your supply chain using AVAD</h5>
            <p>
                AVAD is a powerful logistics app that can help you optimize your supply chain.
                In this article, we'll show you how to use AVAD to streamline your logistics operations,
                reduce costs, and improve your bottom line.
            </p>
            <h5>2. The benefits of using AVAD for your last-mile delivery operations.</h5>
            <p>
                AVAD is an excellent tool for last-mile delivery operations.
                In this article, we'll discuss some of the key benefits of using AVAD for your last-mile delivery operations.
            </p>
            <h5>3. How to use AVAD to track your cargo in real-time</h5>
            <p>
                One of the most useful features of AVAD is its real-time tracking capabilities.
                In this article, we'll show you how to use AVAD to track your cargo in real-time.
            </p>
            <h5>4. Top 5 features of AVAD that every logistics professional should know about</h5>
            <p>
                AVAD is an incredibly powerful logistics app, and  there
                are many features that every logistics professional should know about.
            </p>
            <h5>5. How AVAD can help reduce your logistics costs</h5>
            <p>
                Logistics costs can be a significant expense for many businesses.
                In this article, we'll show you how AVAD can help you reduce your logistics costs.
            </p>
            <h5>6. How to streamline your logistics operations using AVAD</h5>
            <p>
                AVAD is an excellent tool for streamlining your logistics operations.
                In this article, we'll show you how to use AVAD to streamline your logistics operations.
            </p>
            <h5>7. Concierge Services with AVAD. What is it?</h5>
            <p>
                AVAD offers concierge services to help logistics professionals streamline their operations and
                provide a better customer experience.
            </p>
            <p>For Frequently Asked Question,
                <IonRouterLink href="frequentQuestions">
                    Click Here
                </IonRouterLink>
            </p>
        </div>
    )
}

export default HomeHelpInfo