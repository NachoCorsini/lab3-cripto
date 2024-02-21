import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://laboratorio-ab82.restdb.io/rest",
	headers: {'x-apikey': '650b525568885487530c00bb'}
});

export default {

    newTrade(newTrade) {
        return apiClient.post("/transactions", newTrade);
    },
    getMovements(email) {
      return apiClient.get(`/transactions?q={"user_id": "${email}"}`);
    },
    getMovementById(id) {
      return apiClient.get(`/transactions/${id}`);
    },
    updateMovement(id, transEdit) {

      return apiClient.put(`/transactions/${id}`, transEdit);
    },
    deleteMovement(id) {
      return apiClient.delete(`/transactions/${id}`);
    },

    getCryptoData(coin){
      return axios.get("https://criptoya.com/api/buenbit/"+coin+"/ars/0.1")
    },
  
    cryptos: [
      { id: 0, name: "Bitcoin", symbol: "BTC", amount: 0,sales: 0, purchases: 0, amountInMoney: 0, result: 0 },
      { id: 1, name: "Ethereum", symbol: "ETH", amount: 0,sales: 0, purchases: 0, amountInMoney: 0, result: 0 },
      { id: 2, name: "Dai", symbol: "DAI", amount: 0,sales: 0, purchases: 0, amountInMoney: 0, result: 0 },
    ],
    
  }