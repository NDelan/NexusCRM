// These are the core data types for our CRM
// Interfaces define the "shape" of our data


export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;        // ? means optional
    company?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Deal {
    id: string;
    title: string;
    value: number;
    stage: DealStage;      // We'll define this below
    contactId: string;     // Links to a Contact
    createdAt: Date;
    updatedAt: Date;
    description?: string;
}

// Union type - stage can ONLY be one of these values
export type DealStage =
    | 'lead'
    | 'qualified'
    | 'proposal'
    | 'negotiation'
    | 'closed-won'
    | 'closed-lost';

  // This will be useful for our dashboard
  export interface DashboardStats {
    totalContacts: number;
    totalDeals: number;
    totalRevenue: number;
    conversionRate: number;
}

// Component props interfaces (we'll use these soon)
export interface ContactListProps {
    contacts: Contact[];
    onContactSelect: (contact: Contact) => void;
}

export interface DealCardProps {
    deal: Deal;
    contact: Contact;
    onDealUpdate: (deal: Deal) => void;
}