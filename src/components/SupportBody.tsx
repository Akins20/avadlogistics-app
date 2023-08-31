import "./history.css"

interface ContainerProps {
    name: string;
}
const SupportBody: React.FC<ContainerProps> = () => {
    return (
        <div className="support-body">
            <p>Hello World</p>
        </div>
    )
}

export default SupportBody