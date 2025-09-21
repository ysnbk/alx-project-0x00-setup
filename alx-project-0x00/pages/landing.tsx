import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing:React.FC = ()=>{
    return(
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Button 1" styles="m-5 p-2 cursor-pointer bg-red-300 small rounded-sm"></Button>
            <Button title="Button 2" styles="m-5 p-2 cursor-pointer bg-blue-500 medium rounded-md"></Button>
            <Button title="Button 3" styles="m-5 p-2 cursor-pointer bg-green-800 large rounded-lg"></Button>
        </div>
    )
}
export default Landing;