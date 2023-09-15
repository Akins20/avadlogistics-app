import Pickup from "./pickup";



interface ContainerProps {
    name: string;
}

const PickupLocationBody: React.FC<ContainerProps> = () => {
    return (
        <Pickup name="pickup"/>
    )
}

export default PickupLocationBody