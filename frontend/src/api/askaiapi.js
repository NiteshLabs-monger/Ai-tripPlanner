import apiClient from "./apiconfi";

const  ItenaryGenerationService = {
    generateItenary :  (data) => apiClient.post('itenary/generate',data),
    getItenary : (data) =>apiClient.get('askai/itenary',data)
}

export default ItenaryGenerationService;