import axios from 'axios';
import { defineStore } from 'pinia'

export const usefundStore = defineStore('fund', {
  state: () => ({
    docList: [],
  }),
  actions: {
    async loadProduct(period = '1Y') {
      try {
        // const period = "1Y"
        const response = await axios.get(`https://storage.googleapis.com/finno-ex-re-v2-static-staging/recruitment-test/fund-ranking/1Y.json`);

        let dataFunds = response.data.data.funds || [];

        // console.log("this.docList",this.docList)
        dataFunds = dataFunds.sort((a, b) => {
          const key = `return_${period.toLowerCase()}`;
          return b[key] - a[key]; // Sort in descending order
        });
        this.docList = dataFunds;
      } catch (error) {
        console.log('error', error)
      }
    },
  }
})