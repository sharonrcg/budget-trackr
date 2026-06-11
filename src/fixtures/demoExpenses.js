import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const demoExpenses = [
    {
        id: uuidv4(),
        description: 'Rent',
        amount: 150000,
        createdAt: moment().startOf('month').valueOf(),
        note: 'Monthly apartment rent'
    },
    {
        id: uuidv4(),
        description: 'Groceries',
        amount: 18432,
        createdAt: moment().subtract(3, 'days').valueOf(),
        note: ''
    },
    {
        id: uuidv4(),
        description: 'Netflix',
        amount: 1599,
        createdAt: moment().subtract(7, 'days').valueOf(),
        note: 'Streaming subscription'
    },
    {
        id: uuidv4(),
        description: 'Electric Bill',
        amount: 8750,
        createdAt: moment().subtract(10, 'days').valueOf(),
        note: ''
    },
    {
        id: uuidv4(),
        description: 'Gym Membership',
        amount: 4999,
        createdAt: moment().subtract(15, 'days').valueOf(),
        note: ''
    },
    {
        id: uuidv4(),
        description: 'Coffee',
        amount: 545,
        createdAt: moment().subtract(1, 'days').valueOf(),
        note: 'Local café'
    },
    {
        id: uuidv4(),
        description: 'Gas',
        amount: 6200,
        createdAt: moment().subtract(2, 'days').valueOf(),
        note: ''
    }
];

export default demoExpenses;
