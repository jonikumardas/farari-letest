import Recharts from "../ReChart/Recharts";
import PieChart from '../Piedeshbord/PieChart';
import './Deshboard.css';
const Deshboard = () => {
    
    return (
        <div className="conatainer">
            <div className="line-chart">
                <Recharts></Recharts>
            </div>
            <div className="Bar-chart">
                <PieChart></PieChart>
                
            </div>


            
        </div>
        
    );
};

export default Deshboard;