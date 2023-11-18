import React, { useEffect, useState } from "react"
import { HttpAgent } from "@dfinity/agent";
import { ICWalletList } from "./ICWalletList";
import { UserObject } from "./functions";

export function Parent() {

  const [currentUser, setCurrentUser] = useState<UserObject | null>(null);

  const giveToParent = (principal: string, agent: HttpAgent, provider: string) => {
    setCurrentUser({principal, agent, provider});
  }

  const whitelist: Array<string> = [];

  return (
    <div className="app">
      <ICWalletList giveToParent={giveToParent} whitelist={whitelist} />
    </div>
  )
}