// Type predicates using "is" typescript operator

type FinalInvoice = {
  __typename: 'FinalInvoice';
};

type DraftInvoice = {
  __typename: 'DraftInvoice';
};

type Invoice = FinalInvoice | DraftInvoice;

const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === 'FinalInvoice';
};

const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === 'DraftInvoice';
};

const invoice: Invoice = {
  __typename: 'DraftInvoice',
};

console.log('----Guard predicates----');
console.log('isDraftInvoice()?', isDraftInvoice(invoice));
console.log('isFinalInvoice()?', isFinalInvoice(invoice));
