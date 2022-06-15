import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CrowdFunding,
  CampaignLog
} from "../generated/CrowdFunding/CrowdFunding"
import { CampaignLogEntity } from "../generated/schema"

export function handleCampaignLog(event: CampaignLog): void {
    // 看这个活动有无被创建
  let campaign = CampaignLogEntity.load(event.params.campaignId.toString());

  if(campaign == null) {
      campaign = new CampaignLogEntity(event.params.campaignId.toString());
      campaign.receiver = event.params.receiver as Address;
      campaign.goal = event.params.goal as BigInt;
      campaign.save();
  }
}
