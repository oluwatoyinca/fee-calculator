This is a console application solution that given a tabular set of fees `raw_fees.csv` constructs a tree representing the hierarchy nature of the fees and then performs specific calculations to determine the total fees amount for a given node within the tree. 
Note: Fees within each department are subject to additional surcharges as specified in `calculateFees.js`.

## Getting started

```bash
# Install node modules
npm install
# Install command script
npm install -g .
```

You can now ask for calculated fees globally from your console.

## Asking for calculated fee

To ask for a fee, in your console, run `ask '<You question/criteria for what node's fees to calculate>'`
For example, running `ask 'What are the total Cat1 fees within Quality Assurance Category of the Development department?'` will respond with `110212` which is the total fees for the Development department > Quality Assurance category > Cat1 sub category node.

Your question/criteria should adhere to the following:

- All parent nodes in higher levels of the target node have to be provided. The application will calculate the total fees of the last node with an unbroken chain. If no department level node is provided, the request will fail.
- Criteria for each node on each level must match the value and format provided in csv file. It does not have to be case sensitive.
- You can only specify a single node at each level of the heirachy.

## Uninstalling command

```bash
# Install node modules
npm uninstall fee-calculator
```

The command will now no longer be available.
