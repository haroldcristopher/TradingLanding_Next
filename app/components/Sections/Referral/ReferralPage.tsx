import React from "react";
import Image from "next/image";
import CallToAction from "../../Buttons/CallToAction";
import ReferralCards from "./ReferralCards";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function ReferralPage() {
  return (
    <article className="maxScreenSize py-[8.75rem] w-[90%]">
      <div className="flex flex-col gap-10 items-center">
        <Image
          src={`${getImageUrl("referral.svg")}`}
          alt="Referral Image"
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-6 items-center">
          <h2 className="heading">
            Earn Money. <span className="text-gradient5">The Easy Way.</span>
          </h2>
          <p className="subtext">
            Best-in-class referral and rebate program. Refer a friend and you
            would get 70%* of fee generated by your friend and your friend would
            get upto 20%* of rebate on fee.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 w-[85%]">
          <ReferralCards
            image={`${getImageUrl("referralCash.svg")}`}
            alt="Daily Payouts"
            text="Daily Payouts"
            width={100}
            height={100}
          />
          <ReferralCards
            image={`${getImageUrl("referralPeople.svg")}`}
            alt="Unlimited Invites"
            text="Unlimited Invites"
            width={100}
            height={100}
          />
          <ReferralCards
            image={`${getImageUrl("detaileddashboard.svg")}`}
            alt="Detailed Dashboard Tracking"
            text="Detailed Dashboard Tracking"
            width={150}
            height={150}
          />
        </div>
        <section className="w-[11.25rem]">
          <CallToAction
            text="Trade Now"
            btnTextStyle="uppercase"
            btnTextColor="text-black"
            subtext1=""
            subtext2=""
            subtext3=""
            overwriteHeight=""
            url="https://url.density.exchange/mWebRedirect"
          />
        </section>
      </div>
    </article>
  );
}

export default ReferralPage;
