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

const getBrandDetailsById = async(id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${base_URL}/product/brand/${id}`,{
            headers : {
                Authorization: `Bearer ${token}` 
            }
        });
        const data = response?.data?.result || [];
        return data;
    } catch (error) {
        console.log(error,'get all brand details for product page');
        
    }
}


export {
    getAllBranchDetails, getBrandDetailsById
}