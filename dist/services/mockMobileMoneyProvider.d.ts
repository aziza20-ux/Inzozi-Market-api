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
export declare function requestMobileMoneyTransfer(input: ProviderTransferInput): Promise<ProviderTransferResult>;
declare const _default: {
    requestMobileMoneyTransfer: typeof requestMobileMoneyTransfer;
};
export default _default;
//# sourceMappingURL=mockMobileMoneyProvider.d.ts.map