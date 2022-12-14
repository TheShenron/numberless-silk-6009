import {Route,Routes} from "react-router-dom";
import MealDeal from "../pages/MealDeal";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MealDeal/>}/>
    </Routes>
  )
}

export default AllRoutes