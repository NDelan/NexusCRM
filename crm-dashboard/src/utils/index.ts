import type { Contact, Deal, DealStage } from '../types';

// TASK 1: Create a function that combines first and last name
// - Function name: getContactFullName
// - Parameter: contact (type: Contact)
// - Return type: string
// - Should return: "FirstName LastName" format
export const getContactFullName = (contact: Contact): string => {
  return `${contact.firstName} ${contact.lastName}`;
};

// TASK 2: Create a currency formatting function
// - Function name: formatCurrency
// - Parameter: amount (type: number)
// - Return type: string
// - Should format as US currency (e.g., $15,000.00)
// - Hint: Use Intl.NumberFormat with 'en-US' locale and 'currency' style
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

// TASK 3: Calculate total deal values grouped by stage
// - Function name: calculateDealsByStage
// - Parameter: deals (type: Deal[])
// - Return type: Record<DealStage, number>
// - Should return an object with each stage as key and total value as value
// - Initialize all stages to 0, then loop through deals and add values
export const calculateDealsByStage = (deals: Deal[]): Record<DealStage, number> => {
  // STEP 3a: Create result object with all stages set to 0
  const result: Record<DealStage, number> = {
    'lead': 0,
    'qualified': 0,
    'proposal': 0,
    'negotiation': 0,
    'closed-won': 0,
    'closed-lost': 0

  };

  // STEP 3b: Loop through deals and add their values to the correct stage
  deals.forEach(deal => {
    result[deal.stage] += deal.value;
  });

  return result;
};

// TASK 4: Generate sample contact data
// - Function name: generateSampleContacts
// - No parameters
// - Return type: Contact[]
// - Create array with 2-3 sample contacts
// - Include: id, firstName, lastName, email, phone (optional), company (optional), createdAt, updatedAt
export const generateSampleContacts = (): Contact[] => {
  return [
    {
        id: '1',
        firstName: 'Elsi',
        lastName: 'Dee',
        email: 'elsi.dee@example.com',
        phone: '+1-555-0123',
        company: 'Tech Corp',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: '2',
        firstName: 'Torgbui',
        lastName: 'Tsali',
        email: 'torgbui.tsali@startup.com',
        company: 'StartupXYZ',
        createdAt: new Date('2024-01-20'),
        updatedAt: new Date('2024-01-20')
      }
  ];
};

// TASK 5: Generate sample deal data
// - Function name: generateSampleDeals
// - No parameters
// - Return type: Deal[]
// - Create array with 2-3 sample deals
// - Include: id, title, value, stage, contactId (should match contact IDs), description, createdAt, updatedAt
export const generateSampleDeals = (): Deal[] => {
  return [
    {
        id: '1',
        title: 'Website Redesign Project',
        value: 15000,
        stage: 'proposal',
        contactId: '1',
        description: 'Complete website overhaul with modern design',
        createdAt: new Date('2024-01-16'),
        updatedAt: new Date('2024-01-16')
      },
      {
        id: '2',
        title: 'Mobile App Development',
        value: 50000,
        stage: 'negotiation',
        contactId: '2',
        description: 'Native iOS and Android app',
        createdAt: new Date('2024-01-21'),
        updatedAt: new Date('2024-01-21')
      }
  ];
};