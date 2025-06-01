// PRACTICE EXERCISE - Try to complete this!
// PRACTICE EXERCISE - Try to complete this!
import type { Contact, Deal } from '../types';
import { getContactFullName, formatCurrency } from '../utils';

// 1. Create a function that finds contacts by company
export const findContactsByCompany = (contacts: Contact[], company: string): Contact[] => {
  // Your code here - filter contacts by company
  // Hint: use contacts.filter() and check if contact.company equals the company parameter

  return contacts.filter(contact => contact.company && contact.company.toLowerCase() === company.toLowerCase())
};

// 2. Create a function that calculates total deal value for a contact
export const getTotalDealValue = (deals: Deal[], contactId: string): number => {
  // Your code here - sum up all deal values for a specific contact
  // Hint: use deals.filter() then reduce() or a loop
  return deals
        .filter(deal => deal.contactId && deal.contactId == contactId)
        .reduce((total, deal) => total + deal.value, 0);
};

// 3. Create a function that returns deal summary info
interface DealSummary {
  contactName: string;
  dealTitle: string;
  formattedValue: string;
  daysOld: number;
}

export const createDealSummary = (deal: Deal, contact: Contact): DealSummary => {
  // Your code here - create a summary object
  // Use getContactFullName() and formatCurrency() functions
  // Calculate days between now and deal.createdAt
  const now = new Date();
  const createdAt = new Date(deal.createdAt);
  const timeDifference = now.getTime() - createdAt.getTime();
  const daysOld = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return {
    contactName: getContactFullName(contact),
    dealTitle: deal.title,
    formattedValue: formatCurrency(deal.value),
    daysOld: daysOld
  };
};

// BONUS: Additional utility functions you might find useful

// Find the highest value deal for a contact
export const getHighestValueDeal = (deals: Deal[], contactId: string): Deal | null => {
    const contactDeals = deals.filter(deal => deal.contactId === contactId);

    if (contactDeals.length === 0) return null;

    return contactDeals.reduce((highest, current) =>
      current.value > highest.value ? current : highest
    );
  };

  // Get contact with their total deal value
  export const getContactWithTotalValue = (contact: Contact, deals: Deal[]) => {
    return {
      ...contact,
      totalDealValue: getTotalDealValue(deals, contact.id),
      formattedTotalValue: formatCurrency(getTotalDealValue(deals, contact.id))
    };
  };

  // Filter deals by stage
  export const getDealsByStage = (deals: Deal[], stage: Deal['stage']): Deal[] => {
    return deals.filter(deal => deal.stage === stage);
  };

  // Get deals created in the last N days
  export const getRecentDeals = (deals: Deal[], days: number): Deal[] => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    return deals.filter(deal => new Date(deal.createdAt) >= cutoffDate);
  };