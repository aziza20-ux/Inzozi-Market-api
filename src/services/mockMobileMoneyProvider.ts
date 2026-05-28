type ProviderTransferInput = {
  transactionRef: string;
  amount: number;
  payoutAccount: string;
  metadata?: Record<string, string>;
};

type ProviderTransferResult = {
  providerRef: string;
  status: "pending";
};

export async function requestMobileMoneyTransfer(
  input: ProviderTransferInput,
): Promise<ProviderTransferResult> {
  return {
    providerRef: `mock_momo_${input.transactionRef}`,
    status: "pending",
  };
}

export default {
  requestMobileMoneyTransfer,
};
