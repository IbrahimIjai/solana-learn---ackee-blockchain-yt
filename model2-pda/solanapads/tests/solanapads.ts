import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Solanapads } from "../target/types/solanapads";

import { PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { expect } from "chai";

describe("solanapads", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Solanapads as Program<Solanapads>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods;
    console.log("Your transaction signature", tx);
  });
});


