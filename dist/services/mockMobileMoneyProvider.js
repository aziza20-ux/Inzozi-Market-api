"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMobileMoneyTransfer = requestMobileMoneyTransfer;
async function requestMobileMoneyTransfer(input) {
    return {
        providerRef: `mock_momo_${input.transactionRef}`,
        status: "pending",
    };
}
exports.default = {
    requestMobileMoneyTransfer,
};
//# sourceMappingURL=mockMobileMoneyProvider.js.map