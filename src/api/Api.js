import axios from "axios";
import { base_URL } from "../utils/Constant";


const getAllBranchDetails = async() => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${base_URL}/product/list/brand`,{
            headers : {
                Authorization: `Bearer ${token}` 
            }
        });
        const data = response?.data?.result || [];
        return data;
    } catch (error) {
        console.log(error,'in all brand details');
        
    }
}


export {
    getAllBranchDetails
}