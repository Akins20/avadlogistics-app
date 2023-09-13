import { IonCard, IonCardTitle, IonRouterLink, IonText } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";

interface ContainerProps {
    name: string;
}

const FrequentQuestionsInfo: React.FC<ContainerProps> = () => {
    return (

        <div className="homeHelpInfo">

            <h5>1. Is AVAD compatible with all types of cargo?</h5>
            <p>
                AVAD is compatible with most types of cargo, including pallets, boxes, and containers.
                However, some types of cargo may require additional tagging or tracking technologies.
            </p>
            <h5>2. Can AVAD be used for international shipments?</h5>
            <p>
                Yes, AVAD can be used for international shipments.
                However, you may need to comply with additional regulations and requirements for international shipments.
            </p>
            <h5>3. Can AVAD be used to track multiple shipments at once?</h5>
            <p>
                Yes, AVAD can be used to track multiple shipments at once.
                This can help you monitor your entire supply chain in real-time.
            </p>
            <h5>4. Is AVAD easy to use?</h5>
            <p>
                Yes, AVAD is designed to be easy to use. The app and web interface are user-friendly,
                and our customer support team is available to help you with any questions or issues you may have.
            </p>
            <h5>5. How does AVAD ensure the security of my data?</h5>
            <p>
                AVAD uses industry-standard security protocols to protect your data.
                We also offer optional encryption and other security features to help you protect your sensitive information.
            </p>
            <h5>6. Can I customize the tracking and notification settings in AVAD?</h5>
            <p>
                Yes, you can customize the tracking and notification settings in AVAD to suit your specific needs.
                You can choose which events to track, how frequently to receive updates, and which channels to receive notifications through.
            </p>
            <h5>7. Does AVAD offer real-time tracking?</h5>
            <p>
            Yes, AVAD offers real-time tracking for your shipments. This means you can monitor your cargo's location, temperature, 
            and other metrics in real-time, giving you greater visibility and control over your supply chain
            </p>
            <h5>8. How much does AVAD cost?</h5>
            <p>
            The cost of AVAD depends on a variety of factors, such as the number of shipments you need to track, the level of tracking and security features you require,
             and the length of your subscription. Contact us to learn more about our pricing options.
            </p>
            <h5>9. Does AVAD offer mobile apps?</h5>
            <p>
            AVAD is compatible with most types of cargo, including pallets, boxes, and containers. 
            However, some types of cargo may require additional tagging or tracking technologies.
            </p>
            <h5>10. Does AVAD offer customer support?</h5>
            <p>
            Yes, AVAD offers customer support to help you with any questions or issues you may have. 
            Our support team is available 24/7 to assist you.
            </p>
            <h5>11. Does AVAD offer customizable alerts and notifications?</h5>
            <p>
            Yes, AVAD offers customizable alerts and notifications that allow you to receive updates on your shipments in real-time. 
            You can choose which events to track and how frequently to receive updates..
            </p>
            <h5>12. Does AVAD offer security features to protect against theft and tampering?</h5>
            <p>
            Yes, AVAD offers security features to protect against theft and tampering, such as geofencing and cargo seals. 
            This helps you ensure that your cargo arrives at its destination safely and securely.
            </p>
        </div>
    )
}

export default FrequentQuestionsInfo