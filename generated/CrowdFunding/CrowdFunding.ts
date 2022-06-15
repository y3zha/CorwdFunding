// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CampaignLog extends ethereum.Event {
  get params(): CampaignLog__Params {
    return new CampaignLog__Params(this);
  }
}

export class CampaignLog__Params {
  _event: CampaignLog;

  constructor(event: CampaignLog) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get goal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CrowdFunding extends ethereum.SmartContract {
  static bind(address: Address): CrowdFunding {
    return new CrowdFunding("CrowdFunding", address);
  }

  isParticipate(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "isParticipate",
      "isParticipate(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_isParticipate(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isParticipate",
      "isParticipate(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  newCampaign(receiver: Address, goal: BigInt): BigInt {
    let result = super.call(
      "newCampaign",
      "newCampaign(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(goal)
      ]
    );

    return result[0].toBigInt();
  }

  try_newCampaign(
    receiver: Address,
    goal: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "newCampaign",
      "newCampaign(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(goal)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numCampaigns(): BigInt {
    let result = super.call("numCampaigns", "numCampaigns():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numCampaigns(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("numCampaigns", "numCampaigns():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdraw(campaignId: BigInt): boolean {
    let result = super.call("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(campaignId)
    ]);

    return result[0].toBoolean();
  }

  try_withdraw(campaignId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(campaignId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class NewCampaignCall extends ethereum.Call {
  get inputs(): NewCampaignCall__Inputs {
    return new NewCampaignCall__Inputs(this);
  }

  get outputs(): NewCampaignCall__Outputs {
    return new NewCampaignCall__Outputs(this);
  }
}

export class NewCampaignCall__Inputs {
  _call: NewCampaignCall;

  constructor(call: NewCampaignCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get goal(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class NewCampaignCall__Outputs {
  _call: NewCampaignCall;

  constructor(call: NewCampaignCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get reached(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
