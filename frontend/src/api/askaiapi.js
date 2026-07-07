import apiClient from "./apiconfi";

const  ItenaryGenerationService = {
    generateItenary : async (data) => await apiClient.post('itenary/generate',data),
    getItenary : async (data) => await apiClient.get('askai/itenary',data)
}

export default ItenaryGenerationService;