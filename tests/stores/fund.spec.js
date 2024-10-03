import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { usefundStore } from '@/stores/fund.js'; // Adjust the path as needed
import axios from 'axios';

vi.mock('axios');

describe('fundStore', () => {
  let fundStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    fundStore = usefundStore();
  });

  it('loads product data for a given period', async () => {
    const mockData = { data: { data: { funds: [{ id: 1, amount: 100 }] } } };
    axios.get.mockResolvedValue(mockData);

    await fundStore.loadProduct('1Y');

    expect(fundStore.docList).toEqual(mockData.data.data.funds);
    expect(axios.get).toHaveBeenCalledWith('https://storage.googleapis.com/finno-ex-re-v2-static-staging/recruitment-test/fund-ranking/1Y.json');
  });

});
